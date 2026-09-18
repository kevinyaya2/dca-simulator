const TWSE_LATEST_API = "https://www.twse.com.tw/exchangeReport/STOCK_DAY_ALL?response=json";
const TWSE_HISTORY_API = "https://www.twse.com.tw/exchangeReport/STOCK_DAY";

function cleanNumber(value) {
  if (value === null || value === undefined || value === "--") return null;
  const number = Number(String(value).replaceAll(",", "").replaceAll("X", ""));
  return Number.isFinite(number) ? number : null;
}

function rocDateToIso(value) {
  const digits = String(value).replaceAll("/", "").replaceAll("-", "").trim();
  if (digits.length !== 7) return null;

  const year = Number(digits.slice(0, 3)) + 1911;
  const month = digits.slice(3, 5);
  const day = digits.slice(5, 7);
  return `${year}-${month}-${day}`;
}

function monthStartFromRocDate(value) {
  const isoDate = rocDateToIso(value);
  if (!isoDate) return null;
  return `${isoDate.slice(0, 4)}${isoDate.slice(5, 7)}01`;
}

function previousMonthStart(dateString) {
  const year = Number(dateString.slice(0, 4));
  const month = Number(dateString.slice(4, 6));
  const date = new Date(year, month - 2, 1);
  return `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, "0")}01`;
}

function normalizeHistory(rows) {
  return rows
    .map((row) => ({
      date: rocDateToIso(row[0]),
      volume: cleanNumber(row[1]),
      value: cleanNumber(row[2]),
      open: cleanNumber(row[3]),
      high: cleanNumber(row[4]),
      low: cleanNumber(row[5]),
      close: cleanNumber(row[6]),
      change: cleanNumber(row[7]),
      transactions: cleanNumber(row[8]),
    }))
    .filter((row) => row.date && row.close !== null)
    .sort((a, b) => a.date.localeCompare(b.date));
}

async function getJson(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`行情服務暫時無法使用（${response.status}）`);
  return response.json();
}

function parseCsvLine(line) {
  const cells = [];
  let value = "";
  let quoted = false;
  for (let index = 0; index < line.length; index += 1) {
    const character = line[index];
    if (character === '"') {
      if (quoted && line[index + 1] === '"') {
        value += '"';
        index += 1;
      } else {
        quoted = !quoted;
      }
    } else if (character === "," && !quoted) {
      cells.push(value.trim());
      value = "";
    } else {
      value += character;
    }
  }
  cells.push(value.trim());
  return cells;
}

function parseLatestCsv(text) {
  const rows = text
    .replace(/^\uFEFF/, "")
    .split(/\r?\n/)
    .map(parseCsvLine)
    .filter((row) => row.length >= 11 && /^\d{4,6}$/.test(row[1]));

  return rows.map((row) => ({
    Date: row[0],
    Code: row[1],
    Name: row[2],
    TradeVolume: row[3],
    TradeValue: row[4],
    OpeningPrice: row[5],
    HighestPrice: row[6],
    LowestPrice: row[7],
    ClosingPrice: row[8],
    Change: row[9],
    Transaction: row[10],
  }));
}

async function fetchLatestRows() {
  const response = await fetch(TWSE_LATEST_API);
  if (!response.ok) throw new Error(`行情服務暫時無法使用（${response.status}）`);
  return parseLatestCsv(await response.text());
}

async function fetchMonthHistory(stockCode, monthStart) {
  const query = new URLSearchParams({
    response: "json",
    date: monthStart,
    stockNo: stockCode,
  });
  const payload = await getJson(`${TWSE_HISTORY_API}?${query}`);
  return payload?.stat === "OK" && Array.isArray(payload.data)
    ? normalizeHistory(payload.data)
    : [];
}

export function isValidTwseCode(value) {
  return /^\d{4,6}$/.test(String(value).trim());
}

export async function fetchTwseStock(stockCode) {
  const code = String(stockCode).trim();
  if (!isValidTwseCode(code)) throw new Error("請輸入 4 至 6 碼的上市股票或 ETF 代碼。");

  const latestRows = await fetchLatestRows();
  const quote = latestRows.find((row) => String(row.Code) === code);
  if (!quote) throw new Error("找不到此上市股票或 ETF，請確認代碼。");

  const monthStart = monthStartFromRocDate(quote.Date);
  let history = monthStart ? await fetchMonthHistory(code, monthStart) : [];
  if (!history.length && monthStart) history = await fetchMonthHistory(code, previousMonthStart(monthStart));

  return {
    code,
    name: quote.Name,
    date: rocDateToIso(quote.Date),
    open: cleanNumber(quote.OpeningPrice),
    high: cleanNumber(quote.HighestPrice),
    low: cleanNumber(quote.LowestPrice),
    close: cleanNumber(quote.ClosingPrice),
    change: cleanNumber(quote.Change),
    volume: cleanNumber(quote.TradeVolume),
    value: cleanNumber(quote.TradeValue),
    transactions: cleanNumber(quote.Transaction),
    history,
  };
}

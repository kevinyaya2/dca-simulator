# React + Vite｜DCA Simulator（One UI 風格）

## CHROMA OPS Multiplayer

Run the client with `npm run dev -- --host 0.0.0.0` and the Socket.IO server with `npm run server:dev`. The default development server is `http://127.0.0.1:3001`; set `VITE_GAME_SERVER_URL` for another endpoint. For phone LAN testing, run `ipconfig`, use the PC IPv4 address in both the browser URL (`http://PC_IP:5173`) and `VITE_GAME_SERVER_URL=http://PC_IP:3001`.

Production client remains GitHub Pages and uses `VITE_GAME_SERVER_URL=https://dca-simulator-uw4r.onrender.com` from `.env.production`. `npm run deploy` now runs a fresh production build before publishing `dist` to the `gh-pages` branch, so do not deploy a previously generated `dist` directory manually.

```bash
npm install
npm run deploy
```

Deploy the server separately with `npm run server:build` then `npm run server:start`, and configure Render with `PORT` plus `CORS_ORIGIN=https://kevinyaya2.github.io`. Free WebSocket hosts may sleep when idle; the first connection can take longer.

### CHROMA OPS 戰鬥更新（協定 4）

單人與多人共用即時命中、兩倍爆頭、步槍／衝鋒槍距離衰減、火焰範圍傷害、燃燒、冰槍減速及火箭遮擋判定。六種武器提供獨立彈道與撞擊特效，射手可看到實際扣血數字。

右上擊殺紀錄保留最多 5 筆、6 秒；4 秒內接續擊殺觸發短時間連殺，同一條命的 3／5／7／10 殺觸發稱號。廣播只有畫面，命中確認仍有短音效。

此次多人協定由 3 升為 4，**前端與 Render 伺服器必須一起更新**。`npm run deploy` 只發布前端；Render 仍需部署包含此次修改的版本，建置 `npm run server:build`、啟動 `npm run server:start`。版本不同時沿用既有提示。

執行 `npm run test:chroma` 驗證共用戰鬥、移動及隨機生成規則。武器數值集中在 `shared/weapons.ts`，戰鬥判定與連殺計數在 `shared/combat.ts`。

本專案是一個使用 **React + Vite** 建立的前端學習專案，  
目標是模擬 **手機介面（Samsung One UI 風格）**，  
並在手機桌面中點擊 App Icon，透過 **Routing** 進入「定期定額模擬器（DCA Simulator）」。

本專案同時用來練習：
- React Function Component
- Hooks（useState / useMemo / useEffect）
- React Router（SPA Routing）
- 表單欄位綁定
- 條件計算與資料派生
- 未來串接 API 的基礎結構

---

## 技術棧（Tech Stack）

- React 19
- Vite 7
- react-router-dom 7
- JavaScript（ESM）
- CSS（玻璃擬態 / One UI 風格）
- ESLint

---

## 環境需求

- Node.js **v18 以上（建議 v20）**
- npm（隨 Node.js 安裝）

檢查版本：
```bash
node -v
npm -v

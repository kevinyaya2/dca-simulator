import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { fmtMoney } from "../engine";

function formatAxisMoney(value) {
  if (Math.abs(value) >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
  if (Math.abs(value) >= 1000) return `${(value / 1000).toFixed(0)}K`;
  return `${Math.round(value)}`;
}

export default function TrendChart({ rows }) {
  return (
    <div className="cg-chartWrap">
      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={rows} margin={{ top: 8, right: 12, left: 4, bottom: 0 }}>
          <CartesianGrid stroke="rgba(200, 235, 255, 0.18)" strokeDasharray="3 3" />
          <XAxis
            dataKey="round"
            tickFormatter={(value) => `R${value}`}
            stroke="rgba(215, 232, 255, 0.72)"
            tick={{ fontSize: 11 }}
          />
          <YAxis
            stroke="rgba(215, 232, 255, 0.72)"
            tick={{ fontSize: 11 }}
            tickFormatter={formatAxisMoney}
            width={52}
          />
          <YAxis yAxisId="roi" orientation="right" hide domain={["auto", "auto"]} />
          <Tooltip
            cursor={{ stroke: "rgba(128, 230, 255, 0.55)", strokeWidth: 1.5 }}
            formatter={(value, name) => {
              const labelMap = {
                totalAsset: "總資產",
                totalInvested: "投入成本",
                roi: "ROI",
              };
              if (name === "roi") return [`${value.toFixed(2)}%`, labelMap[name]];
              return [fmtMoney(value), labelMap[name]];
            }}
            labelFormatter={(label) => `第 ${label} 回合`}
            contentStyle={{
              borderRadius: 14,
              border: "1px solid rgba(180, 222, 255, 0.45)",
              background: "rgba(10, 18, 40, 0.92)",
              boxShadow: "0 12px 30px rgba(0, 0, 0, 0.35)",
              color: "rgba(236, 244, 255, 0.96)",
            }}
          />
          <Line
            type="monotone"
            dataKey="totalAsset"
            stroke="#61f1ff"
            strokeWidth={3}
            dot={{ r: 3, strokeWidth: 0, fill: "#b5fcff" }}
            activeDot={{ r: 5, strokeWidth: 0, fill: "#ffffff" }}
          />
          <Line
            type="monotone"
            dataKey="totalInvested"
            stroke="#ffd58a"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, strokeWidth: 0, fill: "#fff4d8" }}
          />
          <Line
            type="monotone"
            dataKey="roi"
            stroke="#ff7dc8"
            strokeWidth={2}
            dot={false}
            yAxisId="roi"
            opacity={0.9}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

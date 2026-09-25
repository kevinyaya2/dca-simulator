# React + Vite｜DCA Simulator（One UI 風格）

## CHROMA OPS Multiplayer

Run the client with `npm run dev -- --host 0.0.0.0` and the Socket.IO server with `npm run server:dev`. The default development server is `http://127.0.0.1:3001`; set `VITE_GAME_SERVER_URL` for another endpoint. For phone LAN testing, run `ipconfig`, use the PC IPv4 address in both the browser URL (`http://PC_IP:5173`) and `VITE_GAME_SERVER_URL=http://PC_IP:3001`.

Production client remains GitHub Pages and uses `VITE_GAME_SERVER_URL=https://dca-simulator-uw4r.onrender.com` from `.env.production`. `npm run deploy` now runs a fresh production build before publishing `dist` to the `gh-pages` branch, so do not deploy a previously generated `dist` directory manually.

```bash
npm install
npm run deploy
```

Deploy the server separately with `npm run server:build` then `npm run server:start`, and configure Render with `PORT` plus `CORS_ORIGIN=https://kevinyaya2.github.io`. Free WebSocket hosts may sleep when idle; the first connection can take longer.

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

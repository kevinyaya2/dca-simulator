# React + Vite｜DCA Simulator（One UI 風格）

## CHROMA OPS Multiplayer

Run the client with `npm run dev -- --host 0.0.0.0` and the Socket.IO server with `npm run server:dev`. The default development server is `http://127.0.0.1:3001`; set `VITE_GAME_SERVER_URL` for another endpoint. For phone LAN testing, run `ipconfig`, use the PC IPv4 address in both the browser URL (`http://PC_IP:5173`) and `VITE_GAME_SERVER_URL=http://PC_IP:3001`.

Production client remains GitHub Pages and uses `VITE_GAME_SERVER_URL=https://dca-simulator-uw4r.onrender.com` from `.env.production`. `npm run deploy` now runs a fresh production build before publishing `dist` to the `gh-pages` branch, so do not deploy a previously generated `dist` directory manually.

```bash
npm install
npm run deploy
```

Deploy the server separately with `npm run server:build` then `npm run server:start`, and configure Render with `PORT` plus `CORS_ORIGIN=https://kevinyaya2.github.io`. Free WebSocket hosts may sleep when idle; the first connection can take longer.

### CHROMA OPS 擴充街區與 B1 商場（協定 8）

城市現有十棟可進入建築，新增六棟位於 `x=±112`、`z=-90/-12/92`，原北側兩棟也開放室內。每棟皆有地面、6 公尺二樓、12 公尺屋頂、室內樓梯及外部斜坡；保留摩天輪廣場、空橋與中央高台。

B1 商場位於 `x=-90～90、z=-22～26`、樓面 `y=-6`，有中央大廳、八間店面與環狀通道。北／南入口是斜坡（地面口 `z=-46/50`），東／西是樓梯（地面口 `x=±114、z=9`）。地下保持固定照明，地面沿用日夜循環。地面樓板具備實際入口開孔、碰撞及子彈／爆炸遮擋。

單人 AI 使用三維路線圖與共用移動物理往返地面、B1，維持原本速度，暫不主動探索二樓、屋頂或搭乘平台。玩家與 AI 仍只在安全地面點出生。初始衝鋒槍、霰彈槍放在地下兩側；所有武器重生候選點包含地面與地下。多人拾取物新增 `y`（樓面高度），畫面與拾取判定統一使用 `y+0.9`；雷達新增 B1／1F／2F／RF 與高低箭頭。

共用地下結構與入口在 `shared/underground.ts`，AI 路線圖在 `shared/navigation.ts`。地表高度供地面出生使用，物理基底與實體樓板共同支援上下層；移動碰撞使用靜態空間索引縮小查詢範圍。`tests/chroma-city.html` 新增 B1 商場、入口及外圍建築視角；重開測試同時檢查 B1 預測修正、拾取物與雷達樓層。

西南 WEST ARCADE、東南 EAST STATION 的二樓折線空橋保留橋下街道，屋頂步道接中央高台。花台、長椅、路燈柱與建築是實體掩體；彩色樹冠、窗框、招牌及地面光圈是裝飾。

東側 `(68, 28)` 的 4×4 公尺升降平台停靠 0／6／12 公尺，南側開口可進出、射擊或跳離。每站停 3 秒、每段移動 4 秒，以 0→6→12→6→0 完成 28 秒循環。玩家可搭乘，AI 不主動進入平台或建築外部斜坡。

日夜以 240 秒循環：白天 90 秒、黃昏 30 秒、黑夜 90 秒、清晨 30 秒。夜景使用材質配色、亮窗框、路燈光圈及霓虹摩天輪，不增加即時陰影或全畫面泛光。角色辨識色、HUD 與戰鬥規則不變，鏡內外共用同一環境。

伺服器的 `environmentTime` 僅在 PLAYING 推進，新房間為 0；同房間重開接續，結算與大廳暫停。單人設定面板會一起暫停日夜與移動平台。日夜時間與每場的 `simulationTime` 分開：升降平台、摩天輪、預測與快照在新場重設，仍由 `roundId` 隔離舊封包。共用地形在 `shared/city.ts`，移動平台在 `shared/movingPlatforms.ts`，日夜計算在 `shared/dayNight.ts`。

開發測試頁 `/dca-simulator/tests/chroma-city.html` 可切換四階段、建築入口、升降平台、夜間開鏡與 844×390 觸控版面，也可檢查單人設定暫停。手機真機效能仍需在目標裝置實測。

單人與多人共用即時命中、兩倍爆頭、步槍／衝鋒槍距離衰減、火焰範圍傷害、燃燒、冰槍減速及火箭遮擋判定。七種武器提供獨立彈道與撞擊特效，射手可看到實際扣血數字。

地圖北側 `(0, -90)` 新增可自由搭乘的摩天輪，8 個水平車廂每 60 秒轉一圈。從南側開口走上或跳上車廂，可移動、射擊及跳離；多人使用伺服器時間同步車廂和乘客，單人暫停時摩天輪一起暫停。

一般移速為 13，跑步為 19.5。電腦按住 Shift 跑步、1–7 切換已取得武器，狙擊槍按住右鍵開鏡；手機點按「跑步」和「瞄準」切換狀態。跑步、換彈、換槍或開啟面板會退鏡。狙擊槍需在地圖拾取，身體傷害 80、爆頭 160、5 發彈匣、射擊間隔 1 秒、換彈 2.5 秒；中央六角鏡框內為 4 倍畫面，鏡外維持一般視野。

右上擊殺紀錄保留最多 5 筆、6 秒；4 秒內接續擊殺觸發短時間連殺，同一條命的 3／5／7／10 殺觸發稱號。廣播只有畫面，命中確認仍有短音效。

多人重開已加入每場獨立的 `roundId`，開始新場時重設指令編號，並重建客戶端的預測、快照與畫面狀態。舊場的輸入、射擊與傷害封包會被忽略。離場時會釋放角色、死亡碎片材質、姓名貼圖、槍枝、拾取物及 WebGL 資源，並移除事件監聽器與動畫迴圈。

此次多人協定由 7 升為 8，**前端與 Render 伺服器必須一起更新**。`npm run deploy` 只發布前端；Render 仍需部署包含此次修改的版本，建置 `npm run server:build`、啟動 `npm run server:start`。版本不同時沿用既有提示。

執行 `npm run test:chroma` 驗證共用戰鬥、移動、搭乘、觸控／鍵鼠、雙客戶端同步與重開回歸。武器數值集中在 `shared/weapons.ts`，戰鬥判定與連殺計數在 `shared/combat.ts`，車廂位置與碰撞在 `shared/ferrisWheel.ts`。開發伺服器的 `/dca-simulator/tests/chroma-visual.html` 提供摩天輪、開鏡、搭乘、暫停與觸控排版檢查場景；`/dca-simulator/tests/chroma-rematch.html` 可連續重建十場，檢查 GPU 資源、Socket 監聽器、動畫迴圈與 DOM 是否釋放。這些測試頁不會加入正式建置。

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

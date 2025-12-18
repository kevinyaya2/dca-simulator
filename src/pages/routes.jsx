import Home from "./Home";
import DCA from "./DCA";
import InvestmentGame from "./InvestmentGame";
import CardGame from "./CardGame";
import FightGame from "./FightGame";
import SnakeGame from "./SnakeGame";

// 路由配置：集中管理所有頁面路由
const routes = [
  {
    path: "/",
    element: <Home />,
    title: "首頁",
  },
  {
    path: "/dca",
    element: <DCA />,
    title: "定期定額模擬器",
  },
  {
    path: "/game",
    element: <InvestmentGame />,
    title: "投資遊戲",
  },
  {
    path: "/cards",
    element: <CardGame />,
    title: "投資卡牌",
  },
  {
    path: "/fight",
    element: <FightGame />,
    title: "柴剛格鬥",
  },
  {
    path: "/snake",
    element: <SnakeGame />,
    title: "柴剛貪吃蛇",
  },
];

export default routes;

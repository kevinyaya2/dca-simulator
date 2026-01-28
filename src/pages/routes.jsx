import Home from "./Home";
import DCA from "./DCA";
import CardGame from "./CardGame";
import FightGame from "./FightGame";
import JumpGame from "./JumpGame";
import AutoBattle from "./AutoBattle";
import ToeicVocab from "./ToeicVocab";

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
    path: "/jump",
    element: <JumpGame />,
    title: "柴剛跳跳",
  },
  {
    path: "/autobattle",
    element: <AutoBattle />,
    title: "可愛推線",
  },
  {
    path: "/toeic",
    element: <ToeicVocab />,
    title: "多益單字",
  },
];

export default routes;

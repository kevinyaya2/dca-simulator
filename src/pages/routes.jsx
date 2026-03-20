import Home from "./Home";
import DCA from "./DCA";
import MDCalculator from "./MDCalculator";
import MonteCarloPi from "./MonteCarloPi";
import RandomWalk from "./RandomWalk";
import MandelbrotExplorer from "./MandelbrotExplorer";
import CardGame from "./CardGame";
import FightGame from "./FightGame";
import JumpGame from "./JumpGame";
import AutoBattle from "./AutoBattle";
import ToeicVocab from "./ToeicVocab";
import FlappySalaryGame from "./FlappySalaryGame";
import SpicyGame from "./SpicyGame";
import BombGame from "./BombGame";
import CrossyRoad from "./CrossyRoad";

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
    title: "柴剛推線",
  },
  {
    path: "/toeic",
    element: <ToeicVocab />,
    title: "多益單字",
  },
  {
    path: "/flappy",
    element: <FlappySalaryGame />,
    title: "薪水小鳥",
  },
  {
    path: "/spicy",
    element: <SpicyGame />,
    title: "辣度挑戰",
  },
  {
    path: "/md-calc",
    element: <MDCalculator />,
    title: "MD 段位計算器",
  },
  {
    path: "/monte-carlo",
    element: <MonteCarloPi />,
    title: "蒙特卡洛 π",
  },
  {
    path: "/random-walk",
    element: <RandomWalk />,
    title: "隨機漫步",
  },
  {
    path: "/mandelbrot",
    element: <MandelbrotExplorer />,
    title: "曼德博集合",
  },
  {
    path: "/bomb",
    element: <BombGame />,
    title: "炸彈超人",
  },
  {
    path: "/crossy",
    element: <CrossyRoad />,
    title: "天天過馬路",
  },
];

export default routes;

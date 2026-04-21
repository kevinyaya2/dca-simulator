import { lazy } from "react";

const Home = lazy(() => import("./Home"));
const DCA = lazy(() => import("./DCA"));
const MDCalculator = lazy(() => import("./MDCalculator"));
const MonteCarloPi = lazy(() => import("./MonteCarloPi"));
const RandomWalk = lazy(() => import("./RandomWalk"));
const MandelbrotExplorer = lazy(() => import("./MandelbrotExplorer"));
const CardGame = lazy(() => import("./CardGame"));
const FightGame = lazy(() => import("./FightGame"));
const JumpGame = lazy(() => import("./JumpGame"));
const AutoBattle = lazy(() => import("./AutoBattle"));
const ToeicVocab = lazy(() => import("./ToeicVocab"));
const FlappySalaryGame = lazy(() => import("./FlappySalaryGame"));
const SpicyGame = lazy(() => import("./SpicyGame"));
const BombGame = lazy(() => import("./BombGame"));
const CrossyRoad = lazy(() => import("./CrossyRoad"));
const PetBuddy = lazy(() => import("./PetBuddy"));

const routes = [
  { path: "/", element: <Home />, title: "Home" },
  { path: "/dca", element: <DCA />, title: "DCA Simulator" },
  { path: "/cards", element: <CardGame />, title: "Deck Builder" },
  { path: "/fight", element: <FightGame />, title: "Fight Game" },
  { path: "/jump", element: <JumpGame />, title: "Jump Game" },
  { path: "/autobattle", element: <AutoBattle />, title: "Auto Battle" },
  { path: "/toeic", element: <ToeicVocab />, title: "TOEIC Vocab" },
  { path: "/flappy", element: <FlappySalaryGame />, title: "Flappy Salary" },
  { path: "/spicy", element: <SpicyGame />, title: "Spicy Game" },
  { path: "/md-calc", element: <MDCalculator />, title: "MD Calculator" },
  { path: "/monte-carlo", element: <MonteCarloPi />, title: "Monte Carlo Pi" },
  { path: "/random-walk", element: <RandomWalk />, title: "Random Walk" },
  { path: "/mandelbrot", element: <MandelbrotExplorer />, title: "Mandelbrot" },
  { path: "/bomb", element: <BombGame />, title: "Bomberman" },
  { path: "/crossy", element: <CrossyRoad />, title: "Crossy Shiba" },
  { path: "/pet", element: <PetBuddy />, title: "Pet Buddy" },
];

export default routes;

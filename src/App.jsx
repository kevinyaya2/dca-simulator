import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DCA from "./pages/DCA";
import InvestmentGame from "./pages/InvestmentGame";
import CardGame from "./pages/CardGame";
import FightGame from "./pages/FightGame";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dca" element={<DCA />} />
        <Route path="/game" element={<InvestmentGame />} />
        <Route path="/cards" element={<CardGame />} />
        <Route path="/fight" element={<FightGame />} />
      </Routes>
    </Router>
  );
}

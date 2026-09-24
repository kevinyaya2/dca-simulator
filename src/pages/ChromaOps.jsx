import { useEffect, useRef } from "react";
import { Game } from "../chroma-ops/core/Game";
import "./ChromaOps.css";
import "./MobileControls.css";

export default function ChromaOps() {
  const ref = useRef(null);
  useEffect(() => { const game = new Game(ref.current); game.start(); return () => game.dispose(); }, []);
  return <main className="chroma-ops" ref={ref} aria-label="CHROMA OPS game"><div className="co-start">CHROMA OPS <small>Click to lock aim · WASD / Mouse / Fire</small></div></main>;
}

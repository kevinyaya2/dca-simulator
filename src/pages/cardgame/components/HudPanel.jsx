import { motion } from "motion/react";
import { fmtMoney } from "../engine";

function ValueFlip({ value, className }) {
  return (
    <motion.div
      key={value}
      className={className}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {value}
    </motion.div>
  );
}

export default function HudPanel({
  round,
  maxRounds,
  totalAsset,
  cash,
  asset,
  roi,
  investmentStyle,
}) {
  return (
    <section className="card hero cg-hud">
      <div className="cg-roundChip">ROUND {round} / {maxRounds}</div>

      <div className="heroRow">
        <div>
          <div className="label">總資產</div>
          <ValueFlip value={fmtMoney(totalAsset)} className="big cg-assetBig" />
        </div>
        <div className="pill cg-roiPill">
          <div className="pillTop">ROI</div>
          <ValueFlip
            value={`${roi.toFixed(2)}%`}
            className={`pillBottom ${roi >= 0 ? "pos" : "neg"}`}
          />
        </div>
      </div>

      <div className="grid2">
        <div className="mini cg-mini">
          <div className="label">現金</div>
          <ValueFlip value={fmtMoney(cash)} className="value" />
        </div>
        <div className="mini cg-mini">
          <div className="label">投資部位</div>
          <ValueFlip value={fmtMoney(asset)} className="value" />
        </div>
      </div>

      <div className="cg-styleLine">
        <span className="cg-styleLabel">風格判定</span>
        <motion.span
          key={investmentStyle}
          className="cg-styleValue"
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
        >
          {investmentStyle}
        </motion.span>
      </div>
    </section>
  );
}

import { AnimatePresence, motion } from "motion/react";

function toneClass(tone) {
  if (tone === "danger") return "cg-market-danger";
  if (tone === "cool") return "cg-market-cool";
  if (tone === "hot") return "cg-market-hot";
  if (tone === "warm") return "cg-market-warm";
  return "cg-market-neutral";
}

export default function MarketEventPanel({ market }) {
  return (
    <section className="card cg-marketSection">
      <div className="sectionTitle">市場事件</div>
      <AnimatePresence mode="wait">
        {market ? (
          <motion.div
            key={market.id}
            className={`cg-marketCard ${toneClass(market.tone)}`}
            initial={{ opacity: 0, y: 14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.99 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <div className="cg-marketTop">
              <div className="cg-marketName">
                <span className="cg-marketIcon" aria-hidden="true">
                  {market.icon}
                </span>
                {market.name}
              </div>
              <div className="cg-marketShift">
                {market.multiplier >= 1 ? "+" : ""}
                {((market.multiplier - 1) * 100).toFixed(0)}%
              </div>
            </div>
            <div className="cg-marketDesc">{market.desc}</div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}

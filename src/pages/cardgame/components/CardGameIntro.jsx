import { motion } from "motion/react";

export default function CardGameIntro({
  initialCash,
  maxRounds,
  cards,
  onStart,
  fmtMoney,
}) {
  return (
    <motion.section
      className="card hero cg-intro"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
    >
      <div className="cg-introTitle">🃏 投資牌局 · Deck Arena</div>
      <div className="cg-introDesc">
        <p>初始資金：{fmtMoney(initialCash)}</p>
        <p>總回合：{maxRounds} 回合</p>
        <p>每回合抽 3 張牌，擇一出牌</p>
        <p>每回合追加現金，管理風險與報酬</p>
      </div>

      <div className="cg-previewBlock">
        <div className="cg-previewTitle">卡牌庫預覽</div>
        <div className="cg-previewGrid">
          {cards.slice(0, 6).map((card, index) => (
            <motion.div
              key={card.id}
              className="cg-previewCard"
              style={{ background: card.color }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.04 }}
            >
              <div className="cg-previewCardName">{card.name}</div>
              <div className="cg-previewCardRisk">{card.riskLevel} 風險</div>
            </motion.div>
          ))}
        </div>
      </div>

      <button className="btn solid fullWidth" onClick={onStart} type="button">
        開始牌局
      </button>
    </motion.section>
  );
}

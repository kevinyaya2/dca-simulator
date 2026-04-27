import { motion } from "motion/react";
import { fmtMoney } from "../engine";

function deltaClass(value) {
  if (value > 0) return "pos";
  if (value < 0) return "neg";
  return "";
}

export default function CardHandPanel({
  hand,
  selectedCardId,
  previewMap,
  onSelect,
}) {
  return (
    <section className="card cg-handSection">
      <div className="sectionTitle">本回合手牌（擇一出牌）</div>
      <div className="cg-cardHand">
        {hand.map((card, index) => {
          const preview = previewMap[card.id];
          return (
            <motion.button
              key={card.id}
              type="button"
              className={`cg-gameCard ${selectedCardId === card.id ? "selected" : ""}`}
              style={{ background: card.color }}
              onClick={() => onSelect(card.id)}
              initial={{ opacity: 0, y: 20, rotateX: -6 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.2, delay: index * 0.06 }}
            >
              <div className="cg-gameCardInner">
                <div className="cg-gameCardName">{card.name}</div>
                <div className="cg-gameCardDesc">{card.description}</div>
                <div className="cg-cardMeta">
                  <span className="cg-riskBadge">{card.riskLevel} 風險</span>
                  {preview ? (
                    <span className={`cg-previewDelta ${deltaClass(preview.delta)}`}>
                      預估 {preview.delta >= 0 ? "+" : ""}
                      {fmtMoney(preview.delta)}
                    </span>
                  ) : null}
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}

import { AnimatePresence, motion } from "motion/react";
import { fmtMoney } from "../engine";

function ChangeTag({ label, value }) {
  return (
    <div className="cg-changeTag">
      <span>{label}</span>
      <strong className={value >= 0 ? "pos" : "neg"}>
        {value >= 0 ? "+" : ""}
        {fmtMoney(value)}
      </strong>
    </div>
  );
}

export default function ActionPanel({ selectedCard, selectedPreview, lastAction }) {
  const hasAction = Boolean(lastAction);
  return (
    <section className="card cg-actionSection">
      <div className="sectionTitle">{hasAction ? "本回合結算" : "出牌預估"}</div>
      <AnimatePresence mode="wait">
        {hasAction ? (
          <motion.div
            key="result"
            className="cg-actionResult"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="cg-actionMessage">{lastAction.message}</div>
            <div className="cg-actionSummary">{lastAction.summary}</div>
            <div className="cg-changeRow">
              <ChangeTag label="現金變動" value={lastAction.cashChange} />
              <ChangeTag label="部位變動" value={lastAction.assetChange} />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="preview"
            className="cg-actionPreview"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {selectedCard && selectedPreview ? (
              <>
                <div className="cg-previewName">{selectedCard.name}</div>
                <div className="cg-previewProjected">
                  預估總資產：{fmtMoney(selectedPreview.projectedTotal)}
                </div>
                <div className="cg-changeRow">
                  <ChangeTag label="本回合估計" value={selectedPreview.delta} />
                </div>
              </>
            ) : (
              <div className="cg-emptyHint">選擇一張牌後，會顯示本回合資產預估。</div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

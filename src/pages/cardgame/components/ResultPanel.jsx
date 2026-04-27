import { motion } from "motion/react";
import { fmtMoney } from "../engine";

export default function ResultPanel({
  totalAsset,
  roi,
  totalInvested,
  investmentStyle,
  chartSlot,
  history,
  getMarketById,
  getCardById,
}) {
  return (
    <>
      <motion.section
        className="card hero cg-resultHero"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.24 }}
      >
        <div className="cg-introTitle">🏁 牌局結算</div>
        <div className="heroRow">
          <div>
            <div className="label">最終總資產</div>
            <div className="big cg-assetBig">{fmtMoney(totalAsset)}</div>
          </div>
          <div className="pill cg-roiPill">
            <div className="pillTop">總 ROI</div>
            <div className={`pillBottom ${roi >= 0 ? "pos" : "neg"}`}>
              {roi.toFixed(2)}%
            </div>
          </div>
        </div>

        <div className="grid2">
          <div className="mini cg-mini">
            <div className="label">總投入成本</div>
            <div className="value">{fmtMoney(totalInvested)}</div>
          </div>
          <div className="mini cg-mini">
            <div className="label">投資風格</div>
            <div className="value">{investmentStyle}</div>
          </div>
        </div>
      </motion.section>

      <section className="card cg-chartSection">
        <div className="sectionTitle">資金波動總覽</div>
        {chartSlot}
      </section>

      <section className="card cg-historySection">
        <div className="sectionTitle">回合紀錄</div>
        <div className="cg-historyList">
          {history
            .filter((row) => row.round !== 0)
            .map((record) => {
              const market = getMarketById(record.marketId);
              const card = getCardById(record.cardId);
              return (
                <div key={`${record.round}-${record.cardId}`} className="cg-historyItem">
                  <div className="cg-historyRound">R{record.round}</div>
                  <div className="cg-historyMeta">
                    <div className="cg-historyMarket">
                      {market ? `${market.icon} ${market.name}` : record.marketId}
                    </div>
                    <div className="cg-historyCard">{card ? card.name : record.cardId}</div>
                  </div>
                  <div className="cg-historyTotal">{fmtMoney(record.totalAsset)}</div>
                </div>
              );
            })}
        </div>
      </section>
    </>
  );
}

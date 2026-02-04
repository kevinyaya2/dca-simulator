import { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// 引入圖片資源
import chaiGangImg from "../assets/chai-gang.png";
import stressMonsterImg from "../assets/stress-monster.png";
import skillPunchImg from "../assets/skill-punch.png";
import skillShieldImg from "../assets/skill-shield.png";
import skillComboImg from "../assets/skill-combo.png";
import skillHealImg from "../assets/skill-heal.png";
import skillUltimateImg from "../assets/skill-ultimate.png";
import effectKpiImg from "../assets/effect-kpi.png";
import effectAnxietyImg from "../assets/effect-anxiety.png";

// 遊戲常數
const PLAYER_MAX_HP = 100;
const ENEMY_MAX_HP = 120;

// 柴剛技能定義
const SKILLS = [
  {
    id: "punch",
    name: "加班拳",
    icon: skillPunchImg,
    cooldown: 0,
    description: "對敵人造成 12~18 傷害",
    execute: () => {
      const damage = Math.floor(Math.random() * 7) + 12; // 12-18
      return { damage, heal: 0, shield: false, message: `加班拳！造成 ${damage} 傷害` };
    },
  },
  {
    id: "shield",
    name: "存錢盾",
    icon: skillShieldImg,
    cooldown: 2,
    description: "下回合減傷 50%",
    execute: () => {
      return { damage: 0, heal: 0, shield: true, message: "啟動存錢盾！下回合減傷 50%" };
    },
  },
  {
    id: "combo",
    name: "家教連擊",
    icon: skillComboImg,
    cooldown: 2,
    description: "連續攻擊 2 次（每次 8~12）",
    execute: () => {
      const hit1 = Math.floor(Math.random() * 5) + 8;
      const hit2 = Math.floor(Math.random() * 5) + 8;
      const total = hit1 + hit2;
      return { damage: total, heal: 0, shield: false, message: `家教連擊！${hit1} + ${hit2} = ${total} 傷害` };
    },
  },
  {
    id: "heal",
    name: "週五回血",
    icon: skillHealImg,
    cooldown: 3,
    description: "回復 15 HP",
    execute: () => {
      return { damage: 0, heal: 15, shield: false, message: "週五早下班！回復 15 HP" };
    },
  },
  {
    id: "ultimate",
    name: "上岸必殺",
    icon: skillUltimateImg,
    cooldown: 999, // 只能用一次
    description: "造成 35 傷害（僅一次）",
    execute: () => {
      return { damage: 35, heal: 0, shield: false, message: "🔥 上岸必殺！造成 35 傷害！" };
    },
  },
];

// 敵人技能
const ENEMY_SKILLS = [
  { id: "kpi", name: "KPI 重壓", icon: effectKpiImg, minDmg: 10, maxDmg: 15, heal: 0, weight: 50 },
  { id: "anxiety", name: "焦慮爆擊", icon: effectAnxietyImg, minDmg: 20, maxDmg: 28, heal: 0, weight: 15 },
  { id: "drain", name: "情緒吸血", icon: effectAnxietyImg, minDmg: 8, maxDmg: 12, heal: 8, weight: 35 },
];

// 根據權重隨機選擇敵人技能
function getRandomEnemySkill() {
  const totalWeight = ENEMY_SKILLS.reduce((sum, s) => sum + s.weight, 0);
  let rand = Math.random() * totalWeight;
  for (const skill of ENEMY_SKILLS) {
    rand -= skill.weight;
    if (rand <= 0) return skill;
  }
  return ENEMY_SKILLS[0];
}

export default function FightGame() {
  const navigate = useNavigate();

  // 遊戲狀態
  const [playerHp, setPlayerHp] = useState(PLAYER_MAX_HP);
  const [enemyHp, setEnemyHp] = useState(ENEMY_MAX_HP);
  const [turn, setTurn] = useState("player"); // player | enemy
  const [gameState, setGameState] = useState("playing"); // playing | win | lose
  const [skillCooldowns, setSkillCooldowns] = useState({});
  const [ultimateUsed, setUltimateUsed] = useState(false);
  const [shieldActive, setShieldActive] = useState(false);
  const [battleLog, setBattleLog] = useState(["⚔️ 戰鬥開始！柴剛 vs 生活壓力怪"]);

  // 動畫狀態
  const [playerAnim, setPlayerAnim] = useState("");
  const [enemyAnim, setEnemyAnim] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeEnemySkill, setActiveEnemySkill] = useState(null); // 敵人當前使用的技能

  // 計算 HP 百分比
  const playerHpPercent = useMemo(() => Math.max(0, (playerHp / PLAYER_MAX_HP) * 100), [playerHp]);
  const enemyHpPercent = useMemo(() => Math.max(0, (enemyHp / ENEMY_MAX_HP) * 100), [enemyHp]);

  // 判斷技能是否可用
  const canUseSkill = useMemo(() => {
    return (skillId) => {
      if (turn !== "player" || gameState !== "playing" || isAnimating) return false;
      if (skillId === "ultimate" && ultimateUsed) return false;
      if (skillCooldowns[skillId] > 0) return false;
      return true;
    };
  }, [turn, gameState, isAnimating, ultimateUsed, skillCooldowns]);

  // 添加戰鬥紀錄
  const addLog = (msg) => {
    setBattleLog((prev) => [...prev.slice(-4), msg]);
  };

  // 玩家使用技能
  const handleSkill = (skill) => {
    if (!canUseSkill(skill.id)) return;

    setIsAnimating(true);
    const result = skill.execute();

    // 播放攻擊動畫
    if (result.damage > 0) {
      setPlayerAnim("attacking");
      setTimeout(() => {
        setEnemyAnim("hit");
        setEnemyHp((prev) => Math.max(0, prev - result.damage));
      }, 200);
    }

    // 處理回血
    if (result.heal > 0) {
      setPlayerAnim("healing");
      setPlayerHp((prev) => Math.min(PLAYER_MAX_HP, prev + result.heal));
    }

    // 處理護盾
    if (result.shield) {
      setPlayerAnim("shielding");
      setShieldActive(true);
    }

    // 設置冷卻
    if (skill.id === "ultimate") {
      setUltimateUsed(true);
    } else if (skill.cooldown > 0) {
      setSkillCooldowns((prev) => ({ ...prev, [skill.id]: skill.cooldown }));
    }

    addLog(`🔵 柴剛：${result.message}`);

    // 動畫結束後切換回合
    setTimeout(() => {
      setPlayerAnim("");
      setEnemyAnim("");
      setIsAnimating(false);
      setTurn("enemy");
    }, 800);
  };

  // 敵人回合
  useEffect(() => {
    if (turn !== "enemy" || gameState !== "playing") return;

    const timer = setTimeout(() => {
      // 檢查敵人是否已死亡
      if (enemyHp <= 0) {
        setGameState("win");
        addLog("🎉 柴剛成功上岸！");
        return;
      }

      setIsAnimating(true);
      const skill = getRandomEnemySkill();
      setActiveEnemySkill(skill); // 顯示敵人技能圖示
      let damage = Math.floor(Math.random() * (skill.maxDmg - skill.minDmg + 1)) + skill.minDmg;

      // 護盾減傷
      if (shieldActive) {
        damage = Math.floor(damage * 0.5);
        setShieldActive(false);
        addLog("🛡️ 存錢盾抵擋了部分傷害！");
      }

      // 播放敵人攻擊動畫
      setEnemyAnim("attacking");
      setTimeout(() => {
        setPlayerAnim("hit");
        setPlayerHp((prev) => Math.max(0, prev - damage));

        // 敵人回血
        if (skill.heal > 0) {
          setEnemyHp((prev) => Math.min(ENEMY_MAX_HP, prev + skill.heal));
        }

        const healMsg = skill.heal > 0 ? `，並回復 ${skill.heal} HP` : "";
        addLog(`🔴 壓力怪：${skill.name}！造成 ${damage} 傷害${healMsg}`);
      }, 200);

      // 動畫結束後切換回合
      setTimeout(() => {
        setPlayerAnim("");
        setEnemyAnim("");
        setIsAnimating(false);
        setActiveEnemySkill(null); // 清除敵人技能顯示

        // 減少冷卻
        setSkillCooldowns((prev) => {
          const updated = {};
          for (const key in prev) {
            if (prev[key] > 1) updated[key] = prev[key] - 1;
          }
          return updated;
        });

        setTurn("player");
      }, 1000);
    }, 800);

    return () => clearTimeout(timer);
  }, [turn, gameState, enemyHp, shieldActive]);

  // 檢查勝負（改用 useMemo 計算，避免 useEffect 中 setState）
  const checkGameResult = useMemo(() => {
    if (gameState !== "playing") return null;
    if (playerHp <= 0) return "lose";
    if (enemyHp <= 0) return "win";
    return null;
  }, [playerHp, enemyHp, gameState]);

  // 當勝負結果改變時更新遊戲狀態
  useEffect(() => {
    if (checkGameResult === "lose") {
      setTimeout(() => {
        setGameState("lose");
        addLog("😵 被生活壓力擊倒...");
      }, 500);
    } else if (checkGameResult === "win") {
      setTimeout(() => {
        setGameState("win");
        addLog("🎉 柴剛成功上岸！");
      }, 500);
    }
  }, [checkGameResult]);

  // 重新開始
  const resetGame = () => {
    setPlayerHp(PLAYER_MAX_HP);
    setEnemyHp(ENEMY_MAX_HP);
    setTurn("player");
    setGameState("playing");
    setSkillCooldowns({});
    setUltimateUsed(false);
    setShieldActive(false);
    setBattleLog(["⚔️ 戰鬥開始！柴剛 vs 生活壓力怪"]);
    setPlayerAnim("");
    setEnemyAnim("");
    setIsAnimating(false);
    setActiveEnemySkill(null);
  };

  return (
    <div className="oneui">
      <div className="shell fightShell">
        {/* 頂部標題 */}
        <header className="top">
          <div className="titleRow">
            <div>
              <button className="backBtn" onClick={() => navigate("/")}>
                ← 返回
              </button>
              <div className="title">柴剛格鬥</div>
              <div className="subtitle">回合制對戰｜柴剛 vs 生活壓力怪</div>
            </div>
          </div>
        </header>

        <main className="content fightContent">
          {/* 回合提示 */}
          <div className="turnIndicator">
            {gameState === "playing" ? (
              turn === "player" ? "🔵 你的回合" : "🔴 敵人回合"
            ) : gameState === "win" ? (
              "🎉 勝利！"
            ) : (
              "💀 失敗..."
            )}
          </div>

          {/* 戰鬥區域 */}
          <section className="fightArena">
            {/* 敵人 */}
            <div className="fighterCard enemy">
              <div className="fighterName">生活壓力怪</div>
              <div className="hpBarContainer">
                <div className="hpBar enemy" style={{ width: `${enemyHpPercent}%` }} />
                <span className="hpText">{enemyHp} / {ENEMY_MAX_HP}</span>
              </div>
              <div className={`fighterSprite ${enemyAnim}`}>
                <img src={stressMonsterImg} alt="生活壓力怪" />
                {/* 敵人技能圖示 */}
                {activeEnemySkill && (
                  <div className="activeSkillPopup">
                    <img src={activeEnemySkill.icon} alt={activeEnemySkill.name} />
                    <span>{activeEnemySkill.name}</span>
                  </div>
                )}
              </div>
            </div>

            {/* VS 分隔 */}
            <div className="vsText">VS</div>

            {/* 玩家 */}
            <div className="fighterCard player">
              <div className="fighterName">
                柴剛 {shieldActive && "🛡️"}
              </div>
              <div className="hpBarContainer">
                <div className="hpBar player" style={{ width: `${playerHpPercent}%` }} />
                <span className="hpText">{playerHp} / {PLAYER_MAX_HP}</span>
              </div>
              <div className={`fighterSprite ${playerAnim}`}>
                <img src={chaiGangImg} alt="柴剛" />
              </div>
            </div>
          </section>

          {/* 技能區 */}
          {gameState === "playing" && (
            <section className="skillSection">
              <div className="skillGrid">
                {SKILLS.map((skill) => {
                  const isDisabled = !canUseSkill(skill.id);
                  const cooldown = skillCooldowns[skill.id] || 0;
                  const isUltimateDisabled = skill.id === "ultimate" && ultimateUsed;

                  return (
                    <button
                      key={skill.id}
                      className={`skillBtn ${isDisabled ? "disabled" : ""}`}
                      onClick={() => handleSkill(skill)}
                      disabled={isDisabled}
                      title={skill.description}
                    >
                      <div className="skillIcon">
                        <img src={skill.icon} alt={skill.name} />
                        {cooldown > 0 && <span className="cooldownBadge">{cooldown}</span>}
                        {isUltimateDisabled && <span className="cooldownBadge">✗</span>}
                      </div>
                      <span className="skillName">{skill.name}</span>
                    </button>
                  );
                })}
              </div>
            </section>
          )}

          {/* 遊戲結束畫面 */}
          {gameState !== "playing" && (
            <section className="gameOverSection">
              <div className={`gameOverCard ${gameState}`}>
                <div className="gameOverTitle">
                  {gameState === "win" ? "🎉 柴剛成功上岸！" : "😵 被生活壓力擊倒"}
                </div>
                <div className="gameOverSubtitle">
                  {gameState === "win"
                    ? "恭喜你戰勝了生活壓力！"
                    : "別灰心，再試一次吧！"}
                </div>
                <button className="btn solid" onClick={resetGame}>
                  重新開始
                </button>
              </div>
            </section>
          )}

          {/* 戰鬥紀錄 */}
          <section className="battleLogSection">
            <div className="battleLogTitle">戰鬥紀錄</div>
            <div className="battleLogList">
              {battleLog.map((log, idx) => (
                <div key={idx} className="battleLogItem">
                  {log}
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

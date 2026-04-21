import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const apps = [
    {
      id: "dca",
      name: "定期定額",
      subtitle: "DCA Simulator",
      icon: "💰",
      color: "linear-gradient(135deg, rgba(255, 120, 180, 0.88), rgba(130, 185, 255, 0.88))",
      route: "/dca",
    },
    {
      id: "cards",
      name: "卡片組牌",
      subtitle: "Deck Builder",
      icon: "🃏",
      color: "linear-gradient(135deg, rgba(255, 200, 100, 0.82), rgba(255, 150, 80, 0.82))",
      route: "/cards",
    },
    {
      id: "fight",
      name: "戰鬥遊戲",
      subtitle: "Fight Game",
      icon: "⚔️",
      color: "linear-gradient(135deg, rgba(180, 150, 255, 0.82), rgba(140, 100, 255, 0.82))",
      route: "/fight",
    },
    {
      id: "jump",
      name: "跳躍遊戲",
      subtitle: "Jump Game",
      icon: "🦘",
      color: "linear-gradient(135deg, rgba(255, 180, 100, 0.82), rgba(255, 130, 80, 0.82))",
      route: "/jump",
    },
    {
      id: "autobattle",
      name: "自動戰鬥",
      subtitle: "Auto Battle",
      icon: "🤖",
      color: "linear-gradient(135deg, rgba(170, 210, 255, 0.86), rgba(255, 170, 220, 0.82))",
      route: "/autobattle",
    },
    {
      id: "toeic",
      name: "多益單字",
      subtitle: "TOEIC Vocab",
      icon: "📘",
      color: "linear-gradient(135deg, rgba(120, 200, 255, 0.88), rgba(80, 160, 255, 0.88))",
      route: "/toeic",
    },
    {
      id: "flappy",
      name: "薪水小鳥",
      subtitle: "Flappy Salary",
      icon: "🐤",
      color: "linear-gradient(135deg, rgba(102, 126, 234, 0.88), rgba(118, 75, 162, 0.88))",
      route: "/flappy",
    },
    {
      id: "spicy",
      name: "麻辣遊戲",
      subtitle: "Spicy Game",
      icon: "🌶️",
      color: "linear-gradient(135deg, rgba(255, 87, 87, 0.88), rgba(255, 150, 50, 0.88))",
      route: "/spicy",
    },
    {
      id: "md-calc",
      name: "MD 計算機",
      subtitle: "Rank Calculator",
      icon: "📊",
      color: "linear-gradient(135deg, rgba(20, 196, 142, 0.88), rgba(3, 129, 255, 0.88))",
      route: "/md-calc",
    },
    {
      id: "monte-carlo",
      name: "蒙地卡羅",
      subtitle: "Pi Estimator",
      icon: "🎲",
      color: "linear-gradient(135deg, rgba(100, 80, 255, 0.88), rgba(200, 80, 255, 0.82))",
      route: "/monte-carlo",
    },
    {
      id: "random-walk",
      name: "隨機漫步",
      subtitle: "Multi Walker",
      icon: "🚶",
      color: "linear-gradient(135deg, rgba(30, 200, 180, 0.88), rgba(50, 130, 255, 0.85))",
      route: "/random-walk",
    },
    {
      id: "mandelbrot",
      name: "曼德博集合",
      subtitle: "Fractal Explorer",
      icon: "🌀",
      color: "linear-gradient(135deg, rgba(0, 7, 100, 0.92), rgba(32, 107, 203, 0.9))",
      route: "/mandelbrot",
    },
    {
      id: "bomb",
      name: "炸彈人",
      subtitle: "Bomberman",
      icon: "💣",
      color: "linear-gradient(135deg, rgba(220, 80, 30, 0.92), rgba(255, 160, 0, 0.88))",
      route: "/bomb",
    },
    {
      id: "crossy",
      name: "柴柴過馬路",
      subtitle: "Crossy Shiba",
      icon: "🐕",
      color: "linear-gradient(135deg, rgba(126, 200, 80, 0.9), rgba(60, 160, 230, 0.88))",
      route: "/crossy",
    },
    {
      id: "pet",
      name: "電子寵物",
      subtitle: "Pet Buddy",
      icon: "🐉",
      color: "linear-gradient(135deg, rgba(255, 214, 92, 0.9), rgba(255, 128, 90, 0.88))",
      route: "/pet",
    },
  ];

  const now = useMemo(() => new Date(), []);

  const handleAppClick = (app) => {
    if (app.route) navigate(app.route);
  };

  return (
    <div className="oneui">
      <div className="homeShell">
        <header className="homeHeader">
          <div className="homeTime">
            {now.toLocaleTimeString("zh-TW", { hour: "2-digit", minute: "2-digit" })}
          </div>
          <div className="homeDate">
            {now.toLocaleDateString("zh-TW", { month: "long", day: "numeric", weekday: "short" })}
          </div>
        </header>

        <main className="homeContent">
          <div className="appGrid">
            {apps.map((app) => (
              <div
                key={app.id}
                className={`appIcon ${!app.route ? "disabled" : ""}`}
                onClick={() => handleAppClick(app)}
                style={{ "--iconColor": app.color }}
              >
                <div className="appIconInner">
                  <div className="appIconEmoji">{app.icon}</div>
                </div>
                <div className="appName">{app.name}</div>
                <div className="appSubtitle">{app.subtitle}</div>
              </div>
            ))}
          </div>
        </main>

        <footer className="homeFooter">
          <div className="homeDock">
            <div className="dockIcon">📞</div>
            <div className="dockIcon">💬</div>
            <div className="dockIcon">🌐</div>
            <div className="dockIcon">📷</div>
          </div>
        </footer>
      </div>
    </div>
  );
}

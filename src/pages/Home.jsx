import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const apps = [
    {
      id: "dca",
      name: "定期定額",
      subtitle: "DCA Simulator",
      icon: "💰",
      color:
        "linear-gradient(135deg, rgba(255, 120, 180, 0.88), rgba(130, 185, 255, 0.88))",
      route: "/dca",
    },
    {
      id: "cards",
      name: "投資卡牌",
      subtitle: "Deck Builder",
      icon: "🃏",
      color:
        "linear-gradient(135deg, rgba(255, 200, 100, 0.82), rgba(255, 150, 80, 0.82))",
      route: "/cards",
    },
    {
      id: "fight",
      name: "柴剛格鬥",
      subtitle: "Fight Game",
      icon: "⚔️",
      color:
        "linear-gradient(135deg, rgba(180, 150, 255, 0.82), rgba(140, 100, 255, 0.82))",
      route: "/fight",
    },
    {
      id: "jump",
      name: "柴剛跳跳",
      subtitle: "Jump Game",
      icon: "🦘",
      color:
        "linear-gradient(135deg, rgba(255, 180, 100, 0.82), rgba(255, 130, 80, 0.82))",
      route: "/jump",
    },
    {
      id: "autobattle",
      name: "柴剛推線",
      subtitle: "Auto Battle",
      icon: "🐾",
      color:
        "linear-gradient(135deg, rgba(170, 210, 255, 0.86), rgba(255, 170, 220, 0.82))",
      route: "/autobattle",
    },
    {
      id: "toeic",
      name: "多益單字",
      subtitle: "TOEIC Vocab",
      icon: "📚",
      color:
        "linear-gradient(135deg, rgba(120, 200, 255, 0.88), rgba(80, 160, 255, 0.88))",
      route: "/toeic",
    },
    {
      id: "flappy",
      name: "薪水小鳥",
      subtitle: "Flappy Salary",
      icon: "🐤",
      color:
        "linear-gradient(135deg, rgba(102, 126, 234, 0.88), rgba(118, 75, 162, 0.88))",
      route: "/flappy",
    },
    {
      id: "spicy",
      name: "辣度挑戰",
      subtitle: "Spicy Game",
      icon: "🌶️",
      color:
        "linear-gradient(135deg, rgba(255, 87, 87, 0.88), rgba(255, 150, 50, 0.88))",
      route: "/spicy",
    },
  ];

  const handleAppClick = (app) => {
    if (app.route) {
      navigate(app.route);
    }
  };

  return (
    <div className="oneui">
      <div className="homeShell">
        <header className="homeHeader">
          <div className="homeTime">
            {new Date().toLocaleTimeString("zh-TW", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
          <div className="homeDate">
            {new Date().toLocaleDateString("zh-TW", {
              month: "long",
              day: "numeric",
              weekday: "short",
            })}
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

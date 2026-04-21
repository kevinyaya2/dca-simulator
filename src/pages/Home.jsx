import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../components/icons/Icon";

export default function Home() {
  const navigate = useNavigate();

  const apps = [
    { id: "dca", name: "定期定額", subtitle: "DCA Simulator", icon: "wallet", color: "linear-gradient(145deg, #ff7fb0, #8bb8ff)", route: "/dca" },
    { id: "cards", name: "卡片組牌", subtitle: "Deck Builder", icon: "cards", color: "linear-gradient(145deg, #ffc870, #ff9860)", route: "/cards" },
    { id: "fight", name: "戰鬥遊戲", subtitle: "Fight Game", icon: "sword", color: "linear-gradient(145deg, #b89cff, #886cff)", route: "/fight" },
    { id: "jump", name: "跳躍遊戲", subtitle: "Jump Game", icon: "jump", color: "linear-gradient(145deg, #ffbf88, #ff9868)", route: "/jump" },
    { id: "autobattle", name: "自動戰鬥", subtitle: "Auto Battle", icon: "bot", color: "linear-gradient(145deg, #aad5ff, #f2a9d8)", route: "/autobattle" },
    { id: "toeic", name: "多益單字", subtitle: "TOEIC Vocab", icon: "book", color: "linear-gradient(145deg, #89d5ff, #5ba7ff)", route: "/toeic" },
    { id: "flappy", name: "薪水小鳥", subtitle: "Flappy Salary", icon: "bird", color: "linear-gradient(145deg, #7086ea, #8155b8)", route: "/flappy" },
    { id: "spicy", name: "麻辣遊戲", subtitle: "Spicy Game", icon: "pepper", color: "linear-gradient(145deg, #ff7c7c, #ffad62)", route: "/spicy" },
    { id: "md-calc", name: "MD 計算機", subtitle: "Rank Calculator", icon: "chart", color: "linear-gradient(145deg, #2fd3a7, #2f8dff)", route: "/md-calc" },
    { id: "monte-carlo", name: "蒙地卡羅", subtitle: "Pi Estimator", icon: "dice", color: "linear-gradient(145deg, #8a76ff, #b668ff)", route: "/monte-carlo" },
    { id: "random-walk", name: "隨機漫步", subtitle: "Multi Walker", icon: "walk", color: "linear-gradient(145deg, #44d6bd, #4fa4ff)", route: "/random-walk" },
    { id: "mandelbrot", name: "曼德博集合", subtitle: "Fractal Explorer", icon: "spiral", color: "linear-gradient(145deg, #2f59c2, #6e85ff)", route: "/mandelbrot" },
    { id: "bomb", name: "炸彈人", subtitle: "Bomberman", icon: "bomb", color: "linear-gradient(145deg, #df7345, #f7ac44)", route: "/bomb" },
    { id: "crossy", name: "柴柴過馬路", subtitle: "Crossy Shiba", icon: "road", color: "linear-gradient(145deg, #97d26a, #5cb0e6)", route: "/crossy" },
    { id: "angry", name: "彈射拆塔", subtitle: "Angry-like", icon: "target", color: "linear-gradient(145deg, #ffb173, #ff6d72)", route: "/angry" },
    { id: "pet", name: "電子寵物", subtitle: "Pet Buddy", icon: "pet", color: "linear-gradient(145deg, #ffd86d, #ff9871)", route: "/pet" },
  ];

  const dockItems = [
    { id: "phone", icon: "phone", label: "Phone" },
    { id: "message", icon: "message", label: "Messages" },
    { id: "safari", icon: "safari", label: "Browser" },
    { id: "camera", icon: "camera", label: "Camera" },
  ];

  const now = useMemo(() => new Date(), []);

  const handleAppClick = (app) => {
    if (app.route) navigate(app.route);
  };

  return (
    <div className="oneui launchpadRoot">
      <div className="launchpadGlow launchpadGlowA" />
      <div className="launchpadGlow launchpadGlowB" />
      <div className="homeShell">
        <header className="homeHeader">
          <div className="homeTime">{now.toLocaleTimeString("zh-TW", { hour: "2-digit", minute: "2-digit" })}</div>
          <div className="homeDate">{now.toLocaleDateString("zh-TW", { month: "long", day: "numeric", weekday: "short" })}</div>
        </header>

        <main className="homeContent">
          <div className="appGrid" role="list" aria-label="Applications">
            {apps.map((app) => (
              <button
                key={app.id}
                className={`appIcon ${!app.route ? "disabled" : ""}`}
                onClick={() => handleAppClick(app)}
                style={{ "--iconColor": app.color }}
                type="button"
              >
                <div className="appIconInner" aria-hidden="true">
                  <Icon name={app.icon} size="lg" className="appIconGlyph" />
                </div>
                <div className="appName">{app.name}</div>
                <div className="appSubtitle">{app.subtitle}</div>
              </button>
            ))}
          </div>
        </main>

        <footer className="homeFooter">
          <div className="homeDock" role="navigation" aria-label="Dock">
            {dockItems.map((item) => (
              <button className="dockIcon" key={item.id} type="button" aria-label={item.label}>
                <Icon name={item.icon} size="md" className="dockGlyph" />
              </button>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}

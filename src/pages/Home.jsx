import { useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const touchStartXRef = useRef(0);
  const [currentPage, setCurrentPage] = useState(0);
  const APPS_PER_PAGE = 16;

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
      id: "angry",
      name: "彈射拆塔",
      subtitle: "Angry-like",
      icon: "🎯",
      color: "linear-gradient(135deg, rgba(255, 157, 86, 0.92), rgba(255, 94, 94, 0.9))",
      route: "/angry",
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

  const appPages = useMemo(() => {
    const pages = [];
    for (let i = 0; i < apps.length; i += APPS_PER_PAGE) {
      pages.push(apps.slice(i, i + APPS_PER_PAGE));
    }
    return pages;
  }, [apps]);

  const handleAppClick = (app) => {
    if (app.route) navigate(app.route);
  };

  const goToPage = (page) => {
    setCurrentPage(Math.max(0, Math.min(page, appPages.length - 1)));
  };

  const handleTouchStart = (event) => {
    touchStartXRef.current = event.changedTouches[0]?.clientX ?? 0;
  };

  const handleTouchEnd = (event) => {
    const endX = event.changedTouches[0]?.clientX ?? 0;
    const deltaX = endX - touchStartXRef.current;
    const SWIPE_THRESHOLD = 42;
    if (Math.abs(deltaX) < SWIPE_THRESHOLD) return;
    if (deltaX < 0) {
      goToPage(currentPage + 1);
      return;
    }
    goToPage(currentPage - 1);
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
          <div className="homePager" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            <div className="homePages" style={{ transform: `translateX(-${currentPage * 100}%)` }}>
              {appPages.map((pageApps, pageIndex) => (
                <div className="appPage" key={`page-${pageIndex}`}>
                  <div className="appGrid">
                    {pageApps.map((app) => (
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
                </div>
              ))}
            </div>
          </div>

          {appPages.length > 1 && (
            <div className="homePageDots" aria-label="App pages">
              {appPages.map((_, idx) => (
                <button
                  key={`dot-${idx}`}
                  className={`homePageDot ${idx === currentPage ? "active" : ""}`}
                  onClick={() => goToPage(idx)}
                  aria-label={`Go to page ${idx + 1}`}
                  type="button"
                />
              ))}
            </div>
          )}
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

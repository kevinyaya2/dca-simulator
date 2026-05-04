import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../components/icons/Icon";

const APPS = [
  { id: "dca", name: "定期定額", subtitle: "DCA Simulator", icon: "wallet", color: "linear-gradient(145deg, #ff7fb0, #8bb8ff)", route: "/dca" },
  { id: "cards", name: "卡片組牌", subtitle: "Deck Builder", icon: "cards", color: "linear-gradient(145deg, #ffc870, #ff9860)", route: "/cards" },
  { id: "fight", name: "戰鬥遊戲", subtitle: "Fight Game", icon: "sword", color: "linear-gradient(145deg, #b89cff, #886cff)", route: "/fight" },
  { id: "jump", name: "跳躍遊戲", subtitle: "Jump Game", icon: "jump", color: "linear-gradient(145deg, #ffbf88, #ff9868)", route: "/jump" },
  { id: "autobattle", name: "自動戰鬥", subtitle: "Auto Battle", icon: "bot", color: "linear-gradient(145deg, #aad5ff, #f2a9d8)", route: "/autobattle" },
  { id: "toeic", name: "多益單字", subtitle: "TOEIC Vocab", icon: "book", color: "linear-gradient(145deg, #89d5ff, #5ba7ff)", route: "/toeic" },
  { id: "flappy", name: "薪水小鳥", subtitle: "Flappy Salary", icon: "bird", color: "linear-gradient(145deg, #7086ea, #8155b8)", route: "/flappy" },
  { id: "spicy", name: "麻辣遊戲", subtitle: "Spicy Game", icon: "pepper", color: "linear-gradient(145deg, #ff7c7c, #ffad62)", route: "/spicy" },
  { id: "md-calc", name: "MD 計算機", subtitle: "Rank Calculator", icon: "chart", color: "linear-gradient(145deg, #2fd3a7, #2f8dff)", route: "/md-calc" },
  { id: "snack-merge", name: "小吃合成", subtitle: "Night Market Merge", icon: "bowl", color: "linear-gradient(145deg, #ffb26b, #ff6f61)", route: "/snack-merge" },
  { id: "maze", name: "迷宮逃脫", subtitle: "Maze Escape", icon: "walk", color: "linear-gradient(145deg, #44d6bd, #4fa4ff)", route: "/maze" },
  { id: "agar", name: "果凍吞噬", subtitle: "Neon Agar", icon: "cell", color: "linear-gradient(145deg, #25d8ff, #ff79ce)", route: "/mandelbrot" },
  { id: "bomb", name: "炸彈人", subtitle: "Bomberman", icon: "bomb", color: "linear-gradient(145deg, #df7345, #f7ac44)", route: "/bomb" },
  { id: "crossy", name: "柴柴過馬路", subtitle: "Crossy Shiba", icon: "road", color: "linear-gradient(145deg, #97d26a, #5cb0e6)", route: "/crossy" },
  { id: "angry", name: "彈射拆塔", subtitle: "Angry-like", icon: "target", color: "linear-gradient(145deg, #ffb173, #ff6d72)", route: "/angry" },
  { id: "pet", name: "電子寵物", subtitle: "Pet Buddy", icon: "pet", color: "linear-gradient(145deg, #ffd86d, #ff9871)", route: "/pet" },
  { id: "office-td", name: "職場塔防", subtitle: "Office Tower Defense", icon: "waveBanner", color: "linear-gradient(145deg, #58c0ff, #ffd54a)", route: "/office-td" },
];

const DOCK_ITEMS = [
  { id: "phone", icon: "phone", label: "Phone" },
  { id: "message", icon: "message", label: "Messages" },
  { id: "safari", icon: "safari", label: "Browser" },
  { id: "camera", icon: "camera", label: "Camera" },
];

export default function Home() {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState(0);
  const viewportRef = useRef(null);
  const [viewportWidth, setViewportWidth] = useState(() => (typeof window !== "undefined" ? window.innerWidth : 390));

  const now = useMemo(() => new Date(), []);
  const pageSize = useMemo(() => {
    if (viewportWidth >= 1200) return 32;
    if (viewportWidth >= 768) return 24;
    return 16;
  }, [viewportWidth]);

  const appPages = useMemo(() => {
    const pages = [];
    for (let i = 0; i < APPS.length; i += pageSize) pages.push(APPS.slice(i, i + pageSize));
    return pages;
  }, [pageSize]);

  useEffect(() => {
    const onResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const maxPage = Math.max(0, appPages.length - 1);
    if (activePage > maxPage) setActivePage(maxPage);
  }, [activePage, appPages.length]);

  const handleAppClick = (app) => {
    if (app.route) navigate(app.route);
  };

  const goToPage = (pageIndex) => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const maxPage = Math.max(0, appPages.length - 1);
    const clamped = Math.min(Math.max(pageIndex, 0), maxPage);
    viewport.scrollTo({ left: clamped * viewport.clientWidth, behavior: "smooth" });
    setActivePage(clamped);
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
          <div
            ref={viewportRef}
            className="appPagesViewport"
            onWheel={(event) => {
              if (appPages.length <= 1) return;
              const dominantDelta = Math.abs(event.deltaY) >= Math.abs(event.deltaX) ? event.deltaY : event.deltaX;
              if (Math.abs(dominantDelta) < 5) return;
              event.preventDefault();
              goToPage(activePage + (dominantDelta > 0 ? 1 : -1));
            }}
            onScroll={(event) => {
              const { scrollLeft, clientWidth } = event.currentTarget;
              if (!clientWidth) return;
              const nextPage = Math.round(scrollLeft / clientWidth);
              if (nextPage !== activePage) setActivePage(nextPage);
            }}
          >
            <div className="appPagesTrack" role="list" aria-label="Applications">
              {appPages.map((page, pageIndex) => (
                <section className="appPage" key={`page-${pageIndex}`} aria-label={`Page ${pageIndex + 1}`}>
                  <div className="appGrid">
                    {page.map((app) => (
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
                </section>
              ))}
            </div>
          </div>

          {appPages.length > 1 && (
            <div className="appPageDots" aria-label="Page indicator">
              {appPages.map((_, index) => (
                <button
                  key={`dot-${index}`}
                  type="button"
                  className={`appPageDot ${index === activePage ? "isActive" : ""}`}
                  aria-label={`Go to page ${index + 1}`}
                  aria-current={index === activePage ? "page" : undefined}
                  onClick={() => goToPage(index)}
                />
              ))}
            </div>
          )}
        </main>

        <footer className="homeFooter">
          <div className="homeDock" role="navigation" aria-label="Dock">
            {DOCK_ITEMS.map((item) => (
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

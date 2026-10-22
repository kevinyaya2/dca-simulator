import { useEffect, useState } from 'react';

export function RoomNoticeItem({ notice }) {
  const restored = notice.kind === 'reconnected';
  return <div className={`mp-notice ${restored ? 'is-restored' : 'is-offline'}`}>
    <span className="mp-notice-icon" aria-hidden="true">{restored ? '↗' : '!'}</span>
    <span className="mp-notice-copy"><span><b>{notice.name}</b>{restored ? ' 已恢復連線' : ' 已斷線'}</span><small>{restored ? '已回到房間，繼續對戰' : '席位保留 60 秒，等待重新連線'}</small></span>
    <time dateTime={new Date(notice.at).toISOString()}>{new Date(notice.at).toLocaleTimeString('zh-TW', { hour12: false, hour: '2-digit', minute: '2-digit' })}</time>
  </div>;
}

function NoticeToast({ notice }) {
  const [visible, setVisible] = useState(() => Date.now() < notice.expiresAt);
  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), Math.max(0, notice.expiresAt - Date.now()));
    return () => clearTimeout(timer);
  }, [notice.id, notice.expiresAt]);
  return visible ? <RoomNoticeItem notice={notice} /> : null;
}

export default function RoomBroadcast({ notices = [], floating = false }) {
  if (floating) return <aside className="mp-broadcast-toasts" aria-label="房間連線通知" role="log" aria-live="polite" aria-relevant="additions">
    {notices.slice(-3).map(notice => <NoticeToast key={notice.id} notice={notice} />)}
  </aside>;
  return <section className="mp-broadcast" aria-label="房間廣播">
    <header><span><i aria-hidden="true" />房間廣播</span><small>連線動態</small></header>
    <div className="mp-broadcast-log" role="log" aria-live="polite" aria-relevant="additions">
      {notices.length ? notices.slice(-5).map(notice => <RoomNoticeItem key={notice.id} notice={notice} />) : <p className="mp-broadcast-empty">隊友的斷線與恢復連線通知會顯示在這裡</p>}
    </div>
  </section>;
}

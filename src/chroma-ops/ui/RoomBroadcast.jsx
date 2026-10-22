import { useEffect, useState } from 'react';

export function RoomNoticeItem({ notice }) {
  const restored = notice.kind === 'reconnected';
  return <div className={`mp-notice ${restored ? 'is-restored' : 'is-offline'}`}>
    <span className="mp-notice-icon" aria-hidden="true">{restored ? '↗' : '!'}</span>
    <span className="mp-notice-copy"><span><b>{notice.name}</b>{restored ? ' 已恢復連線' : ' 已斷線'}</span><small>{restored ? '已回到房間，繼續對戰' : '席位保留 60 秒，等待重新連線'}</small></span>
    <time dateTime={new Date(notice.at).toISOString()}>{new Date(notice.at).toLocaleTimeString('zh-TW', { hour12: false, hour: '2-digit', minute: '2-digit' })}</time>
  </div>;
}

function FloatingBroadcast({ notices }) {
  const [now, setNow] = useState(() => Date.now());
  const active = notices.filter(notice => notice.expiresAt > now).slice(-3);
  useEffect(() => {
    const remaining = notices.filter(notice => notice.expiresAt > now);
    if (!remaining.length) return;
    const deadline = Math.min(...remaining.map(notice => notice.expiresAt));
    const timer = setTimeout(() => setNow(Date.now()), Math.max(0, deadline - Date.now()));
    return () => clearTimeout(timer);
  }, [notices, now]);
  if (!active.length) return null;
  return <aside className="mp-broadcast-toasts" aria-label="房間連線通知" role="log" aria-live="polite" aria-relevant="additions">
    {active.map(notice => <RoomNoticeItem key={notice.id} notice={notice} />)}
  </aside>;
}

export default function RoomBroadcast({ notices = [], floating = false }) {
  if (!notices.length) return null;
  if (floating) return <FloatingBroadcast notices={notices} />;
  return <section className="mp-broadcast" aria-label="房間廣播">
    <header><span><i aria-hidden="true" />房間廣播</span><small>連線動態</small></header>
    <div className="mp-broadcast-log" role="log" aria-live="polite" aria-relevant="additions">
      {notices.slice(-5).map(notice => <RoomNoticeItem key={notice.id} notice={notice} />)}
    </div>
  </section>;
}

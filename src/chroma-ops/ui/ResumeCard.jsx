export default function ResumeCard({ code, onResume, disabled = false }) {
  return <button type="button" className="co-resume-card" onClick={onResume} disabled={disabled}>
    <span className="co-resume-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10a8 8 0 1 1 1.8 7.1M4 4v6h6" /><path d="m11 9 4 3-4 3V9Z" /></svg>
    </span>
    <span className="co-resume-copy"><span className="co-resume-eyebrow">繼續你的對戰 <span>{code}</span></span><strong>返回上一場</strong><small>回到原本的房間，與隊友再度集合</small></span>
    <span className="co-resume-arrow" aria-hidden="true">↗</span>
  </button>;
}

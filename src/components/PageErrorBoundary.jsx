import { Component } from "react";

export default class PageErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.error("Page render failed:", error);
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div className="oneui">
        <div className="shell" style={{ paddingTop: 24 }}>
          <section className="card pageErrorCard">
            <div className="sectionTitle">這個頁面暫時無法顯示</div>
            <p className="hint">請返回首頁後再試一次。</p>
            <button className="btn solid pageErrorButton" type="button" onClick={() => { window.location.hash = "#/"; }}>
              返回首頁
            </button>
          </section>
        </div>
      </div>
    );
  }
}

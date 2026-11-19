export function observeArenaSize(root: HTMLElement, resize: (width: number, height: number) => void) {
  let width = 0;
  let height = 0;
  const update = () => {
    const nextWidth = root.clientWidth;
    const nextHeight = root.clientHeight;
    if (!nextWidth || !nextHeight || (nextWidth === width && nextHeight === height)) return;
    width = nextWidth;
    height = nextHeight;
    resize(width, height);
  };
  const observer = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(update);
  observer?.observe(root);
  window.addEventListener('resize', update);
  window.visualViewport?.addEventListener('resize', update);
  update();
  return () => {
    observer?.disconnect();
    window.removeEventListener('resize', update);
    window.visualViewport?.removeEventListener('resize', update);
  };
}

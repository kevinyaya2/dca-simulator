const KEY = 'chroma-multiplayer-session';
export function readMultiplayerSession() {
  try {
    const value = JSON.parse(sessionStorage.getItem(KEY));
    return typeof value?.code === 'string' && typeof value?.playerId === 'string' && typeof value?.resumeToken === 'string' ? value : null;
  } catch { return null; }
}
export function saveMultiplayerSession(value) {
  try {
    if (value) sessionStorage.setItem(KEY, JSON.stringify({ code: value.code, playerId: value.playerId, resumeToken: value.resumeToken }));
    else sessionStorage.removeItem(KEY);
  } catch { /* A blocked browser store still permits play until this tab closes. */ }
}

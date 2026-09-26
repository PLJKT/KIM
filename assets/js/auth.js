/* KIM — client-side access gate.
 * NOTE: This is a convenience gate for a public repository, not a security boundary.
 * The credentials are visible in this source file; change them here if needed.
 */
var KIM_AUTH_KEY = 'kim_auth';
var KIM_USER = 'admin';
var KIM_PASS = 'admin@123';

function isAuthed() {
  try { return sessionStorage.getItem(KIM_AUTH_KEY) === '1'; } catch (e) { return false; }
}
function doLogin(user, pass) {
  if (user === KIM_USER && pass === KIM_PASS) {
    try { sessionStorage.setItem(KIM_AUTH_KEY, '1'); } catch (e) {}
    return true;
  }
  return false;
}
function doLogout() {
  try { sessionStorage.removeItem(KIM_AUTH_KEY); } catch (e) {}
  window.location.href = 'index.html';
}

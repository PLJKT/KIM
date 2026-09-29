/* KIM — common chrome: header, nav, footer, language switcher, chart helper. */
var CHARTS = [];

function KIM_header() {
  var el = document.getElementById('top');
  if (!el) return;
  el.innerHTML =
    '<div class="topbar">' +
      '<div class="brand">' + t('app_name') +
        '<small>' + t('tagline') + '</small>' +
      '</div>' +
      '<div class="topbar-right">' +
        '<span>' + t('logged_in_as') + ': admin</span>' +
        '<button class="lang-btn" data-lang="en">EN</button>' +
        '<button class="lang-btn" data-lang="zh">中文</button>' +
        '<button class="lang-btn" data-lang="id">ID</button>' +
        '<button class="btn-logout" data-action="logout">' + t('logout') + '</button>' +
      '</div>' +
    '</div>';
  syncLangBtns();
  wireChrome();
}

function KIM_nav(active) {
  var el = document.getElementById('nav');
  if (!el) return;
  var items = [
    { id: '', label: t('home'), href: 'index.html' },
    { id: 'd1', label: t('d1'), href: 'dashboard-1-general.html' },
    { id: 'd2', label: t('d2'), href: 'dashboard-2-technical.html' },
    { id: 'd3', label: t('d3'), href: 'dashboard-3-legal.html' },
    { id: 'd4', label: t('d4'), href: 'dashboard-4-financial.html' },
    { id: 'd5', label: t('d5'), href: 'dashboard-5-marketing.html' }
  ];
  var html = '';
  for (var i = 0; i < items.length; i++) {
    var cls = (active === items[i].id) ? 'nav-item active' : 'nav-item';
    html += '<a class="' + cls + '" href="' + items[i].href + '">' + items[i].label + '</a>';
  }
  el.innerHTML = html;
}

function KIM_footer() {
  var el = document.getElementById('bottom');
  if (!el) return;
  el.innerHTML =
    '<footer>' + t('data_as_of') + ' ' + D.meta.asOf + ' · ' + t('source_note') + '</footer>';
}

function KIM_meta() {
  var el = document.getElementById('metaBar');
  if (!el) return;
  el.innerHTML =
    '<span class="m-item"><strong>' + t('data_as_of') + '</strong> ' + D.meta.asOf + '</span>' +
    '<span class="m-item">' + t('source_note') + '</span>';
}

function syncLangBtns() {
  var btns = document.querySelectorAll('.lang-btn');
  for (var i = 0; i < btns.length; i++) {
    btns[i].className = 'lang-btn' + (btns[i].getAttribute('data-lang') === CURRENT_LANG ? ' active' : '');
  }
}

function wireChrome() {
  var btns = document.querySelectorAll('.lang-btn');
  for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function () { setLang(this.getAttribute('data-lang')); };
  }
  var logout = document.querySelectorAll('[data-action="logout"]');
  if (logout && logout.length) logout[0].onclick = doLogout;
}

function KIM_init(active) {
  if (!isAuthed()) { window.location.replace('index.html'); return false; }
  KIM_header();
  KIM_nav(active);
  applyI18n();
  return true;
}

function renderChart(id, option, height) {
  var holder = document.getElementById(id);
  if (!holder || typeof echarts === 'undefined') return;
  var chart = echarts.init(holder, null, { renderer: 'canvas' });
  holder.style.height = (height || 330) + 'px';
  chart.setOption(option);
  CHARTS.push(chart);
  return chart;
}

function disposeCharts() {
  for (var i = 0; i < CHARTS.length; i++) {
    try { CHARTS[i].dispose(); } catch (e) {}
  }
  CHARTS = [];
}

window.addEventListener('resize', function () {
  for (var i = 0; i < CHARTS.length; i++) {
    try { CHARTS[i].resize(); } catch (e) {}
  }
});

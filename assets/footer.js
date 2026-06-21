// Shared site footer — single source of truth.
// Usage: place <footer id="site-footer" data-home="../../"></footer> then load this script.
//   data-home      relative path to the site root (used by the back link)
//   data-copyright present on the home page to show "© 2026" instead of the back link
(function () {
  var el = document.getElementById('site-footer');
  if (!el) return;

  var UPDATED = 'June 2026';
  var home = el.getAttribute('data-home') || '';

  var left = el.hasAttribute('data-copyright')
    ? '© 2026 Yuhyun Kim'
    : '<a href="' + home + '">← Yuhyun Kim</a>';

  el.innerHTML =
    '<div>' + left + '</div>' +
    '<div>Last updated <span style="color: var(--muted)">' + UPDATED + '</span></div>';
})();

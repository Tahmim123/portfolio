/* Small progressive enhancements. The site is fully functional without JS. */
(function () {
  "use strict";

  // Auto-update the footer year so it never goes stale.
  var yearEl = document.querySelector("[data-current-year]");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();

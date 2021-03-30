"use strict";

function sms(n, e) {
  var t = document.querySelector(n).offsetTop,
      o = window.pageYOffset,
      i = t - o,
      r = null;
  requestAnimationFrame(function n(t) {
    null === r && (r = t);
    var u,
        l,
        a,
        c = t - r,
        m = (u = c, l = o, a = i, (u /= e / 2) < 1 ? a / 2 * u * u + l : (u--, -a / 2 * (u * (u - 2) - 1) + l));
    window.scrollTo(0, m), c < e && requestAnimationFrame(n);
  });
}
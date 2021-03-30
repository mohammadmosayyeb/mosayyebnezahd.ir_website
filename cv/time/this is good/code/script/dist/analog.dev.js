"use strict";

var date = new Date();
secondery = date.getSeconds();

function saat() {
  var date = new Date();
  secondery = secondery + 1;
  saaaaat = date.getHours();
  dagiiige = date.getMinutes();
  sat = 90 + saaaaat * 30 + 180;
  minate = 90 + dagiiige * 6 + 180;
  seciuis = secondery * 6 - 90;
  var dt = document.querySelector(".hour");
  var st = document.querySelector(".min");
  var sc = document.querySelector(".second");
  dt.style.transform = "rotate(".concat(sat + dagiiige / 2, "deg)");
  st.style.transform = "rotate(".concat(minate, "deg)");
  sc.style.transform = "rotate(".concat(seciuis, "deg)");
}

setInterval(saat, 1000);
"use strict";

function saat() {
  var date = new Date();
  saaaaat = date.getHours();
  dagiiige = date.getMinutes();
  sat = 90 + saaaaat * 30;
  minate = 90 + dagiiige * 6;
  var dt = document.querySelector(".hour");
  var st = document.querySelector(".min");
  st.style.transform = "rotate(".concat(sat, "deg)");
  dt.style.transform = "rotate(".concat(minate, "deg)");
  console.log("min");
}

setInterval(saat, 1000);
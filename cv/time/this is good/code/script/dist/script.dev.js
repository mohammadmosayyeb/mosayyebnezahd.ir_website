"use strict";

function eroor() {
  if (window.innerWidth < 300) {
    document.querySelector(".eror").style.display = "block";
  } else {
    document.querySelector(".eror").style.display = "none";
  }
}

eroor();
window.addEventListener("resize", eroor); // ---------------------------------------------------------------------------------------------------------------------------------------

var date = new Date();
secondery = date.getSeconds();

function saat() {
  var date = new Date();
  document.querySelectorAll(".inu")[0].style.width = "".concat(date.getHours() * 4.16, "%");
  document.querySelectorAll(".inu")[1].style.width = "".concat(date.getMinutes() * 1.6, "%");
  document.querySelectorAll(".inu")[2].style.width = "".concat(date.getSeconds() * 1.67, "%");
  saaaaat = date.getHours();
  dagiiige = date.getMinutes();
  document.querySelector(".Here").innerHTML = saaaaat;
  document.querySelector(".Hare").innerHTML = dagiiige;
  sat = 90 + saaaaat * 30 + 180;
  minate = 90 + dagiiige * 6 + 180;
  seciuis = secondery * 6;
  var dt = document.querySelector(".hour");
  var st = document.querySelector(".min");
  var sc = document.querySelector(".second");
  dt.style.transform = "rotate(".concat(sat + dagiiige / 2, "deg)");
  st.style.transform = "rotate(".concat(minate, "deg)");
  sc.style.transform = "rotate(".concat(seciuis, "deg)");
  seconderys = date.getSeconds();

  if (seconderys < 10) {
    seconderys = "0".concat(seconderys);
  }

  if (saaaaat < 10) {
    saaaaat = "0".concat(saaaaat);
  }

  if (dagiiige < 10) {
    dagiiige = "0".concat(dagiiige);
  }

  document.querySelector(".Here").innerHTML = saaaaat;
  document.querySelector(".Hare").innerHTML = dagiiige;
  document.querySelector(".san").innerHTML = "".concat(seconderys, "\"");
}

setInterval(saat, 1000); // ---------------------------------------------------------------------------------------------------------------------------------------

function menu() {
  var menu = document.querySelector(".person");
  menu.style.marginLeft = "0"; // document.querySelector(".personalize").style.display = "none";
}

function menuout() {
  var menu = document.querySelector(".person");
  menu.style.marginLeft = "-100vw"; // document.querySelector(".personalize").style.display = "block";
}

document.querySelector(".personalize").addEventListener("click", menu);
document.querySelector(".close").addEventListener("click", menuout);
var colors = document.querySelectorAll(".colors");
document.querySelectorAll(".bot")[0].addEventListener("click", function () {
  document.querySelectorAll(".minou")[0].value;
  console.log(document.querySelectorAll(".minou")[0].value);
  document.querySelector(".sec1").style.background = "#".concat(document.querySelectorAll(".minou")[0].value);
});
document.querySelectorAll(".bot")[1].addEventListener("click", function () {
  document.querySelectorAll(".minou")[1].value;
  console.log(document.querySelectorAll(".minou")[1].value);
  document.querySelector(".sec2").style.background = "#".concat(document.querySelectorAll(".minou")[1].value);
});
colors[0].addEventListener("click", function () {
  colors[0].style.background = "rgb(223, 213, 213)";
  colors[1].style.background = "rgba(12, 150, 214, 0.733)";
  colors[2].style.background = "rgb(255, 14, 223)";
  colors[3].style.background = "rgb(37, 255, 128)";
  document.querySelector(".sec1").style.background = "rgb(223, 213, 213)";
  colors[0].style.opacity = ".5";
});
colors[1].addEventListener("click", function () {
  colors[0].style.background = "rgb(223, 213, 213)";
  colors[1].style.background = "rgba(12, 150, 214, 0.733)";
  colors[2].style.background = "rgb(255, 14, 223)";
  colors[3].style.background = "rgb(37, 255, 128)";
  document.querySelector(".sec1").style.background = "rgba(12, 150, 214, 0.733)";
  colors[1].style.opacity = ".5";
});
colors[2].addEventListener("click", function () {
  colors[0].style.background = "rgb(223, 213, 213)";
  colors[1].style.background = "rgba(12, 150, 214, 0.733)";
  colors[2].style.background = "rgba(255,0,255,0.5)";
  colors[3].style.background = "rgb(37, 255, 128)";
  document.querySelector(".sec1").style.background = "rgba(255,0,255,0.5)";
  colors[2].style.opacity = ".5";
});
colors[3].addEventListener("click", function () {
  colors[0].style.background = "rgb(223, 213, 213)";
  colors[1].style.background = "rgba(12, 150, 214, 0.733)";
  colors[2].style.background = "rgb(255, 14, 223)";
  colors[3].style.background = "rgb(37, 255, 128)";
  document.querySelector(".sec1").style.background = "rgb(37, 255, 128)";
  colors[3].style.opacity = ".5";
});
colors[4].addEventListener("click", function () {
  colors[4].style.background = "rgb(223, 213, 213)";
  colors[5].style.background = "rgba(12, 150, 214, 0.733)";
  colors[6].style.background = "rgba(255,0,255,0.5)";
  colors[7].style.background = "rgb(37, 255, 128)";
  document.querySelector(".sec2").style.background = "rgb(223, 213, 213)";
  colors[4].style.opacity = ".5";
});
colors[5].addEventListener("click", function () {
  colors[4].style.background = "rgb(223, 213, 213)";
  colors[5].style.background = "rgba(12, 150, 214, 0.733)";
  colors[6].style.background = "rgba(255,0,255,0.5)";
  colors[7].style.background = "rgb(37, 255, 128)";
  document.querySelector(".sec2").style.background = "rgba(12, 150, 214, 0.733)";
  colors[5].style.opacity = ".5";
});
colors[6].addEventListener("click", function () {
  colors[4].style.background = "rgb(223, 213, 213)";
  colors[5].style.background = "rgba(12, 150, 214, 0.733)";
  colors[6].style.background = "rgba(255,0,255,0.5)";
  colors[7].style.background = "rgb(37, 255, 128)";
  document.querySelector(".sec2").style.background = "rgba(255,0,255,0.5)";
  colors[6].style.opacity = ".5";
});
colors[7].addEventListener("click", function () {
  colors[4].style.background = "rgb(223, 213, 213)";
  colors[5].style.background = "rgba(12, 150, 214, 0.733)";
  colors[6].style.background = "rgba(255,0,255,0.5)";
  colors[7].style.background = "rgb(37, 255, 128)";
  document.querySelector(".sec2").style.background = "rgb(37, 255, 128)";
  colors[7].style.opacity = ".5";
});
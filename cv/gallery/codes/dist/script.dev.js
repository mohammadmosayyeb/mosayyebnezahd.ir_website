"use strict";

document.querySelector(".header").addEventListener("mousemove", function (e) {
  var hor = e.clientX;
  var ver = e.clientY;
  document.querySelector("#img1").style.transform = "translate(".concat(-hor / 30, "px , ").concat(-ver / 60, "px)");
  document.querySelector("#img2").style.transform = "translate(".concat(hor / 60, "px , ").concat(ver / 30, "px)");
}, false);

function suap() {
  sms(".galleryi", 750);
}

document.querySelector(".togal").addEventListener("click", suap, false);
var myWork = document.querySelector(".shomare");
var ask = document.querySelectorAll(".aks");
myWork.innerHTML = ask.length;
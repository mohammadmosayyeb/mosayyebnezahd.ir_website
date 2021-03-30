"use strict";

function clock() {
  var date = new Date();
  var hu = document.querySelector(".hu");
  var min = document.querySelector(".min");
  var sec = document.querySelector(".saniiiye");
  var minback = document.querySelector(".minback1");
  var houback = document.querySelector(".houback1");
  var dayback = document.querySelector(".dayback1");
  var getHours = date.getHours();
  var getSeconds = date.getSeconds();
  var getMinutes = date.getMinutes();
  hu.innerHTML = getHours;
  min.innerHTML = getMinutes;
  sec.innerHTML = getSeconds;

  if (getHours < 10) {
    hu.innerHTML = "0".concat(getHours);
  }

  if (getMinutes < 10) {
    min.innerHTML = "0".concat(getMinutes);
  }

  if (getSeconds < 10) {
    sec.innerHTML = "0".concat(getSeconds);
  }

  dayback.style.width = "".concat(getHours * 4.16, "%");
  houback.style.width = "".concat(getMinutes * 1.66, "%");
  minback.style.width = "".concat(getSeconds * 1.66, "%");
  var bodyback = document.querySelector("body");
}

setInterval(clock, 100);
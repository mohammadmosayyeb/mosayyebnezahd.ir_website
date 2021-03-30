"use strict";

function gregorian_to_jalali(gy, gm, gd) {
  var g_d_m, jy, jm, jd, gy2, days;
  g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  gy2 = gm > 2 ? gy + 1 : gy;
  days = 355666 + 365 * gy + parseInt((gy2 + 3) / 4) - parseInt((gy2 + 99) / 100) + parseInt((gy2 + 399) / 400) + gd + g_d_m[gm - 1];
  jy = -1595 + 33 * parseInt(days / 12053);
  days %= 12053;
  jy += 4 * parseInt(days / 1461);
  days %= 1461;

  if (days > 365) {
    jy += parseInt((days - 1) / 365);
    days = (days - 1) % 365;
  }

  if (days < 186) {
    jm = 1 + parseInt(days / 31);
    jd = 1 + days % 31;
  } else {
    jm = 7 + parseInt((days - 186) / 30);
    jd = 1 + (days - 186) % 30;
  }

  return [jy, jm, jd];
}

function jalali_to_gregorian(jy, jm, jd) {
  var sal_a, gy, gm, gd, days;
  jy += 1595;
  days = -355668 + 365 * jy + parseInt(jy / 33) * 8 + parseInt((jy % 33 + 3) / 4) + jd + (jm < 7 ? (jm - 1) * 31 : (jm - 7) * 30 + 186);
  gy = 400 * parseInt(days / 146097);
  days %= 146097;

  if (days > 36524) {
    gy += 100 * parseInt(--days / 36524);
    days %= 36524;
    if (days >= 365) days++;
  }

  gy += 4 * parseInt(days / 1461);
  days %= 1461;

  if (days > 365) {
    gy += parseInt((days - 1) / 365);
    days = (days - 1) % 365;
  }

  gd = days + 1;
  sal_a = [0, 31, gy % 4 === 0 && gy % 100 !== 0 || gy % 400 === 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  for (gm = 0; gm < 13 && gd > sal_a[gm]; gm++) {
    gd -= sal_a[gm];
  }

  return [gy, gm, gd];
}

ndt = new Date();
g_y = ndt.getFullYear();
g_m = ndt.getMonth() + 1;
g_d = ndt.getDate();
var datap = gregorian_to_jalali(g_y, g_m, g_d); //   -------------------tabdil------------------------------

var line = document.querySelectorAll(".line");
var image = document.querySelectorAll(".image");
var monot = document.querySelectorAll(".monot");
var tarikh = document.querySelector(".tarikh h5");

if (window.innerWidth > 768) {
  line[0].addEventListener("mousemove", function (e) {
    var i = 0;
    var mx = e.clientX - line[i].offsetLeft;
    var my = e.clientY - line[i].offsetTop + window.scrollY;
    var mY = Math.floor(my / (line[i].offsetHeight / 100) * 2 - 100);
    var mX = Math.floor(mx / (line[i].offsetWidth / 100) * 2 - 100);
    image[i].style.transform = "translate(".concat(mX / 10, "px , ").concat(mY / 10, "px)");
    line[i].addEventListener("mouseout", function () {
      image[i].style.transform = "translate(0px , 0px)";
    });
  });
  line[1].addEventListener("mousemove", function (e) {
    var i = 1;
    var mx = e.clientX - line[i].offsetLeft;
    var my = e.clientY - line[i].offsetTop + window.scrollY;
    var mY = Math.floor(my / (line[i].offsetHeight / 100) * 2 - 100);
    var mX = Math.floor(mx / (line[i].offsetWidth / 100) * 2 - 100);
    image[i].style.transform = "translate(".concat(mX / 10, "px , ").concat(mY / 10, "px)");
    line[i].addEventListener("mouseout", function () {
      image[i].style.transform = "translate(0px , 0px)";
    });
  });
  line[2].addEventListener("mousemove", function (e) {
    var i = 2;
    var mx = e.clientX - line[i].offsetLeft;
    var my = e.clientY - line[i].offsetTop + window.scrollY;
    var mY = Math.floor(my / (line[i].offsetHeight / 100) * 2 - 100);
    var mX = Math.floor(mx / (line[i].offsetWidth / 100) * 2 - 100);
    image[i].style.transform = "translate(".concat(mX / 10, "px , ").concat(mY / 10, "px)");
    line[i].addEventListener("mouseout", function () {
      image[i].style.transform = "translate(0px , 0px)";
    });
  });
  line[3].addEventListener("mousemove", function (e) {
    var i = 3;
    var mx = e.clientX - line[i].offsetLeft;
    var my = e.clientY - line[i].offsetTop + window.scrollY;
    var mY = Math.floor(my / (line[i].offsetHeight / 100) * 2 - 100);
    var mX = Math.floor(mx / (line[i].offsetWidth / 100) * 2 - 100);
    image[i].style.transform = "translate(".concat(mX / 10, "px , ").concat(mY / 10, "px)");
    line[i].addEventListener("mouseout", function () {
      image[i].style.transform = "translate(0px , 0px)";
    });
  });
  line[4].addEventListener("mousemove", function (e) {
    var i = 4;
    var mx = e.clientX - line[i].offsetLeft;
    var my = e.clientY - line[i].offsetTop + window.scrollY;
    var mY = Math.floor(my / (line[i].offsetHeight / 100) * 2 - 100);
    var mX = Math.floor(mx / (line[i].offsetWidth / 100) * 2 - 100);
    image[i].style.transform = "translate(".concat(mX / 10, "px , ").concat(mY / 10, "px)");
    line[i].addEventListener("mouseout", function () {
      image[i].style.transform = "translate(0px , 0px)";
    });
  }); // ----------------------------------------------------------basic-----------------------------

  line[5].addEventListener("mousemove", function (e) {
    var i = 5;
    var mx = e.clientX - line[i].offsetLeft;
    var my = e.clientY - line[i].offsetTop + window.scrollY;
    var mY = Math.floor(my / (line[i].offsetHeight / 100) * 2 - 100);
    var mX = Math.floor(mx / (line[i].offsetWidth / 100) * 2 - 100);
    image[i].style.transform = "translate(".concat(mX / 10, "px , ").concat(mY / 10, "px)");
    line[i].addEventListener("mouseout", function () {
      image[i].style.transform = "translate(0px , 0px)";
    });
  });
  line[6].addEventListener("mousemove", function (e) {
    var i = 6;
    var mx = e.clientX - line[i].offsetLeft;
    var my = e.clientY - line[i].offsetTop + window.scrollY;
    var mY = Math.floor(my / (line[i].offsetHeight / 100) * 2 - 100);
    var mX = Math.floor(mx / (line[i].offsetWidth / 100) * 2 - 100);
    image[i].style.transform = "translate(".concat(mX / 10, "px , ").concat(mY / 10, "px)");
    line[i].addEventListener("mouseout", function () {
      image[i].style.transform = "translate(0px , 0px)";
    });
  });
  line[7].addEventListener("mousemove", function (e) {
    var i = 7;
    var mx = e.clientX - line[i].offsetLeft;
    var my = e.clientY - line[i].offsetTop + window.scrollY;
    var mY = Math.floor(my / (line[i].offsetHeight / 100) * 2 - 100);
    var mX = Math.floor(mx / (line[i].offsetWidth / 100) * 2 - 100);
    image[i].style.transform = "translate(".concat(mX / 10, "px , ").concat(mY / 10, "px)");
    line[i].addEventListener("mouseout", function () {
      image[i].style.transform = "translate(0px , 0px)";
    });
  });
  line[8].addEventListener("mousemove", function (e) {
    var i = 8;
    var mx = e.clientX - line[i].offsetLeft;
    var my = e.clientY - line[i].offsetTop + window.scrollY;
    var mY = Math.floor(my / (line[i].offsetHeight / 100) * 2 - 100);
    var mX = Math.floor(mx / (line[i].offsetWidth / 100) * 2 - 100);
    image[i].style.transform = "translate(".concat(mX / 10, "px , ").concat(mY / 10, "px)");
    line[i].addEventListener("mouseout", function () {
      image[i].style.transform = "translate(0px , 0px)";
    });
  });
  line[9].addEventListener("mousemove", function (e) {
    var i = 9;
    var mx = e.clientX - line[i].offsetLeft;
    var my = e.clientY - line[i].offsetTop + window.scrollY;
    var mY = Math.floor(my / (line[i].offsetHeight / 100) * 2 - 100);
    var mX = Math.floor(mx / (line[i].offsetWidth / 100) * 2 - 100);
    image[i].style.transform = "translate(".concat(mX / 10, "px , ").concat(mY / 10, "px)");
    line[i].addEventListener("mouseout", function () {
      image[i].style.transform = "translate(0px , 0px)";
    });
  });
  line[10].addEventListener("mousemove", function (e) {
    var i = 10;
    var mx = e.clientX - line[i].offsetLeft;
    var my = e.clientY - line[i].offsetTop + window.scrollY;
    var mY = Math.floor(my / (line[i].offsetHeight / 100) * 2 - 100);
    var mX = Math.floor(mx / (line[i].offsetWidth / 100) * 2 - 100);
    image[i].style.transform = "translate(".concat(mX / 10, "px , ").concat(mY / 10, "px)");
    line[i].addEventListener("mouseout", function () {
      image[i].style.transform = "translate(0px , 0px)";
    });
  });
  line[11].addEventListener("mousemove", function (e) {
    var i = 11;
    var mx = e.clientX - line[i].offsetLeft;
    var my = e.clientY - line[i].offsetTop + window.scrollY;
    var mY = Math.floor(my / (line[i].offsetHeight / 100) * 2 - 100);
    var mX = Math.floor(mx / (line[i].offsetWidth / 100) * 2 - 100);
    image[i].style.transform = "translate(".concat(mX / 10, "px , ").concat(mY / 10, "px)");
    line[i].addEventListener("mouseout", function () {
      image[i].style.transform = "translate(0px , 0px)";
    });
  });
  line[12].addEventListener("mousemove", function (e) {
    var i = 12;
    var mx = e.clientX - line[i].offsetLeft;
    var my = e.clientY - line[i].offsetTop + window.scrollY;
    var mY = Math.floor(my / (line[i].offsetHeight / 100) * 2 - 100);
    var mX = Math.floor(mx / (line[i].offsetWidth / 100) * 2 - 100);
    image[i].style.transform = "translate(".concat(mX / 10, "px , ").concat(mY / 10, "px)");
    line[i].addEventListener("mouseout", function () {
      image[i].style.transform = "translate(0px , 0px)";
    });
  });
  line[13].addEventListener("mousemove", function (e) {
    var i = 13;
    var mx = e.clientX - line[i].offsetLeft;
    var my = e.clientY - line[i].offsetTop + window.scrollY;
    var mY = Math.floor(my / (line[i].offsetHeight / 100) * 2 - 100);
    var mX = Math.floor(mx / (line[i].offsetWidth / 100) * 2 - 100);
    image[i].style.transform = "translate(".concat(mX / 10, "px , ").concat(mY / 10, "px)");
    line[i].addEventListener("mouseout", function () {
      image[i].style.transform = "translate(0px , 0px)";
    });
  });
  line[14].addEventListener("mousemove", function (e) {
    var i = 14;
    var mx = e.clientX - line[i].offsetLeft;
    var my = e.clientY - line[i].offsetTop + window.scrollY;
    var mY = Math.floor(my / (line[i].offsetHeight / 100) * 2 - 100);
    var mX = Math.floor(mx / (line[i].offsetWidth / 100) * 2 - 100);
    image[i].style.transform = "translate(".concat(mX / 10, "px , ").concat(mY / 10, "px)");
    line[i].addEventListener("mouseout", function () {
      image[i].style.transform = "translate(0px , 0px)";
    });
  }); // --------------------------------------en base-------------------------------------------------
}

if (window.innerWidth < 768) {
  window.addEventListener("scroll", function () {
    for (var i = 0; i < monot.length; i++) {
      var scrol = window.scrollY;
      var scr = window.innerHeight;
      var nesfonahar = scrol + scr / 2;
      var oneobj = line[i].offsetTop;
      var oneobjzir = line[i].offsetTop + line[i].offsetHeight;

      if (nesfonahar > oneobj) {
        monot[i].style.marginTop = "150px";
      } else {
        monot[i].style.marginTop = "0px";
      }

      if (nesfonahar > oneobjzir) {
        monot[i].style.marginTop = "0px";
      }
    }
  });
}

tarikh.innerHTML = "".concat(datap[0], "/").concat(datap[1], "/").concat(datap[2]);
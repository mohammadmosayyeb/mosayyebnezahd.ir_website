"use strict";

/* 
* modified from http://www.voidware.com/moon_phase.htm 
*/
function getMoonPhase(year, month, day) {
  var c = e = jd = b = 0;

  if (month < 3) {
    year--;
    month += 12;
  }

  ++month;
  c = 365.25 * year;
  e = 30.6 * month;
  jd = c + e + day - 694039.09; //jd is total days elapsed

  jd /= 29.5305882; //divide by the moon cycle

  b = parseInt(jd); //int(jd) -> b, take integer part of jd

  jd -= b; //subtract integer part to leave fractional part of original jd

  b = Math.round(jd * 8); //scale fraction from 0-8 and round

  if (b >= 8) {
    b = 0; //0 and 8 are the same so turn 8 into 0
  } // 0 => New Moon 
  // 1 => Waxing Crescent Moon 
  // 2 => Quarter Moon 
  // 3 => Waxing Gibbous Moon
  // 4 => Full Moon
  // 5 => Waning Gibbous Moon
  // 6 => Last Quarter Moon
  // 7 => Waning Crescent Moon


  return b;
}

var date = new Date();
var gertmoonPhase = getMoonPhase(date.getFullYear(), date.getMonth(), date.getDate()); // 0 => New Moon ; var newMoon = mooon.transform = `translate(0 , 0px)`;
// 1 => Waxing Crescent Moon ;var WaxingCrescent = mooon.transform = `translate(-40px , 0px)`;
// 2 => Quarter Moon ;var Quarter = mooon.transform = `translate(-70px, 0px)`;
// 3 => Waxing Gibbous Moon ;var WaxingGibbous = mooon.transform = `translate(-130px , 0px)`;
// 4 => Full Moon ; var fullmoon = mooon.transform = `translate(-200px , 0px)`;
// 5 => Waning Gibbous Moon ; var WaningGibbous = mooon.transform = `translate(130px , 0px)`;
// 6 => Last Quarter Moon ;var LastQuarter = mooon.transform = `translate(70px , 0px)`;
// 7 => Waning Crescent Moon ; var WaningCrescent = mooon.transform = `translate(40px , 0px)`;

var mooon = document.querySelector(".shadow").style;
var sec3 = document.querySelector(".sec3");
window.addEventListener("scroll", function () {
  if (window.scrollY + window.innerHeight > sec3.offsetTop + document.querySelector(".moon").offsetTop) {
    switch (gertmoonPhase) {
      case 0:
        mooon.transform = "translate(0px , 0px)";
        break;

      case 1:
        mooon.transform = "translate(-40px , 40px)";
        break;

      case 2:
        mooon.transform = "translate(-70px , 70px)";
        break;

      case 3:
        mooon.transform = "translate(-130px , 130px)";
        break;

      case 4:
        mooon.transform = "translate(-200px , 200px)";
        break;

      case 5:
        mooon.transform = "translate(130px , 130px)";
        break;

      case 6:
        mooon.transform = "translate(70px , 70px)";
        break;

      case 7:
        mooon.transform = "translate(40px , 40px)";
        break;

      default:
        break;
    }
  }
});
var Hor = date.getHours();
day = Hor >= 7 && Hor <= 16;
evening = Hor >= 5 && Hor <= 6 || Hor > 16 && Hor < 19;
night = Hor > 0 && Hor < 5 || Hor > 18 && Hor <= 24;

if (day) {
  console.log("day");
  sec3.style.background = "skyblue";
}

if (evening) {
  console.log("evening");
  sec3.style.backgroundImage = "linear-gradient(to top , rgba(255, 0, 0, 0.6), rgb(1, 4, 39) )";
}

if (night) {
  console.log("night");
  sec3.style.backgroundImage = "radial-gradient(rgba(100,100,100,.1), rgb(1, 4, 39) )";
}


// --------------------------------caments------------توانایی ها-----------------------j-------------------
var s1 = "95";
var s2 = "98";
var s3 = "97";
var s4 = "60";
var s5 = "88";
var s6 = "15";
var s7 = "100";
var s8 = "19";
var s9 = "30";
var s10 = "85";
var s11 = "85";
var s12 = "65";

var GlobalTime = new Date();

var time = GlobalTime.getHours();
var Gnight = time <= 24 && time > 19 || time >= 0 && time < 5;



// -----------------caments----------------------توانایی ها----------------------j-------------------------
var screenH = window.innerHeight;
var ColorOfTop = document.querySelector(".ColorOfTop");

function Isnight(mediacall) {
	if (mediacall) {
		
		document.querySelector(".Learn-more").style.background = "rgba(255, 255, 255, 0.6)";
		document.querySelector(".NameOGThecknology").style.color = "#000";

	} else {
		
		document.querySelector(".Learn-more").style.background = "rgba(0, 35, 46, 0.8)";
		document.querySelector(".NameOGThecknology").style.color = "rgba(255, 255, 255, 0.6)";
	}
}
var lengue;
var boy = 0;
var inNihgtSomone;




function setting() {
	lengue = document.querySelector('.docmi').classList.length;
	
}
function setcookies(getme) {



	if (getme==1) {
		var Logiced = "Night = 1";

	}
	else {
		var Logiced = "Night = 0";

	}



	document.cookie = Logiced;
	
	
}
function getCookie(cookie_name) {
	var name = cookie_name + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}


// ---------------------start the menu-----------------------------------------------
var x = 0;
var menuBot = document.querySelector(".menu");
var lines = document.querySelectorAll(".line");

lines[0].style.transform = "translateY(-10px)";
lines[1].style.transform = "translateY(0px)";
lines[2].style.transform = "translateY(10px)";
menuBot.addEventListener("click", () => {
	function open() {
		var wos = document.querySelectorAll(".oWsv");
		lines[1].style.width = "0";
		lines[1].style.marginLeft = "50%";
		lines[1].style.opacity = ".3";
		lines[0].style.transform = "rotate(45deg)";
		lines[2].style.transform = "rotate(-45deg)";


		document.querySelector(".navinphone").style.marginLeft = "0px";
		document.querySelector(".navinphone").style.transitionDelay = "0s";
		document.querySelector(".baner").style.display = "block";
		wos[0].style.transitionDelay = ".0s";
		wos[1].style.transitionDelay = ".05s";
		wos[2].style.transitionDelay = ".1s";
		wos[3].style.transitionDelay = ".16s";


		for (var i = 0; i < wos.length; i++) {
			wos[i].style.width = "90%";
			wos[i].style.opacity = "1";
			wos[i].addEventListener("click", () => {
				close();
			})

		}

		x++

	}
	function close() {
		var wos = document.querySelectorAll(".oWsv");
		lines[1].style.opacity = "1";
		// lines[1].style.transform = "translateY(0px)";
		lines[1].style.width = "100%";
		lines[1].style.marginLeft = "0";
		lines[0].style.transform = "translateY(-10px)";
		lines[2].style.transform = "translateY(10px)";
		document.querySelector(".navinphone").style.marginLeft = "-70%";
		document.querySelector(".navinphone").style.transitionDelay = ".2s";
		document.querySelector(".baner").style.display = "none";

		for (var i = 0; i < wos.length; i++) {
			wos[i].style.width = "20%";
			wos[i].style.opacity = "0";
			wos[i].style.transitionDelay = "0";
		}


		if (x > 0) { x-- }

	}
	if (x == 0) { open() }
	else if (x == 1) { close() }
})


// ---------------------end the menu-------------------------------------------------

var inteligence = 0;
function muzy() {
	setting();
	aoutomatic();

}
document.querySelector('.docmi').addEventListener('click', muzy, false);

// ----------------------------------------------------------------------------------------------------------------


// ---------------------------------------------------------------------------------------------------------------------------------------------------



function scroooooooooooooooooooooool() {
	var myTavanaei = document.querySelectorAll('.box');
	var scrooooly = window.scrollY + window.innerHeight;
	// ---------------------------------------------------
	if (scrooooly > myTavanaei[0].offsetTop) {
		myTavanaei[0].style.width = s1 + "%";
	} else {
		myTavanaei[0].style.width = "0";
	}
	// -----------------------------------------------------------
	if (scrooooly > myTavanaei[1].offsetTop) {
		myTavanaei[1].style.width = s2 + "%";
	} else {
		myTavanaei[1].style.width = "0";
	}
	// ------------------------------------------------------------
	if (scrooooly > myTavanaei[2].offsetTop) {
		myTavanaei[2].style.width = s3 + "%";
	} else {
		myTavanaei[2].style.width = "0";
	}
	// ---------------------------------------------------
	if (scrooooly > myTavanaei[3].offsetTop) {
		myTavanaei[3].style.width = s4 + "%";
	} else {
		myTavanaei[3].style.width = "0";
	}
	// -----------------------------------------------------------
	if (scrooooly > myTavanaei[4].offsetTop) {
		myTavanaei[4].style.width = s5 + "%";
	} else {
		myTavanaei[4].style.width = "0";
	}
	// ------------------------------------------------------------
	if (scrooooly > myTavanaei[5].offsetTop) {
		myTavanaei[5].style.width = s6 + "%";
	} else {
		myTavanaei[5].style.width = "0";
	}
	// ---------------------------------------------------
	if (scrooooly > myTavanaei[6].offsetTop) {
		myTavanaei[6].style.width = s7 + "%";
	} else {
		myTavanaei[6].style.width = "0";
	}
	// -----------------------------------------------------------
	if (scrooooly > myTavanaei[7].offsetTop) {
		myTavanaei[7].style.width = s8 + "%";
	} else {
		myTavanaei[7].style.width = "0";
	}
	// ------------------------------------------------------------
	if (scrooooly > myTavanaei[8].offsetTop) {
		myTavanaei[8].style.width = s9 + "%";
	} else {
		myTavanaei[8].style.width = "0";
	}
	// ---------------------------------------------------
	if (scrooooly > myTavanaei[9].offsetTop) {
		myTavanaei[9].style.width = s10 + "%";
	} else {
		myTavanaei[9].style.width = "0";
	}
	// -----------------------------------------------------------
	if (scrooooly > myTavanaei[10].offsetTop) {
		myTavanaei[10].style.width = s11 + "%";
	} else {
		myTavanaei[10].style.width = "0";
	}
	// ------------------------------------------------------------
	if (scrooooly > myTavanaei[11].offsetTop) {
		myTavanaei[11].style.width = s12 + "%";
	} else {
		myTavanaei[11].style.width = "0";
	}

}
window.addEventListener("scroll", scroooooooooooooooooooooool, false);
var jdskhf = document.querySelector('.sds').offsetTop;
document.querySelector('.titr').style.marginTop = screenH - jdskhf - 100 + "px";
if (screenH < 600) {
	document.querySelector('.titr').style.marginTop = screenH - jdskhf + 150 + "px";
}
function mYfabe() {
	var jdskhf = document.querySelector('.sds').offsetTop;
	var screenHer = window.innerHeight;
	document.querySelector('.titr').style.marginTop = screenHer - jdskhf - 100 + "px";
	if (screenHer < 600) {
		document.querySelector('.titr').style.marginTop = screenHer - jdskhf + 150 + "px";
	}
}
window.addEventListener("resize", mYfabe, false);

function moooooswdhncjklwd1() {
	document.querySelectorAll(".ffrtu")[0].classList.toggle("shhkjfdfkj");
}
function moooooswdhncjklwd2() {
	document.querySelectorAll(".ffrtu")[1].classList.toggle("shhkjfdfkj");
}
function moooooswdhncjklwd3() {
	document.querySelectorAll(".ffrtu")[2].classList.toggle("shhkjfdfkj");
}
document.querySelectorAll(".fg")[0].addEventListener("click", moooooswdhncjklwd1, false)
document.querySelectorAll(".fg")[1].addEventListener("click", moooooswdhncjklwd2, false)
document.querySelectorAll(".fg")[2].addEventListener("click", moooooswdhncjklwd3, false)

if (navigator.onLine) {
} else {
	var myIcon = document.querySelector('.mreu');
	myIcon.attributes.removeNamedItem("href");
	var myhref = document.createAttribute("href");
	myhref.value = "images/offline.svg";
	myIcon.attributes.setNamedItem(myhref);

}

// --------------------keep 19-5------------------------------
// --------------------keep out 6-20------------------------------


var h5 = document.querySelector('.h5ew');
navigator.getBattery()
	.then(status => {
		var adad = status.level;
		h5.innerHTML = adad * 100 + "%";
		var inbat = document.querySelector('.inbat');
		inbat.style.width = adad * 100 + "%";
		if (adad < 0.15) {
			inbat.style.background = "red";
		} else if (adad < 0.30) {
			inbat.style.background = "orange";
		}
	})

var timw = document.querySelector('.time');
var tim2 = new Date().getMinutes();
var tim1 = new Date().getHours();
timw.innerHTML = tim1 + ":" + tim2;
if (tim1 < 10) {
	timw.innerHTML = "0" + tim1 + ":" + tim2;
}
else if (tim2 < 10) {
	timw.innerHTML = tim1 + ":" + "0" + tim2;
}
if (tim1 < 10 && tim2 < 10) {
	timw.innerHTML = "0" + tim1 + ":" + "0" + tim2;
}
function times() {
	var h5 = document.querySelector('.h5ew');
	navigator.getBattery()
		.then(status => {
			var adad = status.level;
			h5.innerHTML = adad * 100 + "%";
			var inbat = document.querySelector('.inbat');
			inbat.style.width = adad * 100 + "%";
			if (adad < 0.15) {
				inbat.style.background = "red";
			} else if (adad < 0.30) {
				inbat.style.background = "orange";
			}
		})

	var timw = document.querySelector('.time');
	var tim2 = new Date().getMinutes();
	var tim1 = new Date().getHours();
	timw.innerHTML = tim1 + ":" + tim2;
	if (tim1 < 10) {
		timw.innerHTML = "0" + tim1 + ":" + tim2;
	}
	else if (tim2 < 10) {
		timw.innerHTML = tim1 + ":" + "0" + tim2;
	}
	if (tim1 < 10 && tim2 < 10) {
		timw.innerHTML = "0" + tim1 + ":" + "0" + tim2;
	}

}
setInterval(times, 1000);
var tabrik = document.querySelector(".tabrik");
if (time >= 5 && time < 11) {
	tabrik.innerHTML = "صبح بخیر";

}
else if (time >= 11 && time < 13) {
	tabrik.innerHTML = "ظهر بخیر";

}
else if (time >= 13 && time < 20) {
	tabrik.innerHTML = "عصر بخیر";
}
else {
	tabrik.innerHTML = "شب بخیر";


}




// -------------------------------------------------------------------------------------


document.querySelector(".one").addEventListener("click", () => {
	sms("#one", 750);
})

document.querySelector(".two").addEventListener("click", () => {
	sms("#two", 750);
})

document.querySelector(".four").addEventListener("click", () => {
	sms("#four", 750);
})

document.querySelector(".one1").addEventListener("click", () => {
	sms("#one", 750);
})

document.querySelector(".two1").addEventListener("click", () => {
	sms("#two", 750);
})


document.querySelector(".four1").addEventListener("click", () => {
	sms("#four", 750);
})




// -------------------------------------------------------------------------------------
var sen = (new Date().getFullYear() - 2004) - 1;
document.querySelector(".boogh").innerHTML = `${sen}`;
var meg = document.querySelector(".eshal");
var eshal;

switch (sen) {
	case 15:
		eshal = "سه";
		break;
	case 16:
		eshal = "چهار";
		break;
	case 17:
		eshal = "پنج";
		break;
	case 18:
		eshal = "شش";
		break;
	case 19:
		eshal = "هفت";
		break;
	case 21:
		eshal = "هشت";
		break;
	case 22:
		eshal = "نه";
		break;
	case 23:
		eshal = "ده";
		break;
	default:
		eshal = "بیش از ده"
}
meg.innerHTML = eshal;
// ----------------------------------------------------------------



// -----------------------------LeranMore------------------------------------

var lm = document.querySelector(".Learn-more");
var box = document.querySelectorAll(".boxy");
var titrone = document.querySelector("#two");

var mooo = document.querySelector(".mood").offsetTop;

window.addEventListener("scroll", () => {
	const WNDOS = window.scrollY + window.innerHeight;
	if (WNDOS > titrone.offsetTop) {
		window.addEventListener("mousemove", (e) => {

			var MousePos = e.clientY + window.scrollY;
			var MousePosX = e.clientX;


			function elseing() {
				lm.style.opacity = "0";
				if (window.innerWidth < 768) {

					lm.style.transform = `translate(0px , ${document.querySelector(".Learn-more").offsetTop / 2}px)`;
				}

			}

			function RUN(Iszero, inuai) {
				lm.style.opacity = "1";
				var miue = (box[inuai].offsetTop - 1018) - mooo;
				if (window.innerWidth > 768) {
					if (Iszero) {
						lm.style.transform = `translate(${box[inuai].offsetLeft}px , ${miue + 35}px)`;
					}
					else {
						lm.style.transform = `translate(${box[inuai].offsetLeft}px , ${miue - 320}px)`;

					}
					$(".Episode").animate({
						marginTop: "0"
					}, 576);
				}
				else {
					lm.style.transform = `translate(0px , ${-((document.querySelector(".Learn-more").offsetTop) - ((window.innerHeight / 2) - 200))}px)`;

					$(".Episode").animate({
						marginTop: "0"
					}, 820);

				}






				switch (inuai) {
					case 0:

						document.querySelector(".NameOGThecknology").innerHTML = "HTML";

						document.querySelector(".imagOfMe").setAttribute("src", "images/NewOptionalSite/000.svg");

						document.querySelector(".pOfEpisode").innerHTML = "بیسک و پایه ای ترین دانش برای طراحی صفحات وب ، به کمک این زبان می توان چهارچوب ساختاری صفحات وب را ایجاد نمود";

						document.querySelectorAll(".ThreEpisode a")[0].setAttribute("href", "certificate");
						document.querySelectorAll(".ThreEpisode a")[1].setAttribute("href", "NoProject");

						break;

					case 1:

						document.querySelector(".NameOGThecknology").innerHTML = "CSS";

						document.querySelector(".imagOfMe").setAttribute("src", "images/NewOptionalSite/001.svg");

						document.querySelector(".pOfEpisode").innerHTML = "روش و زبانی برای چیدمان و جلوه های بصری در صفحات وب می باشد که جزو سه عامل اصلی صفحات وب در وب جهان گستر است";

						document.querySelectorAll(".ThreEpisode a")[0].setAttribute("href", "");
						document.querySelectorAll(".ThreEpisode a")[1].setAttribute("href", "");

						break;

					case 2:

						document.querySelector(".NameOGThecknology").innerHTML = "JavaScript";

						document.querySelector(".imagOfMe").setAttribute("src", "images/NewOptionalSite/002.svg");

						document.querySelector(".pOfEpisode").innerHTML = "تنها زبان برنامه نویسی سمت کابر که از اهمیت بالایی برخوردار است و قدرت زیادی در تعامل با اچ تی ام ال دارد";

						document.querySelectorAll(".ThreEpisode a")[0].setAttribute("href", "");
						document.querySelectorAll(".ThreEpisode a")[1].setAttribute("href", "");

						break;

					case 3:

						document.querySelector(".NameOGThecknology").innerHTML = "Python";

						document.querySelector(".imagOfMe").setAttribute("src", "images/NewOptionalSite/003.svg");

						document.querySelector(".pOfEpisode").innerHTML = "یکی از قدرتمند ترین زبان های برنامه نویسی ، شی گرا تفسیری سطح بالا و همه منظوره ";

						document.querySelectorAll(".ThreEpisode a")[0].setAttribute("href", "");
						document.querySelectorAll(".ThreEpisode a")[1].setAttribute("href", "");

						break;

					case 4:

						document.querySelector(".NameOGThecknology").innerHTML = "C Shurp";

						document.querySelector(".imagOfMe").setAttribute("src", "images/NewOptionalSite/004.svg");

						document.querySelector(".pOfEpisode").innerHTML = "یک زبان برنامه نویسی سطح بالا چند الگویی تابعی و شی گرا";

						document.querySelectorAll(".ThreEpisode a")[0].setAttribute("href", "");
						document.querySelectorAll(".ThreEpisode a")[1].setAttribute("href", "");

						break;

					case 5:

						document.querySelector(".NameOGThecknology").innerHTML = "Asp.net";

						document.querySelector(".imagOfMe").setAttribute("src", "images/NewOptionalSite/005.svg");

						document.querySelector(".pOfEpisode").innerHTML = "یک فریم ورک برای زبان سی شارپ که برنامه نویسی و ساخت سایت های پویا را با این زبان ممکن کرده است";

						document.querySelectorAll(".ThreEpisode a")[0].setAttribute("href", "");
						document.querySelectorAll(".ThreEpisode a")[1].setAttribute("href", "");

						break;

					case 6:

						document.querySelector(".NameOGThecknology").innerHTML = "Sass";

						document.querySelector(".imagOfMe").setAttribute("src", "images/NewOptionalSite/006.svg");

						document.querySelector(".pOfEpisode").innerHTML = "یک پیش  پردازنده یا افزونه برای زبان سی اس اس که به آن قدرت زیادی در مدیریت کد ها بخشیده است";

						document.querySelectorAll(".ThreEpisode a")[0].setAttribute("href", "");
						document.querySelectorAll(".ThreEpisode a")[1].setAttribute("href", "");

						break;

					case 7:

						document.querySelector(".NameOGThecknology").innerHTML = "React.js";

						document.querySelector(".imagOfMe").setAttribute("src", "images/NewOptionalSite/007.svg");

						document.querySelector(".pOfEpisode").innerHTML = "یک کتابخانه جاوا اسکریپت برای ساخت رابط کاربری و اجزای کامپوننت صفحات وب است";

						document.querySelectorAll(".ThreEpisode a")[0].setAttribute("href", "");
						document.querySelectorAll(".ThreEpisode a")[1].setAttribute("href", "");

						break;

					case 8:

						document.querySelector(".NameOGThecknology").innerHTML = "Vue.js";

						document.querySelector(".imagOfMe").setAttribute("src", "images/NewOptionalSite/008.svg");

						document.querySelector(".pOfEpisode").innerHTML = "یک فریم ورک یا چهارچوب قدرتمند برای زبان جاوااسکریپت که برای نوشتن و آماده سازی رابط کاربری از آن بهره برده می شود";

						document.querySelectorAll(".ThreEpisode a")[0].setAttribute("href", "");
						document.querySelectorAll(".ThreEpisode a")[1].setAttribute("href", "");

						break;

					case 9:

						document.querySelector(".NameOGThecknology").innerHTML = "Photoshop";

						document.querySelector(".imagOfMe").setAttribute("src", "images/NewOptionalSite/009.svg");

						document.querySelector(".pOfEpisode").innerHTML = "قدرتمند ترین و قدیمی ترین نرم افزار ویرایش عکس";

						document.querySelectorAll(".ThreEpisode a")[0].setAttribute("href", "");
						document.querySelectorAll(".ThreEpisode a")[1].setAttribute("href", "");

						break;

					case 10:

						document.querySelector(".NameOGThecknology").innerHTML = "Premiere";

						document.querySelector(".imagOfMe").setAttribute("src", "images/NewOptionalSite/010.svg");

						document.querySelector(".pOfEpisode").innerHTML = "قدرتمند ترین نرم افزار تدوین فیلم";

						document.querySelectorAll(".ThreEpisode a")[0].setAttribute("href", "");
						document.querySelectorAll(".ThreEpisode a")[1].setAttribute("href", "");

						break;

					case 11:

						document.querySelector(".NameOGThecknology").innerHTML = "Illustrator";

						document.querySelector(".imagOfMe").setAttribute("src", "images/NewOptionalSite/011.svg");

						document.querySelector(".pOfEpisode").innerHTML = "یک نرم افزار قدرتمند برای کار بر روی فایل های وکتور یا اس وی جی";

						document.querySelectorAll(".ThreEpisode a")[0].setAttribute("href", "");
						document.querySelectorAll(".ThreEpisode a")[1].setAttribute("href", "");

						break;



				}

			}


			function ifuse(obj) {
				if (window.innerWidth > 768) {
					if (obj == 32) {
						var IFOKEY = !(((MousePosX >= box[0].offsetLeft) && (MousePosX <= box[0].offsetLeft + box[0].offsetWidth)) || ((MousePosX >= box[10].offsetLeft) && (MousePosX <= box[10].offsetLeft + box[10].offsetWidth)))
						return IFOKEY
					}
					else if (lm.style.opacity != "1") {
						var IFOK = ((MousePos >= box[obj].offsetTop) && (MousePos <= box[obj].offsetTop + 30)) && ((MousePosX >= box[obj].offsetLeft) && (MousePosX <= box[obj].offsetLeft + box[obj].offsetWidth))

						return IFOK;
					}
				}
				else {
					if (obj == 32) {
						var shastdarsad = (window.innerWidth) * .55;
						var wind = window.innerWidth - shastdarsad;
						var taghsimedo = wind / 2;
						var firstwin = taghsimedo;
						var lastwin = firstwin + shastdarsad;
						var IFOKEY = ((MousePosX >= firstwin) && (MousePosX <= lastwin));

						return !IFOKEY
					}
					else if (lm.style.opacity != "1") {
						var IFOK = ((MousePos >= box[obj].offsetTop) && (MousePos <= box[obj].offsetTop + 30)) && ((MousePosX >= box[obj].offsetLeft) && (MousePosX <= box[obj].offsetLeft + box[obj].offsetWidth))

						return IFOK;
					}
				}
			}


			if (ifuse(0)) {
				RUN(true, 0)
			}
			else if (ifuse(1)) {
				RUN(true, 1)
			}
			else if (ifuse(2)) {
				RUN(true, 2)
			}
			else if (ifuse(3)) {
				RUN(false, 3)
			}
			else if (ifuse(4)) {
				RUN(false, 4)
			}
			else if (ifuse(5)) {
				RUN(false, 5)
			}
			else if (ifuse(6)) {
				RUN(true, 6)
			}
			else if (ifuse(7)) {
				RUN(true, 7)
			}
			else if (ifuse(8)) {
				RUN(true, 8)
			}
			else if (ifuse(9)) {
				RUN(false, 9)
			}
			else if (ifuse(10)) {
				RUN(false, 10);

			}
			else if (ifuse(11)) {
				RUN(false, 11);

			}
			else if (ifuse(32)) {
				elseing()
			}

			// -----------------------------EndOfAmaliat-------------------------------
		})
	}
})

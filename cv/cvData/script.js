function gregorian_to_jalali(gy, gm, gd) {
    var g_d_m, jy, jm, jd, gy2, days;
    g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    gy2 = (gm > 2) ? (gy + 1) : gy;
    days = 355666 + (365 * gy) + parseInt((gy2 + 3) / 4) - parseInt((gy2 + 99) / 100) + parseInt((gy2 + 399) / 400) + gd + g_d_m[gm - 1];
    jy = -1595 + (33 * parseInt(days / 12053));
    days %= 12053;
    jy += 4 * parseInt(days / 1461);
    days %= 1461;
    if (days > 365) {
        jy += parseInt((days - 1) / 365);
        days = (days - 1) % 365;
    }
    if (days < 186) {
        jm = 1 + parseInt(days / 31);
        jd = 1 + (days % 31);
    } else {
        jm = 7 + parseInt((days - 186) / 30);
        jd = 1 + ((days - 186) % 30);
    }
    return [jy, jm, jd];
}
function jalali_to_gregorian(jy, jm, jd) {
    var sal_a, gy, gm, gd, days;
    jy += 1595;
    days = -355668 + (365 * jy) + (parseInt(jy / 33) * 8) + parseInt(((jy % 33) + 3) / 4) + jd + ((jm < 7) ? (jm - 1) * 31 : ((jm - 7) * 30) + 186);
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
    sal_a = [0, 31, ((gy % 4 === 0 && gy % 100 !== 0) || (gy % 400 === 0)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    for (gm = 0; gm < 13 && gd > sal_a[gm]; gm++) gd -= sal_a[gm];
    return [gy, gm, gd];
}
ndt = new Date();
g_y = ndt.getFullYear();
g_m = ndt.getMonth() + 1;
g_d = ndt.getDate();
var datap = gregorian_to_jalali(g_y, g_m, g_d);
//   -------------------tabdil------------------------------
var line = document.querySelectorAll(".line");
var image = document.querySelectorAll(".image");
var monot = document.querySelectorAll(".monot");
var tarikh = document.querySelector(".tarikh h5");
function ExuseMe(adad, e) {
    let i = adad;
    var mx = e.clientX - (line[i].offsetLeft);
    var my = e.clientY - (line[i].offsetTop) + (window.scrollY);
    var mY = Math.floor((my / (line[i].offsetHeight / 100) * 2) - 100);
    var mX = Math.floor((mx / (line[i].offsetWidth / 100) * 2) - 100);
    image[i].style.transform = `translate(${mX / 10}px , ${mY / 10}px)`;
    line[i].addEventListener("mouseout", () => {
        image[i].style.transform = `translate(0px , 0px)`;
    })
}
if (window.innerWidth > 768) {
    function lole(w) {
        line[w].addEventListener("mousemove", (e) => {
            ExuseMe(w, e)
        })
    }
    for (var r = 0; r < image.length; r++) {
        lole(r);
    }
    // --------------------------------------en base-------------------------------------------------
}
if (window.innerWidth < 768) {
    window.addEventListener("scroll", () => {
        for (var i = 0; i < monot.length; i++) {
            let scrol = window.scrollY;
            let scr = window.innerHeight;
            let nesfonahar = scrol + (scr / 2);
            let oneobj = line[i].offsetTop;
            let oneobjzir = line[i].offsetTop + line[i].offsetHeight;
            if (nesfonahar > oneobj) {
                monot[i].style.marginTop = "150px";
            }
            else {
                monot[i].style.marginTop = "0px";
            }
            if (nesfonahar > oneobjzir) {
                monot[i].style.marginTop = "0px";
            }
        }
    })
}
tarikh.innerHTML = `${datap[0]}/${datap[1]}/${datap[2]}`

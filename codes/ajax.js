var we = 0;
function aoutomatic() {
    if (Gnight) {
        if (we == 0) {
            we++;

        }
        else if (we == 1) {
            we--;

        }
    }
    else {
        if (we == 0) {
            we++;

        }
        else if (we == 1) {
            we--;

        }
    }
    setcookies(we)

    document.querySelector('.docmi').classList.toggle("antar");
    document.querySelector(".mybody").classList.toggle("nobody");
    document.querySelector(".nav").classList.toggle("navindark");
    document.querySelector(".asldoc").classList.toggle("asldocindark");
    document.querySelector(".image").classList.toggle("labraty");
    document.querySelector(".sds").classList.toggle("sdsindark");
    var box = document.querySelectorAll(".box");
    for (var i = 0; i < box.length; i++) {
        box[i].classList.toggle("boxindark");
    }
    var mtnlightt = document.querySelectorAll(".mtnlightt");
    for (var i = 0; i < mtnlightt.length; i++) {
        mtnlightt[i].classList.toggle("mtndarkt");
    }
    var mtnlight = document.querySelectorAll(".mtnlight");
    for (var i = 0; i < mtnlight.length; i++) {
        mtnlight[i].classList.toggle("mtndark");
    }
    var hqmn = document.querySelectorAll(".hqmn");
    for (var i = 0; i < hqmn.length; i++) {
        hqmn[i].classList.toggle("fffr");
    }

    for (var i = 0; i < lines.length; i++) {
        lines[i].classList.toggle("lool");
    }
    document.querySelector('.Aboute1').classList.toggle("hdffgvb");
    document.querySelector('.Aboute2').classList.toggle("hdffgvb");
    document.querySelector('.bigfoot').classList.toggle("bigfootindark");
    document.querySelector(".r12").classList.toggle("r1");
    document.querySelector(".r22").classList.toggle("r2");
    document.querySelector(".r32").classList.toggle("r3");
    document.querySelector(".r42").classList.toggle("r4");
    document.querySelector(".r52").classList.toggle("r5");
    if (Gnight) {
        if (inteligence == 0) {
            inteligence++;
            Isnight(false)
        }
        else if (inteligence == 1) {
            inteligence--;
            Isnight(true)
        }
    }
    else {
        if (inteligence == 0) {
            inteligence++;
            Isnight(true)
        }
        else if (inteligence == 1) {
            inteligence--;
            Isnight(false)
        }
    }
}

var Cookoeseted = getCookie("Night");

if (Cookoeseted == 1) {
    aoutomatic();
    document.querySelector(".colorOftopFormeBrother").setAttribute("content", "#00232e")
}
else{
    document.querySelector(".colorOftopFormeBrother").setAttribute("content", "#b3b3b3")
}






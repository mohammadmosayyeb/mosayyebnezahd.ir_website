document.querySelector("button").addEventListener("click", () => {

    document.querySelector(".result").style.height = "810px";





    var ostek = document.querySelector("h2");
    var adade = document.querySelector("h6");


    var ghad = document.querySelector(".ghad").value;
    var moch = document.querySelector(".moch").value;
    var jenc = document.querySelector(".jenc").value;

    var Zaneh;

    if (jenc == "خانم") {
        Zaneh = true
    }
    else if (jenc == "بانو") {
        Zaneh = true
    }
    else if (jenc == "دختر") {
        Zaneh = true
    }
    else if (jenc == "خانوم") {
        Zaneh = true
    }
    else if (jenc == "ماده") {
        Zaneh = true
    }
    else if (jenc == "مونث") {
        Zaneh = true
    }
    else if (jenc == "زن") {
        Zaneh = true
    }
    else if (jenc == "مرد") {
        Zaneh = false
    }
    else if (jenc == "پسر") {
        Zaneh = false
    }
    else if (jenc == "آقا") {
        Zaneh = false
    }
    else if (jenc == "نر") {
        Zaneh = false
    }
    else if (jenc == "مذکر") {
        Zaneh = false
    }




    var netije = ghad / moch;
    var nemayesh;

    if (Zaneh) {
        if (netije > 11) {
            nemayesh = "کوچک";
        }
        else if (netije > 10.1 && netije < 11) {
            nemayesh = "متوسط";
        }
        else if (netije < 10.1) {
            nemayesh = "درشت";
        }

    }

    else {
        if (netije > 10.4) {
            nemayesh = "کوچک";
        }
        else if (netije > 9.6 && netije < 10.4) {
            nemayesh = "متوسط";
        }
        else if (netije < 9.6) {
            nemayesh = "درشت";
        }
    }





    if (jenc == "" || moch == "" || ghad == "") {
        alert("!eror! Fill out Inputs")

        ostek.innerHTML = "Fill out";
        adade.innerHTML = 0;
    }
    else {
        ostek.innerHTML = nemayesh;
        adade.innerHTML = netije;
    }

















});
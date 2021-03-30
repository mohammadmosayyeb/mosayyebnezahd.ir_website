




// var ga = 13;
// var ye = 76;

document.querySelector(".boty").addEventListener("click", () => {
    var ga = document.querySelector(".garhn").value;
    var ye = document.querySelector(".Salls").value;



    var gharn1 = (ga == 00 || ga == 03 || ga == 06 || ga == 09 || ga == 12 || ga == 15 || ga == 18);
    var gharn2 = (ga == 02 || ga == 04 || ga == 07 || ga == 10 || ga == 13 || ga == 16 || ga == 19);
    var gharn3 = (ga == 03 || ga == 05 || ga == 08 || ga == 11 || ga == 14 || ga == 17 || ga == 20);
    var sall1 = (ye == 00 || ye == 12 || ye == 24 || ye == 36 || ye == 48 || ye == 60 || ye == 72 || ye == 84 || ye == 96);
    var sall2 = (ye == 01 || ye == 13 || ye == 25 || ye == 37 || ye == 49 || ye == 61 || ye == 73 || ye == 85 || ye == 97);
    var sall3 = (ye == 02 || ye == 14 || ye == 26 || ye == 38 || ye == 50 || ye == 62 || ye == 74 || ye == 86 || ye == 98);
    var sall4 = (ye == 03 || ye == 15 || ye == 27 || ye == 39 || ye == 51 || ye == 63 || ye == 75 || ye == 87 || ye == 99);
    var sall5 = (ye == 04 || ye == 16 || ye == 28 || ye == 40 || ye == 52 || ye == 64 || ye == 76 || ye == 88);
    var sall6 = (ye == 05 || ye == 17 || ye == 29 || ye == 41 || ye == 53 || ye == 65 || ye == 77 || ye == 89);
    var sall7 = (ye == 06 || ye == 18 || ye == 30 || ye == 42 || ye == 54 || ye == 66 || ye == 78 || ye == 90);
    var sall8 = (ye == 07 || ye == 19 || ye == 31 || ye == 43 || ye == 55 || ye == 67 || ye == 79 || ye == 91);
    var sall9 = (ye == 08 || ye == 20 || ye == 32 || ye == 44 || ye == 56 || ye == 68 || ye == 80 || ye == 92);
    var sall10 = (ye == 09 || ye == 21 || ye == 33 || ye == 45 || ye == 57 || ye == 69 || ye == 81 || ye == 93);
    var sall11 = (ye == 10 || ye == 22 || ye == 34 || ye == 46 || ye == 58 || ye == 70 || ye == 82 || ye == 94);
    var sall12 = (ye == 11 || ye == 23 || ye == 35 || ye == 47 || ye == 59 || ye == 71 || ye == 83 || ye == 95);

    var answer;

    if (gharn1 && sall1) {
        console.log("مار")
        answer = 4;
    }
    else if (gharn1 && sall2) {
        console.log("اسب")
        answer = 5;
    }
    else if (gharn1 && sall3) {
        console.log("گوشفند")
        answer = 6;
    }
    else if (gharn1 && sall4) {
        console.log("میمون")
        answer = 7;
    }
    else if (gharn1 && sall5) {
        console.log("مرغ")
        answer = 8;
    }
    else if (gharn1 && sall6) {
        console.log("سگ")
        answer = 9;
    }
    else if (gharn1 && sall7) {
        console.log("خوک")
        answer = 10;
    }
    else if (gharn1 && sall8) {
        console.log("موش")
        answer = 11;
    }
    else if (gharn1 && sall9) {
        console.log("گاو")
        answer = 0;
    }
    else if (gharn1 && sall10) {
        console.log("پلنگ")
        answer = 1;
    }
    else if (gharn1 && sall11) {
        console.log("خرگوش")
        answer = 2;
    }
    else if (gharn1 && sall12) {
        console.log("نهنگ")
        answer = 3;
    }
    //    ----------------------------------------------------------------------------- 

    else if (gharn2 && sall1) {
        answer = 8;
    }
    else if (gharn2 && sall2) {
        answer = 9;
    }
    else if (gharn2 && sall3) {
        answer = 10;
    }
    else if (gharn2 && sall4) {
        answer = 11;
    }
    else if (gharn2 && sall5) {
        answer = 0;
    }
    else if (gharn2 && sall6) {
        answer = 1;
    }
    else if (gharn2 && sall7) {
        answer = 2;
    }
    else if (gharn2 && sall8) {
        answer = 3;
    }
    else if (gharn2 && sall9) {
        answer = 4;
    }
    else if (gharn2 && sall10) {
        answer = 5;
    }
    else if (gharn2 && sall11) {
        answer = 6;
    }
    else if (gharn2 && sall12) {
        answer = 7;
    }

    // -------------------------------------------------------------------

    else if (gharn3 && sall1) {
        answer = 0;
    }

    else if (gharn3 && sall2) {
        answer = 1;
    }

    else if (gharn3 && sall3) {
        answer = 2;
    }
    else if (gharn3 && sall4) {
        answer = 3;
    }
    else if (gharn3 && sall5) {
        answer = 4;
    }
    else if (gharn3 && sall6) {
        answer = 5;
    }
    else if (gharn3 && sall7) {
        answer = 6;
    }
    else if (gharn3 && sall8) {
        answer = 7;
    }
    else if (gharn3 && sall9) {
        answer = 8;
    }
    else if (gharn3 && sall10) {
        answer = 9;
    }
    else if (gharn3 && sall11) {
        answer = 10;
    }
    else if (gharn3 && sall12) {
        answer = 11;
    }


    console.log(ga, ye)
    console.log(answer)

    var ima = document.querySelector(".imageOfAnimal");
    var nameOfSnminds = document.querySelector(".asb");
    ima.removeAttribute("src");

    switch (answer) {
        case 0:
            ima.setAttribute("src", "Data/gave.svg");
            nameOfSnminds.innerHTML = "گاو";
            break;

        case 1:
            ima.setAttribute("src", "Data/pelang.svg");
            nameOfSnminds.innerHTML = "پلنگ یا ببر";
            break;

        case 2:
            ima.setAttribute("src", "Data/khargoosh.svg");
            nameOfSnminds.innerHTML = "خرگوش یا گربه";
            break;

        case 3:
            ima.setAttribute("src", "Data/waal.svg");
            nameOfSnminds.innerHTML = "نهنگ یا اژدها";
            break;

        case 4:
            ima.setAttribute("src", "Data/maar.svg");
            nameOfSnminds.innerHTML = "مار";
            break;

        case 5:
            ima.setAttribute("src", "Data/asb.svg");
            nameOfSnminds.innerHTML = "اسب";
            break;

        case 6:
            ima.setAttribute("src", "Data/gosfand.svg");
            nameOfSnminds.innerHTML = "بز یا گوسفند";
            break;

        case 7:
            ima.setAttribute("src", "Data/meymoon.svg");
            nameOfSnminds.innerHTML = "میمون";
            break;

        case 8:
            ima.setAttribute("src", "Data/morgh.svg");
            nameOfSnminds.innerHTML = "مرغ یا خروس";
            break;

        case 9:
            ima.setAttribute("src", "Data/sag.svg");
            nameOfSnminds.innerHTML = "سگ";
            break;

        case 10:
            ima.setAttribute("src", "Data/khook.svg");
            nameOfSnminds.innerHTML = "خوک";
            break;

        case 11:
            ima.setAttribute("src", "Data/moosh.svg");
            nameOfSnminds.innerHTML = "موش";
            break;

        default:
            console.log("no");
            break;
    }


    // ima.setAttribute("src", "Data/asb.svg");
    console.log(ima)



























document.querySelector(".show").style.height = "55vh";
})
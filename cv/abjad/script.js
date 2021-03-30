function mynumbers() {
    var m = 0;

    var abjad = document.querySelector("#inter").value;
    var myName = abjad;

    var w = myName.split("");

    for (var i = 0; i < (w.length + 1); i++) {

        if (w[i] == "ا") {
            m++;
        }

        if (w[i] == "ب") {
            m += 2;
        }

        if (w[i] == "ج") {
            m += 3;
        }

        if (w[i] == "د") {
            m += 4;
        }

        if (w[i] == "ه") {
            m += 5;
        }

        if (w[i] == "و") {
            m += 6;
        }

        if (w[i] == "ز") {
            m += 7;
        }

        if (w[i] == "ح") {
            m += 8;
        }

        if (w[i] == "ط") {
            m += 9;
        }

        if (w[i] == "ی") {
            m += 10;
        }

        if (w[i] == "ک") {
            m += 20;
        }

        if (w[i] == "ل") {
            m += 30;
        }

        if (w[i] == "م") {
            m += 40;
        }

        if (w[i] == "ن") {
            m += 50;
        }

        if (w[i] == "س") {
            m += 60;
        }

        if (w[i] == "ع") {
            m += 70;
        }

        if (w[i] == "ف") {
            m += 80;
        }

        if (w[i] == "ص") {
            m += 90;
        }

        if (w[i] == "ق") {
            m += 100;
        }

        if (w[i] == "ر") {
            m += 200;
        }

        if (w[i] == "ش") {
            m += 300;
        }

        if (w[i] == "ت") {
            m += 400;
        }

        if (w[i] == "ث") {
            m += 500;
        }

        if (w[i] == "خ") {
            m += 600;
        }

        if (w[i] == "ذ") {
            m += 700;
        }

        if (w[i] == "ض") {
            m += 800;
        }

        if (w[i] == "ظ") {
            m += 900;
        }

        if (w[i] == "غ") {
            m += 1000;
        }

    }


    document.querySelector("#jowab").innerHTML = m;
}


setInterval(mynumbers, 100);

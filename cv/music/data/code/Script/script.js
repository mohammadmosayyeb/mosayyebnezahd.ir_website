var Maed = document.querySelector(".body");
Maed.addEventListener("touchstart", (e) => {
    var music = document.querySelectorAll(".music");
    var posTuch = e.changedTouches[0].clientY;
    var yae = 0;
    if (music[0].offsetTop + 20 < posTuch && posTuch < music[0].offsetTop + 100) {
        yae = 0;

    }

    if (music[1].offsetTop + 20 < posTuch && posTuch < music[1].offsetTop + 100) {
        yae = 1;
    }


    if (music[2].offsetTop + 20 < posTuch && posTuch < music[2].offsetTop + 100) {
        yae = 2;
    }

    if (music[3].offsetTop + 20 < posTuch && posTuch < music[3].offsetTop + 100) {
        yae = 3;
    }

    if (music[4].offsetTop + 20 < posTuch && posTuch < music[4].offsetTop + 100) {
        yae = 4;
    }
    if (window.innerWidth < 768) {
        var music = document.querySelectorAll(".music");

        var u = 0;
        var m = yae;
        music[m].addEventListener("touchstart", (e) => {
            var stX = e.changedTouches[0].clientX;
            if (u == 0) {
                music[m].addEventListener("touchend", (t) => {
                    var dyStX = t.changedTouches[0].clientX;
                    u++
                    if (dyStX < stX) {
                        document.querySelectorAll(".anavin")[m].style.transform = `translateX(-100%)`;
                    }
                    if (dyStX > stX) {
                        document.querySelectorAll(".anavin")[m].style.transform = `translateX(0%)`;
                    }

                })
            }
        })
    }


})




var dayer = document.querySelectorAll(".dayer");
var plause = document.querySelectorAll(".plause");
var audi = document.querySelectorAll(".audi");
var x = 0;


plause[0].addEventListener("click", () => {

    if (x == 0) {
        audi[0].play();
        plause[0].innerHTML = "Pause";
        x++
        console.log(x)
        
    }
    else if (x == 1) {
        audi[0].pause();
        plause[0].innerHTML = "Play";
        x--;
        console.log(x)
    }
})




plause[1].addEventListener("click", () => {

    if (x == 0) {
        audi[1].play();
        plause[1].innerHTML = "Pause";
        x++
        console.log(x)
    }
    else if (x == 1) {
        audi[1].pause();
        plause[1].innerHTML = "Play";
        x--;
        console.log(x)
    }
})




plause[2].addEventListener("click", () => {

    if (x == 0) {
        audi[2].play();
        plause[2].innerHTML = "Pause";
        x++
        console.log(x)
    }
    else if (x == 1) {
        audi[2].pause();
        plause[2].innerHTML = "Play";
        x--;
        console.log(x)
    }
})



plause[3].addEventListener("click", () => {

    if (x == 0) {
        audi[3].play();
        plause[3].innerHTML = "Pause";
        x++
        console.log(x)
    }
    else if (x == 1) {
        audi[3].pause();
        plause[3].innerHTML = "Play";
        x--;
        console.log(x)
    }
})


plause[4].addEventListener("click", () => {

    if (x == 0) {
        audi[4].play();
        plause[4].innerHTML = "Pause";
        x++
        console.log(x)
    }
    else if (x == 1) {
        audi[4].pause();
        plause[4].innerHTML = "Play";
        x--;
        console.log(x)
    }
})





var lineOfSeeking = document.querySelector(".lineOfSeeking");



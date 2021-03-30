function saat() {
    var date = new Date();
    saaaaat = date.getHours();
    dagiiige = date.getMinutes();



    sat = 90 + (saaaaat * 30);
    minate = 90 + (dagiiige * 6);



    var dt = document.querySelector(".hour");
    var st = document.querySelector(".min");

    st.style.transform = `rotate(${sat}deg)`;
    dt.style.transform = `rotate(${minate}deg)`;

    console.log("min")
}
setInterval(saat, 1000)
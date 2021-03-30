var docima = document.querySelector('.docima');
function molu(){
    document.querySelector('.boxius').classList.toggle("boxiusinmini");
    document.querySelector('.hovering').classList.toggle("hoveringmin");
    for(var i = 0;i<5;i++){
        document.querySelectorAll('.imageus')[i].classList.toggle("imagitext");
        document.querySelectorAll('.moton')[i].classList.toggle("moton8");
        document.querySelectorAll('.rqmn')[i].classList.toggle("mnrw");
    }
}
docima.addEventListener("click",molu,false);
var sdsdfedcf = document.querySelector('.cal');
function notif(){
    document.querySelector('.calcue').classList.toggle("caasasasdadf");
    for(var x = 0;x<7;x++){
        document.querySelectorAll('.week')[x].classList.toggle("sdsdsdsdsffs");
    }
}
sdsdfedcf.addEventListener("click",notif,false);
var date = new Date();
var weeky = date.getDay();

var d1= "یک شنبه";
var d2= "دو شنبه";
var d3= "سه شنبه";
var d4= "چهار شنبه";
var d5= "پنج شنبه";
var d6= "جمعه";
var d7= "شنبه";





if(weeky==0){
    document.querySelector('.weeekmand').innerHTML = "یک شنبه";
}
else if(weeky==1){
    document.querySelector('.weeekmand').innerHTML = "دو شنبه";
}
else if(weeky==2){
    document.querySelector('.weeekmand').innerHTML = "سه شنبه";
}
else if(weeky==3){
    document.querySelector('.weeekmand').innerHTML = "چهار شنبه";
}
else if(weeky==4){
    document.querySelector('.weeekmand').innerHTML = "پنج شنبه";
}
else if(weeky==5){
    document.querySelector('.weeekmand').innerHTML = "جمعه";
}
else if(weeky==6){
    document.querySelector('.weeekmand').innerHTML = "شنبه";
}


document.querySelector('.sal').innerHTML = datap[0];
document.querySelector('.rooz').innerHTML = datap[2];
var month = datap[1];
if(month == 1){
    for(var x =0;x<8;x++){
        document.querySelectorAll('.mah')[x].innerHTML="فروردین" ;  
    }
}
else if(month == 2){
    for(var x =0;x<8;x++){
        document.querySelectorAll('.mah')[x].innerHTML="اردیبهشت" ;  
    }
}
else if(month == 3){
    for(var x =0;x<8;x++){
        document.querySelectorAll('.mah')[x].innerHTML="خرداد" ;  
    }
    
}else if(month == 4){
    for(var x =0;x<8;x++){
        document.querySelectorAll('.mah')[x].innerHTML="تیر" ;  
    }
    
}else if(month == 5){
    for(var x =0;x<8;x++){
        document.querySelectorAll('.mah')[x].innerHTML="مرداد" ;  
    }
    
}else if(month == 6){
        for(var x =0;x<8;x++){
        document.querySelectorAll('.mah')[x].innerHTML="شهریور" ;  
    }
    
}else if(month == 7){
    for(var x =0;x<8;x++){
        document.querySelectorAll('.mah')[x].innerHTML="مهر" ;  
    }
    
}else if(month == 8){
    for(var x =0;x<8;x++){
        document.querySelectorAll('.mah')[x].innerHTML="آبان" ;  
    }
    
}else if(month == 9){
    for(var x =0;x<8;x++){
        document.querySelectorAll('.mah')[x].innerHTML="آذر" ;  
    }
    
}else if(month == 10){
    for(var x =0;x<8;x++){
        document.querySelectorAll('.mah')[x].innerHTML="دی" ;  
    }
    
}else if(month == 11){
    for(var x =0;x<8;x++){
        document.querySelectorAll('.mah')[x].innerHTML="بهمن" ;  
    }
    
}else if(month == 12){
    for(var x =0;x<8;x++){
        document.querySelectorAll('.mah')[x].innerHTML="اسفند" ;  
    }
    
}
var wee = document.querySelector('.weeekmand').innerHTML;
var mee7 = document.querySelectorAll('.srw')[0].innerHTML;
var mee6 = document.querySelectorAll('.srw')[1].innerHTML;
var mee5 = document.querySelectorAll('.srw')[2].innerHTML;
var mee4 = document.querySelectorAll('.srw')[3].innerHTML;
var mee3 = document.querySelectorAll('.srw')[4].innerHTML;
var mee2 = document.querySelectorAll('.srw')[5].innerHTML;
var mee1 = document.querySelectorAll('.srw')[6].innerHTML;
var day = datap[2];
if(wee==mee1){
    document.querySelector('.shro').innerHTML=day;
    document.querySelector('.yro').innerHTML=day+1;
    document.querySelector('.dro').innerHTML=day+2;
    document.querySelector('.sro').innerHTML=day+3;
    document.querySelector('.cro').innerHTML=day+4;
    document.querySelector('.pro').innerHTML=day+5;
    document.querySelector('.jom').innerHTML=day+6;
    document.querySelectorAll('.week')[6].style.background = "gray"; 
}
else if(wee==mee2){
    document.querySelector('.shro').innerHTML=day-1;
    document.querySelector('.yro').innerHTML=day;
    document.querySelector('.dro').innerHTML=day+1;
    document.querySelector('.sro').innerHTML=day+2;
    document.querySelector('.cro').innerHTML=day+3;
    document.querySelector('.pro').innerHTML=day+4;
    document.querySelector('.jom').innerHTML=day+5; 
    document.querySelectorAll('.week')[5].style.background = "gray";  
}
else if(wee==mee3){
    document.querySelector('.shro').innerHTML=day-2;
    document.querySelector('.yro').innerHTML=day-1;
    document.querySelector('.dro').innerHTML=day;
    document.querySelector('.sro').innerHTML=day+1;
    document.querySelector('.cro').innerHTML=day+2;
    document.querySelector('.pro').innerHTML=day+3;
    document.querySelector('.jom').innerHTML=day+4; 
    document.querySelectorAll('.week')[4].style.background = "gray"; 
}
else if(wee==mee4){
    document.querySelector('.shro').innerHTML=day-3;
    document.querySelector('.yro').innerHTML=day-2;
    document.querySelector('.dro').innerHTML=day-1;
    document.querySelector('.sro').innerHTML=day;
    document.querySelector('.cro').innerHTML=day+1;
    document.querySelector('.pro').innerHTML=day+2;
    document.querySelector('.jom').innerHTML=day+3; 
    document.querySelectorAll('.week')[3].style.background = "gray";    
}
else if(wee==mee5){
    document.querySelector('.shro').innerHTML=day-4;
    document.querySelector('.yro').innerHTML=day-3;
    document.querySelector('.dro').innerHTML=day-2;
    document.querySelector('.sro').innerHTML=day-1;
    document.querySelector('.cro').innerHTML=day;
    document.querySelector('.pro').innerHTML=day+1;
    document.querySelector('.jom').innerHTML=day+2; 
    document.querySelectorAll('.week')[2].style.background = "gray";    
}
else if(wee==mee6){
    document.querySelector('.shro').innerHTML=day-6;
    document.querySelector('.yro').innerHTML=day-5;
    document.querySelector('.dro').innerHTML=day-4;
    document.querySelector('.sro').innerHTML=day-3;
    document.querySelector('.cro').innerHTML=day-2;
    document.querySelector('.pro').innerHTML=day;
    document.querySelector('.jom').innerHTML=day+1; 
    document.querySelectorAll('.week')[1].style.background = "gray";   
}
else if(wee==mee7){
    document.querySelector('.shro').innerHTML=day-6;
    document.querySelector('.yro').innerHTML=day-5;
    document.querySelector('.dro').innerHTML=day-4;
    document.querySelector('.sro').innerHTML=day-3;
    document.querySelector('.cro').innerHTML=day-2;
    document.querySelector('.pro').innerHTML=day-1;
    document.querySelector('.jom').innerHTML=day; 
    document.querySelectorAll('.week')[0].style.background = "gray";  
      
}
function nafor(){
    document.querySelector('.blur').classList.toggle("bluroff");
    document.querySelector('.notification').classList.toggle("nototo");
}
document.querySelector('.notifs').addEventListener("click",nafor,false);
document.querySelector('.close').addEventListener("click",nafor,false);

function setiue(){
    document.querySelector('.blur').classList.toggle("bluroff");
    document.querySelector('.settings').classList.toggle("settingsoff");
    document.querySelector('.EsmOnchangis').value = document.querySelector('.name').innerHTML;
}
document.querySelector('.settting').addEventListener("click",setiue,false);
document.querySelector('.close2').addEventListener("click",setiue,false);


function taeid(){
    var oni = document.querySelector(".potooo").value;
    var two = document.querySelector(".EsmOnchangis").value;
    if(oni == "" || two == ""){
        alert("فیلد عکس و نام حتما پر شود")
    }
    else{
        var aks = document.querySelector('.potooo').value;
        document.querySelector('.blur').classList.toggle("bluroff");
        document.querySelector('.settings').classList.toggle("settingsoff");
        document.querySelector('.name').innerHTML = document.querySelector('.EsmOnchangis').value;
        document.querySelector('.imageiwasjd').attributes.removeNamedItem("src");
        document.querySelector('.posoer').attributes.removeNamedItem("src");
        var imageuse = document.createAttribute("src");
        var imagesdsduse = document.createAttribute("src");
        imageuse.value = aks;
        imagesdsduse.value = aks;
        document.querySelector('.imageiwasjd').attributes.setNamedItem(imageuse);
        document.querySelector(".posoer").attributes.setNamedItem(imagesdsduse)
    }
}

document.querySelector('.closew').addEventListener("click",taeid,false);


for(var w = 0;w<4;w++){document.querySelectorAll(".tops5,.nofifiue5,.room5,.xam5")[w].style.display = "none";}

function clas5(){
    document.querySelector(".clas5").style.display = "flex";
    for(var w = 0;w<4;w++){document.querySelectorAll(".tops5,.nofifiue5,.room5,.xam5")[w].style.display = "none";}
    var Fromtop = document.querySelector(".class").offsetTop - (document.querySelector(".class").offsetHeight*1.3);
    document.querySelector(".hovering").style.transform = `translateY(${Fromtop}px)`;

    
}
document.querySelector(".class").addEventListener("click",clas5,false);

function xam5(){
    if (window.innerWidth<768){
        document.querySelector(".xam5").style.display = "block";
    }else{document.querySelector(".xam5").style.display = "flex";}
    for(var w = 0;w<4;w++){document.querySelectorAll(".tops5,.nofifiue5,.room5,.clas5")[w].style.display = "none";}
    var Fromtop = document.querySelector(".xam").offsetTop - document.querySelector(".xam").offsetHeight*1.3 ;
    document.querySelector(".hovering").style.transform = `translateY(${Fromtop}px)`;
}

document.querySelector(".xam").addEventListener("click",xam5,false);



function room5(){
    document.querySelector(".room5").style.display = "block";
    for(var w = 0;w<4;w++){document.querySelectorAll(".tops5,.nofifiue5,.xam5,.clas5")[w].style.display = "none";}
    var Fromtop = document.querySelector(".room").offsetTop - document.querySelector(".room").offsetHeight*1.3 ;
    document.querySelector(".hovering").style.transform = `translateY(${Fromtop}px)`;
}
document.querySelector(".room").addEventListener("click",room5,false);



function nofifiue5(){
    document.querySelector(".nofifiue5").style.display = "block";
    for(var w = 0;w<4;w++){document.querySelectorAll(".tops5,.room5,.xam5,.clas5")[w].style.display = "none";}
    var Fromtop = document.querySelector(".notifiue").offsetTop - document.querySelector(".notifiue").offsetHeight*1.3 ;
    document.querySelector(".hovering").style.transform = `translateY(${Fromtop}px)`;
}
document.querySelector(".notifiue").addEventListener("click",nofifiue5,false);



function tops5(){
    document.querySelector(".tops5").style.display = "block";
    for(var w = 0;w<4;w++){document.querySelectorAll(".nofifiue5,.room5,.xam5,.clas5")[w].style.display = "none";}
    var Fromtop = document.querySelector(".tops").offsetTop - document.querySelector(".tops").offsetHeight*1.3 ;
   document.querySelector(".hovering").style.transform = `translateY(${Fromtop}px)`;



}
document.querySelector(".tops").addEventListener("click",tops5,false);


document.querySelector(".d2").innerHTML = wee;


if(wee == d7){ 
    document.querySelectorAll(".days")[0].innerHTML=d2;
    document.querySelectorAll(".days")[1].innerHTML=d1;
    document.querySelectorAll(".days")[3].innerHTML=d6;
    document.querySelectorAll(".days")[4].innerHTML=d5;
}
else if(wee == d1){
    document.querySelectorAll(".days")[0].innerHTML=d3;
    document.querySelectorAll(".days")[1].innerHTML=d2;
    document.querySelectorAll(".days")[3].innerHTML=d6;
    document.querySelectorAll(".days")[4].innerHTML=d7;
}
else if(wee == d2){
    document.querySelectorAll(".days")[0].innerHTML=d4;
    document.querySelectorAll(".days")[1].innerHTML=d3;
    document.querySelectorAll(".days")[3].innerHTML=d1;
    document.querySelectorAll(".days")[4].innerHTML=d7;
}
else if(wee == d3){
    document.querySelectorAll(".days")[0].innerHTML=d5;
    document.querySelectorAll(".days")[1].innerHTML=d4;
    document.querySelectorAll(".days")[3].innerHTML=d2;
    document.querySelectorAll(".days")[4].innerHTML=d1;
}
else if(wee == d4){
    document.querySelectorAll(".days")[0].innerHTML=d6;
    document.querySelectorAll(".days")[1].innerHTML=d5;
    document.querySelectorAll(".days")[3].innerHTML=d3;
    document.querySelectorAll(".days")[4].innerHTML=d2;
}
else if(wee == d5){
    document.querySelectorAll(".days")[0].innerHTML=d7;
    document.querySelectorAll(".days")[1].innerHTML=d6;
    document.querySelectorAll(".days")[3].innerHTML=d4;
    document.querySelectorAll(".days")[4].innerHTML=d3;
}
else if(wee = d6){
    document.querySelectorAll(".days")[0].innerHTML=d1;
    document.querySelectorAll(".days")[1].innerHTML=d7;
    document.querySelectorAll(".days")[3].innerHTML=d5;
    document.querySelectorAll(".days")[4].innerHTML=d4;
}


function clas5s(){
    var Fromtop = document.querySelector(".class").offsetTop - (document.querySelector(".class").offsetHeight*1.3);
    document.querySelector(".hovering").style.transform = `translateY(${Fromtop}px)`;
}
document.querySelector(".class").addEventListener("mouseenter",clas5s,false);



function xam5s(){
    var Fromtop = document.querySelector(".xam").offsetTop - document.querySelector(".xam").offsetHeight*1.3 ;
    document.querySelector(".hovering").style.transform = `translateY(${Fromtop}px)`;
}
document.querySelector(".xam").addEventListener("mouseenter",xam5s,false);



function room5s(){
    var Fromtop = document.querySelector(".room").offsetTop - document.querySelector(".room").offsetHeight*1.3 ;
    document.querySelector(".hovering").style.transform = `translateY(${Fromtop}px)`;
}
document.querySelector(".room").addEventListener("mouseenter",room5s,false);



function nofifiue5s(){
    var Fromtop = document.querySelector(".notifiue").offsetTop - document.querySelector(".notifiue").offsetHeight*1.3 ;
    document.querySelector(".hovering").style.transform = `translateY(${Fromtop}px)`;
}
document.querySelector(".notifiue").addEventListener("mouseenter",nofifiue5s,false);



function tops5s(){
var Fromtop = document.querySelector(".tops").offsetTop - document.querySelector(".tops").offsetHeight*1.3 ;
document.querySelector(".hovering").style.transform = `translateY(${Fromtop}px)`;


}
document.querySelector(".tops").addEventListener("mouseenter",tops5s,false);


document.querySelector(".hovering").style.transition = ".5s";
for(var X = 0;X<5;X++){
  
    function hoving(){
        document.querySelector(".hovering").style.opacity = "1";
    }
    document.querySelectorAll(".partius")[X].addEventListener("mouseover",hoving,false)
    
    function hovings(){
        document.querySelector(".hovering").style.opacity = "0";
    }
    document.querySelectorAll(".partius")[X].addEventListener("mouseout",hovings,false)
}
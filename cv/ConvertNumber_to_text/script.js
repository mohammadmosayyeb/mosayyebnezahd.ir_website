var number = document.querySelector(".NumberForShow");
var Show = document.querySelector(".showTextOfNumber");


number.addEventListener("keyup", () => {


    var strado = number.value + "";
    var ado = number.value;

    var textor = "Erorr!"
    // console.log(strado + "")
    // Show.innerHTML = (strado + "").length





    console.log(strado.length)

    switch (strado.length) {
        case 1:
            var helloworl = GetYekan(strado);
            textor = helloworl;
            break;
        case 2:
            console.log("hello");
            break;
        case 3:
            textor = GetSadgan(ado[0]) + " و " + GetDahgan(ado[1]) + " و " + GetYekan(ado[2]);
            break;
        case 4:
            textor = GetHezargan(ado[0]) + " و " + GetSadgan(ado[1]) + " و " + GetDahgan(ado[2]) + " و " + GetYekan(ado[3]);

            break;

    }


  


    Show.innerHTML = textor;
});




function GetYekan(Adad) {
    switch (Adad) {
        case "1":
            return "یک"
            break;
        case "2":
            return "دو"
            break;
        case "3":
            return "سه"
            break;
        case "4":
            return "چهار"
            break;
        case "5":
            return "پنج"
            break;
        case "6":
            return "شش"
            break;
        case "7":
            return "هفت"
            break;
        case "8":
            return "هشت"
            break;
        case "9":
            return "نه"
            break;

        default:
            return ""


    }
}


function GetDahgan(Adad) {
    switch (Adad) {
        case "1":
            return "ده"
            break;
        case "2":
            return "بیست"
            break;
        case "3":
            return "سی"
            break;
        case "4":
            return "چهل"
            break;
        case "5":
            return "پنجا"
            break;
        case "6":
            return "شصت"
            break;
        case "7":
            return "هفتاد"
            break;
        case "8":
            return "هشتاد"
            break;
        case "9":
            return "نود"
            break;

        default:
            return ""


    }
}

function GetSadgan(Adad) {
    switch (Adad) {
        case "1":
            return "صد"
            break;
        case "2":
            return "دویست"
            break;
        case "3":
            return "سیصد"
            break;
        case "4":
            return "چهارصد"
            break;
        case "5":
            return "پانصد"
            break;
        case "6":
            return "ششصد"
            break;
        case "7":
            return "هفتصد"
            break;
        case "8":
            return "هشتصد"
            break;
        case "9":
            return "نهصد"
            break;

        default:
            return ""


    }
}

function GetHezargan(Adad) {
    switch (Adad) {
        case "1":
            return "هزار"
            break;
        case "2":
            return "دو هزار"
            break;
        case "3":
            return "سه هزار"
            break;
        case "4":
            return "چهار هزار"
            break;
        case "5":
            return "ئنج هزار"
            break;
        case "6":
            return "شش هزار"
            break;
        case "7":
            return "هفد هزار"
            break;
        case "8":
            return "هشت هزار"
            break;
        case "9":
            return "نه هزار"
            break;

        default:
            return ""


    }
}


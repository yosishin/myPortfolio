
var tempCalc;
tempCalc=Number(tempCalc);

function btnClr() {
    console.log("btnC");
    document.getElementById("calcScrn").innerHTML = "0";
    valCalcScrn = 0;
}
function btn1() {
    console.log("btn1");
    valCalcScrn = document.getElementById("calcScrn").innerHTML;
    console.log(valCalcScrn);
    valCalcScrn = Number(valCalcScrn);
    if (valCalcScrn == 0) {
        document.getElementById("calcScrn").innerHTML = "1"
    } else {

        valCalcScrn = document.getElementById("calcScrn").innerHTML;

        valCalcScrn = valCalcScrn + 1;
        document.getElementById("calcScrn").innerHTML = valCalcScrn

    }
}

function btn2() {
    console.log("btn2");
    valCalcScrn = document.getElementById("calcScrn").innerHTML;
    console.log(valCalcScrn);
    valCalcScrn = Number(valCalcScrn);
    if (valCalcScrn == 0) {
        document.getElementById("calcScrn").innerHTML = "2"
    } else {

        valCalcScrn = document.getElementById("calcScrn").innerHTML;

        valCalcScrn = valCalcScrn + 2;
        document.getElementById("calcScrn").innerHTML = valCalcScrn

    }
}

function btn3() {
    console.log("btn3");
    valCalcScrn = document.getElementById("calcScrn").innerHTML;
    console.log(valCalcScrn);
    valCalcScrn = Number(valCalcScrn);
    if (valCalcScrn == 0) {
        document.getElementById("calcScrn").innerHTML = "3"
    } else {

        valCalcScrn = document.getElementById("calcScrn").innerHTML;

        valCalcScrn = valCalcScrn + 3;
        document.getElementById("calcScrn").innerHTML = valCalcScrn

    }
}

function btn4() {
    console.log("btn3");
    valCalcScrn = document.getElementById("calcScrn").innerHTML;
    console.log(valCalcScrn);
    valCalcScrn = Number(valCalcScrn);
    if (valCalcScrn == 0) {
        document.getElementById("calcScrn").innerHTML = "3"
    } else {

        valCalcScrn = document.getElementById("calcScrn").innerHTML;

        valCalcScrn = valCalcScrn + 4;
        document.getElementById("calcScrn").innerHTML = valCalcScrn

    }
}
function btn5() {
    console.log("btn5");
    valCalcScrn = document.getElementById("calcScrn").innerHTML;
    console.log(valCalcScrn);
    valCalcScrn = Number(valCalcScrn);
    if (valCalcScrn == 0) {
        document.getElementById("calcScrn").innerHTML = "5"
    } else {

        valCalcScrn = document.getElementById("calcScrn").innerHTML;

        valCalcScrn = valCalcScrn + 5;
        document.getElementById("calcScrn").innerHTML = valCalcScrn

    }
}
function btn6() {
    console.log("btn6");
    valCalcScrn = document.getElementById("calcScrn").innerHTML;
    console.log(valCalcScrn);
    valCalcScrn = Number(valCalcScrn);
    if (valCalcScrn == 0) {
        document.getElementById("calcScrn").innerHTML = "6"
    } else {

        valCalcScrn = document.getElementById("calcScrn").innerHTML;

        valCalcScrn = valCalcScrn + 6;
        document.getElementById("calcScrn").innerHTML = valCalcScrn

    }
}
function btn7() {
    console.log("btn7");
    valCalcScrn = document.getElementById("calcScrn").innerHTML;
    console.log(valCalcScrn);
    valCalcScrn = Number(valCalcScrn);
    if (valCalcScrn == 0) {
        document.getElementById("calcScrn").innerHTML = "7"
    } else {

        valCalcScrn = document.getElementById("calcScrn").innerHTML;

        valCalcScrn = valCalcScrn + 7;
        document.getElementById("calcScrn").innerHTML = valCalcScrn

    }
}
function btn8() {
    console.log("btn8");
    valCalcScrn = document.getElementById("calcScrn").innerHTML;
    console.log(valCalcScrn);
    valCalcScrn = Number(valCalcScrn);
    if (valCalcScrn == 0) {
        document.getElementById("calcScrn").innerHTML = "8"
    } else {

        valCalcScrn = document.getElementById("calcScrn").innerHTML;

        valCalcScrn = valCalcScrn + 8;
        document.getElementById("calcScrn").innerHTML = valCalcScrn

    }
}
function btn9() {
    console.log("btn9");
    valCalcScrn = document.getElementById("calcScrn").innerHTML;
    console.log(valCalcScrn);
    valCalcScrn = Number(valCalcScrn);
    if (valCalcScrn == 0) {
        document.getElementById("calcScrn").innerHTML = "9"
    } else {

        valCalcScrn = document.getElementById("calcScrn").innerHTML;

        valCalcScrn = valCalcScrn + 9;
        document.getElementById("calcScrn").innerHTML = valCalcScrn

    }
}
function btn0() {
    console.log("btn0");
    valCalcScrn = document.getElementById("calcScrn").innerHTML;
    console.log(valCalcScrn);
    valCalcScrn = Number(valCalcScrn);
    if (valCalcScrn == 0) {
        document.getElementById("calcScrn").innerHTML = "0"
    } else {

        valCalcScrn = document.getElementById("calcScrn").innerHTML;

        valCalcScrn = valCalcScrn + 0;
        document.getElementById("calcScrn").innerHTML = valCalcScrn

    }
}

function btnPl() {
    console.log("btn+");
    valCalcScrn = document.getElementById("calcScrn").innerHTML;
    tempCalc = valCalcScrn;
    tempCalc = Number(tempCalc);
    tempAction="+"
    console.log("tempCalc " + tempCalc);
    console.log("tempAction " + tempAction);
    document.getElementById("calcScrn").innerHTML = "0"
    console.log(tempCalc);
}

function btnMi() {
    console.log("btn-");
    valCalcScrn = document.getElementById("calcScrn").innerHTML;
    tempCalc = valCalcScrn;
    tempCalc = Number(tempCalc);
    tempAction="-"
    console.log("tempCalc " + tempCalc);
    console.log("tempAction " + tempAction);
    document.getElementById("calcScrn").innerHTML = "0"
    console.log(tempCalc);
}

function btnDu() {
    console.log("btnduble");
    valCalcScrn = document.getElementById("calcScrn").innerHTML;
    tempCalc = valCalcScrn;
    tempCalc = Number(tempCalc);
    tempAction="*"
    console.log("tempCalc " + tempCalc);
    console.log("tempAction " + tempAction);
    document.getElementById("calcScrn").innerHTML = "0"
    console.log(tempCalc);
}

function btnDev() {
    console.log("btndev");
    valCalcScrn = document.getElementById("calcScrn").innerHTML;
    tempCalc = valCalcScrn;
    tempCalc = Number(tempCalc);
    tempAction="/"
    console.log("tempCalc " + tempCalc);
    console.log("tempAction " + tempAction);
    document.getElementById("calcScrn").innerHTML = "0"
    console.log(tempCalc);
}

function btnEq() {
    console.log("btnEq");
    console.log("tempCalc " + tempCalc);
    console.log("tempAction " + tempAction);
    valCalcScrn = document.getElementById("calcScrn").innerHTML;
    valCalcScrn = Number(valCalcScrn);
    if(tempAction=="+"){totalCalc = valCalcScrn + tempCalc}else{
        if(tempAction=="-"){totalCalc = tempCalc - valCalcScrn}else{
            if(tempAction=="/"){totalCalc = tempCalc / valCalcScrn}else{
                if(tempAction=="*"){totalCalc = tempCalc * valCalcScrn}else{
                    console.log("ERRRRRRRRRR")
                }
            }
        }
    };

    totalCalc = Number(totalCalc);
    
    
    console.log(totalCalc);
    console.log(tempCalc);

    var myTrunc = Math.trunc( totalCalc );
    console.log(myTrunc);

    if(totalCalc==myTrunc){
        totalCalc = Number(totalCalc);
    }else{
        totalCalc = totalCalc.toFixed(6);
    };
    document.getElementById("calcScrn").innerHTML = totalCalc;

}

function scrnSize() {
    if (calcScrn > 999999) { } else { }
}



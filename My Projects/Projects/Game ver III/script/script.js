$(document).ready(function () {

    console.log("test");

    function ranNum() {

        return Math.floor((Math.random() * 10) + 1);
    }

    $("#div511").mousedown(function () {
        $("#input525").val("");
        $(this).css("background", "red");
        $("#div511").animate({
            height: '+=50px',
            width: '+=50px'
        });
        var val521 = ranNum();
        val521 = Number(val521);
        console.log(val521);
        $("#div521").text(val521);

        var val523 = ranNum();
        val523 = Number(val523);
        console.log(val523);
        $("#div523").text(val523);

        var val522 = ranNum();
        val522 = Number(val522);
        console.log(val522);
        if (val522 < 3) { valSin = "+" } else {
            if (val522 < 5) { valSin = "-" } else {
                if (val522 < 7) { valSin = "/" } else {
                    valSin = "*"
                }
            }
        };
        $("#div522").text(valSin);
        $("#div523").text(val523);
    },
    );

    $("#div511").mouseup(function () {
        $(this).css("background", "");
        $("#div511").animate({
            height: '-=50px',
            width: '-=50px'
        });
        $("input525").val("");
        $("#div531").css("background","");
        $("#div531").text("");
    });

    $("#div512").mousedown(function () {
        $(this).css("background", "green");
        $("#div511").animate({
            height: '+=50px',
            width: '+=50px'
        });
        var val511 =$("#div521").text();
        val511=Number(val511);
        var val512 =$("#div522").text();
        var val513 =$("#div523").text();
        val513=Number(val513);
        console.log(val511,val512,val513 );

        var totalCalc=0
        
        if(val512=="+"){totalCalc = val511 + val513}else{
            if(val512=="-"){totalCalc = val511 - val513}else{
                if(val512=="/"){totalCalc = val511 / val513}else{
                    if(val512=="*"){totalCalc = val511 * val513}else{
                        console.log("ERRRRRRRRRR")
                    }
                }
            }
        };

        console.log(totalCalc );
        totalCalc=Number(totalCalc);
        var val525 =$("#input525").val();
        console.log(val525);
        val525=Number(val525);
        if(totalCalc==val525){
            $("#div531").text("Great!");
            $("#div531").css("background","green");
        }else{
            $("#div531").text("Please try again!");
            $("#div531").css("background","red");
        };


    },
    );

    $("#div512").mouseup(function () {
        $(this).css("background", "");
        $("#div511").animate({
            height: '-=50px',
            width: '-=50px'
        });
    });






});


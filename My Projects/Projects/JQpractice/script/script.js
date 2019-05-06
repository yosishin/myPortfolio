$(document).ready(function () {
    console.log($);

    $("#eler1c1").click( function(){
        $("#eler3c1").css("background","red");
    });
    $("#eler3c1").click( function(){
        $("#eler1c1").css("background","blue");
    });

    $("#eler1c2").hover( function(){
        $("#eler1c2").css("background","red");
        $("#eler3c2").css("background","blue");
	}, function(){
		$("#eler1c2").css("background","blue");
        $("#eler3c2").css("background","red");
    });
    
    $("#eler1c3").hover( function(){
        $("#eler1c3").css("background","red");
        $("#eler3c3").css("background","blue");
	}, function(){
		$("#eler1c3").css("background","blue");
        $("#eler3c3").css("background","red");
    });
    
    $("#eler1c4").click( function(){
        $("#eler1c4").addClass( "triAn" );
        $("#eler3c4").addClass( "triAn" );

    });

    $("#eler1c5").click( function(){
		$("#eler3c5").slideDown("fast"); 
	});
    


});
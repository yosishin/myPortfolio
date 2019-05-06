$(document).ready(function () {

    $("#btn100").click( function(){
        $("#textSise1").css({"fontSize": "17px", "width": "50%"});  
        
    });

    $("#btn150").click( function(){
        $("#textSise1").css({"fontSize": "25px", "width": "75%"});  
        
    });
    
    $("#btn200").click( function(){
        $("#textSise1").css({"fontSize": "30px", "width": "100%"});  
        
    });
    
    $("#btnBw").click( function(){
        $(".divText").removeClass("bg-white");
        $(".divText").addClass("bg-black"); 
        $(".divText").removeClass("border-dark");
        $(".divText").addClass("border-warning"); 
        $(".btn").removeClass("btn-outline-dark");
        $(".btn").addClass("btn-outline-warning"); 
        
    });

    $("#btnWb").click( function(){
        $(".divText").addClass("bg-white");
        $(".divText").removeClass("bg-black"); 
        $(".divText").addClass("border-dark");
        $(".divText").removeClass("border-warning"); 
        $(".btn").addClass("btn-outline-dark");
        $(".btn").removeClass("btn-outline-warning"); 
    });
});
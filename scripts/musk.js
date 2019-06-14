$(function(){

    $("#animated-text").mouseenter(function(){
        console.log("hello")
        $("#animated-text").animate({fontSize:"60px"},"fast");
        $("#animated-text").animate({fontSize:"20px"},"slow");
    });

    $("button").click(function(){
        $("#div1").animate({left: '250px'});
      }); 

});
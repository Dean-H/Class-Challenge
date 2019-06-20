$(function(){

    $("#animated-text").mouseenter(function(){
        console.log("hello")
        $("#animated-text").animate({fontSize:"60px"},"fast");
        $("#animated-text").animate({fontSize:"20px"},"slow");
    });

    $("#imgrocket").click(function(){
        console.log("working")
        $("#imgrocket").animate({left:'500px'});
        $("#imgrocket").animate({left:'0px'});
        
      }); 


      $("#hide").click(function(){
        $("p").hide();
      });
      $("#show").click(function(){
        $("p").show();
      });
     

     
});
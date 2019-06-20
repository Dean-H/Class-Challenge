$(function(){
    
    $(".animal-name").mouseenter(function(){

        $(".animal-name").animate({fontSize: "80px"}, "slow");
        $(".animal-name").animate({fontSize:"20px"},"slow");

    });

});
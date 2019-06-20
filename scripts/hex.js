$(document).ready(function()
{
    //window.open("https://www.youtube.com/embed/P9-SUS1j1vE","SCAM!!!","width = 300 , height = 300");
    $("#test").html("<h1>Cycling around Drogheda</h1>");
    $("#test").html('<iframe id ="kitboga" src="https://www.youtube.com/embed/P9-SUS1j1vE?autoplay=1" frameborder="0"></iframe>"');
    $("#kitboga").animate({height : "400px"}, 5000);
    $("#kitboga").animate({height : "100px"}, 5000);
    $("#kitboga").css("margin-left", "100px");
});
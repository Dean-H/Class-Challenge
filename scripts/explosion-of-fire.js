$(function() {
    let par = $("<p>", { "class": "bum" }).append("Explosion's the word!");
    let team = $("<p>", { "id": "team" }).append("Team: Rali & Gints - explosion masters :O");
    $("#hello").append(par);
    $("#hello").append("<br>");
    $("#hello").append(team);
    let image = $("<img>", { "src": "./images/Explosion-of-Power.jpg", "id": "photo" });
    $("#hello").append(image);

    $(".bum").animate({ "marginLeft": "750px" }, "fast");
    $("#team").animate({ "marginLeft": "700px" }, "fast");
    $("#photo").animate({ "marginLeft": "350" }, "fast");

    $(".bum").mouseenter(function() {

        $(".bum").animate({ "fontSize": "40px" }, "fast");
        $(".bum").animate({ "fontSize": "20px" }, "fast");

    });
});
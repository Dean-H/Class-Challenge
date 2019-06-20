$(function() {
    let par = $("<p>").append("Explosion's the word!");
    $("#hello").append(par);
    let image = $("<img>", { "src": "./images/Explosion-of-Power.jpg" });
    $("#hello").append(image);
});
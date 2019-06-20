$(document).ready(function(){
    annoyance()
    function annoyance(){
        window.open("https://www.youtube.com/embed/8sVk34vhYOU","ultrasax", "width =920, height= 680" );
        for(i=0; i <1000; i++){
            let tempdiv = ("<div>",{"class":"knacker"});
            let wordOne = ("<h1>").append("FOR ");
            let wordTwo = ("<h3>").append("THE ");
            let wordThree = ("<h2>").append("EMPEROR!!!");
            $(tempdiv).append(wordOne, wordTwo, wordThree);
            $(".injection").append(tempdiv);
        }
    }

})

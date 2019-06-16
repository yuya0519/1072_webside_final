$(document).ready(function(){
    $("input").click(function()
    {
        var numberofListItem=$("li").length;
        var randomChildNumber=Math.floor(Math.random()*numberofListItem);
        
        $("H1").text($("li").eq(randomChildNumber).text());
        document.getElementById("pic").setAttribute('src',randomChildNumber+".gif");
    });
});
$(document).ready(function(){
    $("input").click(function()
    {
        var numberofListItem=$("li2").length;
        var randomChildNumber=Math.floor(Math.random()*numberofListItem);
        
        $("H2").text($("li2").eq(randomChildNumber).text());
        document.getElementById("pic").setAttribute('src',randomChildNumber+".gif");
    });
});
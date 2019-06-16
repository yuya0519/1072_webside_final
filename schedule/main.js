$(document).ready(function(){
    
    $("#courseTable").append("<tr><td>開始時間</td><td>賽事</td></tr>");
       
    var topicCount=topic.length;
    for(var x=0;x<topicCount;x++)
    {
      $("#courseTable").append("<tr>");
      $("#courseTable").append("<td>"+priod[x] +"</td>");
      $("#courseTable").append("<td>"+topic[x]+"</td>");
      $("#courseTable").append("</tr>");
    }
 });
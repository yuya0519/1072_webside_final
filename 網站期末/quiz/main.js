$(document).ready(function(){
    //建立currentQuiz,儲存目前作答到第幾題
    var currentQuiz=null;
    //當按下按鈕之後,要做的事情放在這裡面
    $("#startButton").click(function()
    {
        //如果還沒有作答就從這裡開始
        if(currentQuiz==null)
        {
            //設定目前作答到0題
            currentQuiz=0;
            //顯示題目
            $("#question").text(questions[0].question);
            //每次顯示選項項前先將該區清空
            $("#options").empty();
            //將一個一個選項內容，添加至選項區域
            for(var x=0;x<questions[0].answers.length;x++)
            {
                $("#options").append("<input name='options' type='radio' value="+x+" >"+"<label>"+
                                     questions[0].answers[x][0]+ "</label><br><br>");
             }
            //將按鈕上的文字換成Next
            $("#startButton").attr("value","Next");
        }
        
        else //如果已經作答就從這裡繼續
        { 
            $.each($(":radio"),function(i,val){
                if(val.checked)
                {
                   if(isNaN(questions[currentQuiz].answers[i][1])){
                       var finalResult=questions[currentQuiz].answers[i][1];
                       //顯示最終結果標題
                       $("#question").text(finalAnswers[finalResult][0]);
                       //將選項區域清空
                       $("#options").empty();
                       //顯示最終結果的詳細內容
                       $("#options").append(finalAnswers[finalResult][1]+"<br><br>");
                       //將目前作答到第幾題的變數清空
                       currentQuiz=null;
                       //修改按鈕重新開始
                       $("#startButton").attr("value","重新開始");
                   }
                else
                    {
                        //指定下一個要顯示的項目
                        currentQuiz=questions[currentQuiz].answers[i][1]-1;
                        //顯示新的題目
                        $("#question").text(questions[currentQuiz].question);
                        //清空選項區域
                        $("#options").empty();
                        //顯示新的選項內容
                        for(var x=0;x<questions[currentQuiz].answers.length;x++)
                        {
                            $("#options").append("<input name='options' type='radio' value="+x+" >"+
                                                 "<label>"+questions[currentQuiz].answers[x][0]+"</label><br><br>");
                        }
                    }
                    return false;
                }
             });
        }
    });
});
var answer;
var question = 0;
var correct = 0;
var wrong = 0;
function start(){
    document.getElementById("btnstart").setAttribute("class","btnstart inactivestart")
    document.getElementById("btnstart").disabled = true;
    document.getElementById("btnstop").setAttribute("class","btnstart activestop")
    document.getElementById("btnstop").disabled = false;
    document.getElementById("answerbox").disabled = "";
    document.getElementById("useranswer").disabled = "";
    q1();
    document.getElementById("table").setAttribute("class","hide");
}

function stop(){
    document.getElementById("btnstop").setAttribute("class","btnstart inactivestop")
    document.getElementById("btnstop").disabled = true;
    document.getElementById("btnstart").setAttribute("class","btnstart activestart")
    document.getElementById("btnstart").disabled = false;
    document.getElementById("answerbox").disabled = true;
    document.getElementById("useranswer").disabled = true;
    document.getElementById("list").innerHTML = "";
    document.getElementById("q1").innerHTML = "";
    document.getElementById("answerbox").value = "";

    document.getElementById("table").setAttribute("class","show");

    question--;
    document.getElementById("q").innerHTML= question;
    document.getElementById("c").innerHTML= correct;
    document.getElementById("w").innerHTML= wrong;

    if(correct/question == 1){
        document.getElementById("level").innerHTML ="Legendray!"
    }else if(correct/question <= 0.5){
        document.getElementById("level").innerHTML ="Beginner!"
    }else{
        document.getElementById("level").innerHTML ="Master!"
}
};

function q1(){
    var num1 = 0;
    var num2 = 0;
    num1 = Math.floor(Math.random() * 100 +1);
    num2 = Math.floor(Math.random() * 100 +1);
    answer = num1 + num2;
    document.getElementById("q1").innerHTML = num1+ "+" + num2;
    question++;
}

function checkanswer(){
    var useranswer = document.getElementById("answerbox").value;
    // alert(useranswer)
    if( answer == useranswer){
        document.getElementById("list").innerHTML += "<li>correct</li>";
        correct++;
    }else{
        document.getElementById("list").innerHTML += "<li>wrong</li>";
        wrong++;
    }
    q1();
}

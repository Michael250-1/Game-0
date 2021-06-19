player1name = localStorage.getItem("player1");
player2name = localStorage.getItem("player2");

player1score = 0;
player2score = 0;

document.getElementById("player1_name").innerHTML=player1name + " : ";
document.getElementById("player2_name").innerHTML=player2name + " : ";

document.getElementById("player1_score").innerHTML = player1score;
document.getElementById("player2_score").innerHTML = player2score;

document.getElementById("player_question").innerHTML = "Question Turn : " + player1name;
document.getElementById("player_answer").innerHTML = "Answer Turn : " + player2name;

function send(){
    getword = document.getElementById("word").value;
    
     
    charat1 = word.charAt(1);
    console.log(charat1);

    question_word="<h4 id="word_display"> Q. "+ word3 +" </h4>";
    inputbox="<br> Answer : <input type="text" id="inputbox">";

    checkbutton="<br> <br> <button class="btn btn-info" onclick="check()"> Check </button>";
}
let num1, num2, operator, correctAnswer;
let score = 0;

const operators = ["+", "-", "*"];

function RandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function GenerateQuestion() {
    num1 = RandomInt(0,10);
    num2 = RandomInt(0,10);
    operator = operators[RandomInt(0, operators.length-1)];

    return (num1 +" "+ operator +" "+ num2).toString();
}

function playAgain() {
    GenerateQuestion();
    score = 0;
}

function checkAnswer() {
    correctAnswer = eval((num1 + operator + num2).toString());
    document.getElementById("answer").placeholder = correctAnswer;

    if (document.getElementById("answer").value == correctAnswer) {
        score++;
        if (score < 0)
            score = 0;
        else if (score > 5)
            score = 5;
    }

    //prompt to play again on max score
    if (score == 5){
        playAgain(); 
    };

    document.getElementById("score").innerHTML = score;
}
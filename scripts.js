let num1, num2, operator, correctAnswer;
let score = 0;

const operators = ["+", "-", "*"];

function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateQuestion() {
    num1 = randomInt(0,10);
    num2 = randomInt(0,10);
    operator = operators[randomInt(0, operators.length-1)];

    let question = (num1 +" "+ operator +" "+ num2).toString();

    document.getElementById("question").innerHTML = question;
}

function playAgain() {
    generateQuestion();
    score = 0;
}

function updateMessage(message, color = "black") {
    let element = document.getElementById("message");
    element.style.color = color;
    element.innerHTML = message;
}

function checkAnswer() {
    let currentAnswer = document.getElementById("answer").value;
    if (currentAnswer) {
        correctAnswer = eval((num1 + operator + num2).toString());
        generateQuestion();

        if (currentAnswer == correctAnswer) {
            updateMessage("Correct!", "green");
            score++;
            if (score < 0)
                score = 0;
            else if (score > 5)
                score = 5;
        } else {
            updateMessage("Wrong! Correct answer was " + correctAnswer, "red");
        }

        document.getElementById("score").innerHTML = score;

        // placeholder stuff
        if (score == 5) {
            updateMessage("YOU WIN!", "green");
        }
    } else {
        updateMessage("Please type your answer.")
    }
}
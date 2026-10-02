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
    document.getElementById("score").innerHTML = score;
}

function updateContentVisibility() {
    if (score >= 5) {
        // hide question, show win message/replay button
        document.getElementById("div-questions").style.display = "none";
        document.getElementById("div-success").style.display = "block";
    } else {
        // hide win message/replay button, show question
        document.getElementById("div-questions").style.display = "block";
        document.getElementById("div-success").style.display = "none";
    }
}

function updateMessage(message, color = "black") {
    let element = document.getElementById("message");
    element.style.color = color;
    element.innerHTML = message;
}

function playAgain() {
    score = 0;
    generateQuestion();
    updateContentVisibility()
    updateMessage("")
}

function checkAnswer() {
    let currentAnswer = document.getElementById("answer").value;
    if (currentAnswer) {
        correctAnswer = eval((num1 + operator + num2).toString());
        if (currentAnswer == correctAnswer) {
            updateMessage("Correct!", "green");
            score++;
            // clamp score within correct values
            if (score < 0)
                score = 0;
            else if (score > 5)
                score = 5;
        } else {
            updateMessage("Wrong! Correct answer was " + correctAnswer, "red");
        }

        // update score display, clear answer in text box, update question/win message visibility
        document.getElementById("answer").value = "";
        updateContentVisibility()
        generateQuestion();
    } else {
        updateMessage("Please type your answer.")
    }
}
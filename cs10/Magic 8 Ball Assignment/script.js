// Magic 8 Ball

// html element variables
let ballBtnEl = document.getElementById("8ballBtn");
let answerParEl = document.getElementById("answerPar");
let questionInEl = document.getElementById("questionIn");

// event listeners
ballBtnEl.addEventListener("click", getAnswer);

// event function

// get answer
function getAnswer() {
    // pick random answer
    let answer = Math.random();

    // check for predetermined answers 
    if (questionInEl.value === "Does a magic 8 ball actually work?" || questionInEl.value === "Do magic 8 balls actually work?") {
        answer = "How dare you doubt me!";
        answerR();

    } else if (questionInEl.value === "") {
        answer = "Please ask a question.";
        answerY();

    } else if (questionInEl.value === "Is JavaScript awesome?") {
        answer = "Of course!";
        answerG();

        // if no predetermined answer, find random answer
    } else if (answer < 0.2) { 
        answer = "Without a Doubt.";
        answerG();

    } else if (answer < 0.4) {
        answer = "As I see it, yes.";
        answerG();

    } else if (answer < 0.6) {
        answer = "Concentrate and ask again.";
        answerY();

    } else if (answer < 0.8) {
        answer = "Don't count on it.";
        answerR();

    } else if (answer > 0.8) {
        answer = "Outlook not so good.";
        answerR();

    }
    // change html to display answer
    answerParEl.innerHTML = answer;
}

// Change colour functions
function answerG() {
    answerParEl.style.color = "lime";
}

function answerR() {
    answerParEl.style.color = "red";
}

function answerY() {
    answerParEl.style.color = "yellow";
}
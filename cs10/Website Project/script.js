// ESO Quiz for Website Project

// html element variables
let q1InEl = document.getElementById("q1In");
let q2InEl = document.getElementById("q2In");
let q3InEl = document.getElementById("q3In");
let q4InEl = document.getElementById("q4In");

let q1StatusEl = document.getElementById("q1Status");
let q2StatusEl = document.getElementById("q2Status");
let q3StatusEl = document.getElementById("q3Status");
let q4StatusEl = document.getElementById("q4Status");

let submitBtnEl = document.getElementById("submitBtn");
let resultParEl = document.getElementById("resultPar");

//  event listener
submitBtnEl.addEventListener("click", submitQuiz);

// event function
function submitQuiz() {
    let numCorrect = 0;

    // check answers
    if (q1InEl.value.toLowerCase() === "zenimax" || q1InEl.value.toLowerCase() === "zenimax online" || q1InEl.value.toLowerCase() === "zenimax online studios") {
        q1StatusEl.innerHTML = "Correct";
        q1StatusEl.style.color = "lime";
        numCorrect += 1;
    } else {
        q1StatusEl.innerHTML = "Correct Answer: Zenimax Online Studios";
        q1StatusEl.style.color = "red";
    }

    if (q2InEl.value.toLowerCase() === "aldmeri dominion" || q2InEl.value.toLowerCase() === "the dominion" || q2InEl.value.toLowerCase() === "the aldmeri dominion") {
        q2StatusEl.innerHTML = "Correct";
        q2StatusEl.style.color = "lime";
        numCorrect += 1;
    } else {
        q2StatusEl.innerHTML = "Correct Answer: Aldmeri Dominion";
        q2StatusEl.style.color = "red";
    }

    if (q3InEl.value.toLowerCase() === "morrowind") {
        q3StatusEl.innerHTML = "Correct";
        q3StatusEl.style.color = "lime";
        numCorrect += 1;
    } else {
        q3StatusEl.innerHTML = "Correct Answer: Morrowind";
        q3StatusEl.style.color = "red";
    }

    if (q4InEl.value.toLowerCase() === "eso plus") {
        q4StatusEl.innerHTML = "Correct";
        q4StatusEl.style.color = "lime";
        numCorrect += 1;
    } else {
        q4StatusEl.innerHTML = "Correct Answer: ESO Plus";
        q4StatusEl.style.color = "red";
    }
    
    // display final score
    if (numCorrect > 2) {
        resultParEl.style.color = "lime";
        resultParEl.innerHTML = "You got " + numCorrect + " correct. Good job!";
    } else if (numCorrect < 2) {
        resultParEl.style.color = "red";
        resultParEl.innerHTML = "You got " + numCorrect + " correct. Good try!"
    } else {
        resultParEl.style.color = "yellow";
        resultParEl.innerHTML = "You got " + numCorrect + " correct. Good try!"
    }

}
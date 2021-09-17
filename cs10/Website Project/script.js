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

//  event listener
submitBtnEl.addEventListener("click", submitQuiz);

// event function
function submitQuiz() {
    // declare question variables
    let q1Correct = false;
    let q2Correct = false;
    let q3Correct = false;
    let q4Correct = false;

    // check answers
    if (q1InEl.value.toLowerCase() === "zenimax" || q1InEl.value.toLowerCase() === "zenimax online" || q1InEl.value.toLowerCase() === "zenimax online studios") {
        q1Correct = true;
    } 

    if (q2InEl.value.toLowerCase() === "aldmeri dominion" || q2InEl.value.toLowerCase() === "the dominion" || q2InEl.value.toLowerCase() === "the aldmeri dominion") {
        q2Correct = true;
    }

    if (q3InEl.value.toLowerCase() === "morrowind") {
        q3Correct = true;
    }

    if (q4InEl.value.toLowerCase() === "eso plus") {
        q4Correct = true;
    }

    // change status text
    if (q1Correct === true) {
        q1StatusEl.innerHTML = "Correct";
        q1StatusEl.style.color = "lime";
    } else {
        q1StatusEl.innerHTML = "Correct Answer: Zenimax Online Studios";
        q1StatusEl.style.color = "red";
    }

    if (q2Correct === true) {
        q2StatusEl.innerHTML = "Correct";
        q2StatusEl.style.color = "lime";
    } else {
        q2StatusEl.innerHTML = "Correct Answer: Aldmeri Dominion";
        q2StatusEl.style.color = "red";
    }

    if (q3Correct === true) {
        q3StatusEl.innerHTML = "Correct";
        q3StatusEl.style.color = "lime";
    } else {
        q3StatusEl.innerHTML = "Correct Answer: Morrowind";
        q3StatusEl.style.color = "red";
    }

    if (q4Correct === true) {
        q4StatusEl.innerHTML = "Correct";
        q4StatusEl.style.color = "lime";
    } else {
        q4StatusEl.innerHTML = "Correct Answer: ESO Plus";
        q4StatusEl.style.color = "red";
    }

}
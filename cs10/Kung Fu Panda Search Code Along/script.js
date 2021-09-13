// Kung Fu Panda Character Search

// Variables for HTML Elements
let charImgEl = document.getElementById("charImg");
let charNameEl = document.getElementById("charName");
let charQuoteEl = document.getElementById("charQuote");

// Add Event Listener to Button
document.getElementById("searchBtn").addEventListener("click", characterSearch);

// Event Function
function characterSearch() {
    // Get Input
    let charName = document.getElementById("nameIn").value.toLowerCase();

    // Check Name
    if (charName === "po" || charName === "dragon warrior" || charName === "the dragon warrior") {
        charImgEl.src = "images/po.png";
        charNameEl.innerHTML = "Po";
        charQuoteEl.innerHTML = "Buddy, I am the Dragon Warrior.";

    } else if (charName === "viper") {
        charImgEl.src = "images/viper.png";
        charNameEl.innerHTML = "Viper";
        charQuoteEl.innerHTML = "I don't need to bite to fight!";

    } else if (charName === "crane") {
        charImgEl.src = "images/crane.png";
        charNameEl.innerHTML = "Crane";
        charQuoteEl.innerHTML = "You can chain my body, but you will never chain my warrior spirit!";

    } else if (charName === "mantis") {
        charImgEl.src = "images/mantis.png";
        charNameEl.innerHTML = "Mantis";
        charQuoteEl.innerHTML = "Fear the bug!";

    } else if (charName === "monkey") {
        charImgEl.src = "images/monkey.png";
        charNameEl.innerHTML = "Monkey";
        charQuoteEl.innerHTML = "We should hang out!";

    } else if (charName === "tigress") {
        charImgEl.src = "images/tigress.png";
        charNameEl.innerHTML = "Tigress";
        charQuoteEl.innerHTML = "That was pretty hardcore!";

    } else {
        charImgEl.src = "images/question-mark.png";
        charNameEl.innerHTML = "------";
        charQuoteEl.innerHTML = "Character not found.";
    }
}


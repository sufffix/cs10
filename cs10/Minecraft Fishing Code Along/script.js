// Minecraft Fishing Simulator

// variables for html elements
let steveImgEl = document.getElementById("steveImg");
let alexImgEl = document.getElementById("alexImg");
let fishBtnEl = document.getElementById("fishBtn");
let imgResultEl = document.getElementById("img-result");
let numCodEl = document.getElementById("numCod");
let numSalmonEl = document.getElementById("numSalmon");
let numTropicalEl = document.getElementById("numTropical");
let numPufferEl = document.getElementById("numPuffer");

// global variables
let character = "Steve";
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// add event listeners
steveImgEl.addEventListener("click", selectSteve);
alexImgEl.addEventListener("click", selectAlex);
fishBtnEl.addEventListener("click", fishOnce);

// event functions
function selectSteve() {
    //  update active border
    steveImgEl.classList.add("active");
    alexImgEl.classList.remove("active");

    // update character variable
    character = "Steve";
}

function selectAlex() {
    //  update active border
    steveImgEl.classList.remove("active");
    alexImgEl.classList.add("active");

    // update character variable
    character = "Alex";
}

function fishOnce() {
    // test current character
    if(character === "Steve") {
        // use steve probability
        let randNum = Math.random();
        if (randNum < 0.7) {
            numCod++;
            imgResultEl.src = "img/Raw-Cod.png";
            numCodEl.innerHTML = numCod;

        } else if (randNum < 0.9) {
            numSalmon++;
            imgResultEl.src = "img/Raw-Salmon.png";
            numSalmonEl.innerHTML = numSalmon;

        } else if (randNum < 0.95) {
            numTropical++;
            imgResultEl.src = "img/Tropical-Fish.png";
            numTropicalEl.innerHTML = numTropical;

        } else {
            numPuffer++;
            imgResultEl.src = "img/Pufferfish.png";
            numPufferEl.innerHTML = numPuffer;
        }


    } else {
        // use alex probability
        let randNum = Math.random();
        if (randNum < 0.1) {
            numCod++;
            imgResultEl.src = "img/Raw-Cod.png";
            numCodEl.innerHTML = numCod;

        } else if (randNum < 0.2) {
            numSalmon++;
            imgResultEl.src = "img/Raw-Salmon.png";
            numSalmonEl.innerHTML = numSalmon;

        } else if (randNum < 0.5) {
            numTropical++;
            imgResultEl.src = "img/Tropical-Fish.png";
            numTropicalEl.innerHTML = numTropical;

        } else {
            numPuffer++;
            imgResultEl.src = "img/Pufferfish.png";
            numPufferEl.innerHTML = numPuffer;
        }
    }
}
// story of gauss code along

// html elements
let calcBtn = document.getElementById("calc-btn");
let sumOut = document.getElementById("sum-out");
let nIn = document.getElementById("n-in");
let nOut = document.getElementById("n-out");

// add event listener
calcBtn.addEventListener("click", calcSum)

// event function
function calcSum() {
    // add integers 1-100
    let total = 0;
    let max = nIn.value;    
    for (let n = 1; n <= max; n++) {
        total += n;
    }
    
    

    // output result
    nOut.innerHTML = nIn.value;
    sumOut.innerHTML = total;
}
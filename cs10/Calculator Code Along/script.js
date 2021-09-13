// Average Calculator

// Event Listener
document.getElementById("calcBtn").addEventListener("click", calcAverage);

// Event Function
function calcAverage() {
    // Input
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    let num3 = +document.getElementById("num3").value;

    // Process
    let average = (num1 + num2 + num3) / 3;

    // Output
    document.getElementById("aveOut").innerHTML = average;
}

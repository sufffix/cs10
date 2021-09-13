// RGB Colours

// Event Listener
document.getElementById("preview-btn").addEventListener("click", rgbPreview);

// Event Function
function rgbPreview() {
    // Input: get rgb values
    let rValue = +document.getElementById("redIn").value;
    let gValue = +document.getElementById("greenIn").value;
    let bValue = +document.getElementById("blueIn").value;

    // Process: build rgb string rgb(_, _, _)
    let rgbString = "rgb(" + rValue + ", " + gValue + ", " + bValue + ")";

    // Output: display rgb string and update color preview
    document.getElementById("rgbStrOut").innerHTML = rgbString;
    document.getElementById("display").style.background = rgbString;

}
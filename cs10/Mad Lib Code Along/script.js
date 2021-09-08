// Mad Lib

// Event Listener
document.getElementById("mad-lib-btn").addEventListener("click", buildMadLib)

// Event Function
function buildMadLib() {
    // Input
    let pluralNoun = document.getElementById("pluralNoun").value;
    let adjective = document.getElementById("adjective").value;
    let verb = document.getElementById("verb").value;
    let noun = document.getElementById("noun").value;

    // Process:
    let result = '"There are too many ' + pluralNoun + ' on this ' + adjective + ' airplane!", I screamed. "Somebody has to ' + verb + ' on the ' + noun + ' to solve this problem."';


    // Output
    document.getElementById("result").innerHTML = result;

}
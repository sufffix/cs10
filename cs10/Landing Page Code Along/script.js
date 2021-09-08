// Landing Page

// Prompt User for Data
let name = prompt("What is your name?");
let focus = prompt("What is your main focus for today?");

// output data into page
document.getElementById("nameSpan").innerHTML = name;
document.getElementById("focusP").innerHTML = focus;
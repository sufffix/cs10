// js loop basics

// html element variables
let happyBtn = document.getElementById("happyBtn");
let multipleBtn = document.getElementById("multipleBtn");
let oddBtn = document.getElementById("oddBtn");
let sum5Btn = document.getElementById("sum5Btn");
let sum10Btn = document.getElementById("sum10Btn");

// add event listeners
happyBtn.addEventListener("click", logHappy);
multipleBtn.addEventListener("click", logMultiple);
oddBtn.addEventListener("click", logOdd);
sum5Btn.addEventListener("click", logSum5);
sum10Btn.addEventListener("click", logSum10);
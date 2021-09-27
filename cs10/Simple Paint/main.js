// Simple Paint

// setup canvas and context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// global variables
let mousePressed = false;
let mouseX, mouseY;

// main loop (60 fps)
requestAnimationFrame(loop);

function loop() {
    // update variables

    // // draw canvas
    // ctx.fillStyle = "white";
    // ctx.fillRect(0, 0, cnv.width, cnv.height);

    // draw circle if mousePressed\
    if (mousePressed) {
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 10, 0, 2 * Math.PI);
        ctx.fill();
    }

    // continue loop
    requestAnimationFrame(loop);
}

// event stuff
document.addEventListener("mousedown", mousedownHandler);
document.addEventListener("mouseup", mouseupHandler);
document.addEventListener("mousemove", mousemoveHandler)

function mousedownHandler() {
    mousePressed = true;
}
function mouseupHandler() {
    mousePressed = false;
}

function mousemoveHandler(event) {
    let cnvRect = cnv.getBoundingClientRect();
    console.log(cnvRect);
    mouseX = event.x - cnvRect.x;
    mouseY = event.y - cnvRect.y;
}
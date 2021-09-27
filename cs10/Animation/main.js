// set up canvas + 2d graphics
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;


let cloudL = 100;
let cloudR = 150;

let sunPos = 300;
let sunRad = 25;
let sunR = 255;
let sunG = 0;

requestAnimationFrame(draw);
function draw() {
    // update elements on canvas
    cloudL--;
    cloudR++;
    sunPos--;
    sunRad += 0.1;
    sunG++;

    // draw canvas
    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    // draw background
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, 400, 400);

    // draw sun
    ctx.fillStyle = "rgb(255, " + sunG + ", 0)";
    ctx.beginPath();
    ctx.arc(200, sunPos, sunRad, 0, 2 * Math.PI);
    ctx.fill()

    // draw ground
    ctx.fillStyle = "green";
    ctx.fillRect(0, 300, 400, 100);

    

    // draw cloud
    let cloudImg = document.getElementById("cloudImg");
    ctx.drawImage(cloudImg, cloudR, 100);
    ctx.drawImage(cloudImg, cloudL, 80);

    requestAnimationFrame(draw);
}
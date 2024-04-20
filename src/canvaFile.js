/** @type {CanvasRenderingContext2D} */

const CANVAS = document.getElementById("canvas1");
const ctx = CANVAS.getContext("2d");

const CANVAS_WIDTH = CANVAS.width = 800;
const CANVAS_HEIGHT = CANVAS.height = 600;

function asItIs() {
    // Major circle
    ctx.stroke();  
    ctx.beginPath();  // break point 
    ctx.arc(400, 1420, 1100, 0, 2 * Math.PI, true);

    // Tree

    ctx.rect(100, 200, 30, 200);
    ctx.stroke();  
    ctx.beginPath();  // break point 
    ctx.arc(115, 180, 100, 0, 2 * Math.PI, true);

    ctx.stroke();  
    ctx.beginPath();  // break point 
    ctx.arc(60, 180, 20, 0, 2 * Math.PI, true);
    ctx.stroke();  
    ctx.beginPath();  // break point 
    ctx.arc(120, 120, 20, 0, 2 * Math.PI, true);
    ctx.stroke();  
    ctx.beginPath();  // break point 
    ctx.arc(120, 180, 20, 0, 2 * Math.PI, true);
    ctx.stroke();  
    ctx.beginPath();  // break point 
    ctx.arc(180, 180, 20, 0, 2 * Math.PI, true);


    // road
    ctx.rect(0, CANVAS_HEIGHT - 60, CANVAS_WIDTH, 20);

    // cloud 1

    ctx.stroke();  
    ctx.beginPath();  // break point 
    ctx.arc(400, 100, 40, 0, 2 * Math.PI, true);
    ctx.stroke();  
    ctx.beginPath();  // break point 
    ctx.arc(450, 120, 30, 0, 2 * Math.PI, true);
    ctx.stroke();  
    ctx.beginPath();  // break point 
    ctx.arc(350, 110, 30, 0, 2 * Math.PI, true);

    // cloud 2

    ctx.stroke();  
    ctx.beginPath();  // break point 
    ctx.arc(600, 100, 38, 0, 2 * Math.PI, true);
    ctx.stroke();  
    ctx.beginPath();  // break point 
    ctx.arc(650, 120, 28, 0, 2 * Math.PI, true);
    ctx.stroke();  
    ctx.beginPath();  // break point 
    ctx.arc(550, 110, 28, 0, 2 * Math.PI, true);

    ctx.stroke();

    // Sun

    ctx.stroke();  
    ctx.beginPath();  // break point 
    ctx.arc(750, 70, 50, 0, 2 * Math.PI, true);
    ctx.stroke();

}





let x = 200;

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    
    asItIs();

    // dabba
    ctx.stroke();  
    ctx.beginPath();  // break point 
    ctx.rect(x, CANVAS_HEIGHT - 200, 200, 100);
    ctx.stroke();  
    ctx.beginPath();  // break point 
    ctx.arc(x + 60, CANVAS_HEIGHT - 90, 30, 0, 2 * Math.PI, true);
    ctx.arc(x + 60, CANVAS_HEIGHT - 90, 20, 0, 2 * Math.PI, true);
    ctx.stroke();  
    ctx.beginPath();  // break point 
    ctx.arc(x + 140, CANVAS_HEIGHT - 90, 30, 0, 2 * Math.PI, true);
    ctx.arc(x + 140, CANVAS_HEIGHT - 90, 20, 0, 2 * Math.PI, true);

    // train engine
    ctx.stroke();  
    ctx.beginPath();  // break point 
    ctx.rect(x + 300, CANVAS_HEIGHT - 200, 200, 100);
    ctx.stroke();  
    ctx.beginPath();  // break point 
    ctx.arc(x + 370, CANVAS_HEIGHT - 110, 50, 0, 2 * Math.PI, true);
    ctx.arc(x + 370, CANVAS_HEIGHT - 110, 30, 0, 2 * Math.PI, true);
    ctx.stroke();  
    ctx.beginPath();  // break point 
    ctx.arc(x + 460, CANVAS_HEIGHT - 90, 30, 0, 2 * Math.PI, true);
    ctx.arc(x + 460, CANVAS_HEIGHT - 90, 20, 0, 2 * Math.PI, true);
    ctx.rect(x + 320, CANVAS_HEIGHT - 280, 100, 80);
    ctx.rect(x + 320, CANVAS_HEIGHT - 300, 100, 20);
    ctx.rect(x + 500, CANVAS_HEIGHT - 180, 20, 40);
    ctx.stroke();

    // connector

    ctx.rect(x + 200, CANVAS_HEIGHT - 170, 100, 20);
    ctx.stroke();
    x++;

    if (x > 800) {
        x = 200;
    }
    requestAnimationFrame(animate);
}

animate();
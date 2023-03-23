let x = -50;
let y = 150;
let size = 50;
let speed = 5;
let angle = 0;
let angleSpeed = 0.01;

let isGreen = false;

function setup() {
  createCanvas(400, 400, WEBGL);
  frameRate(60); // Set the frame rate to 60 frames per second
}

function draw() {
  background(220);


  push();
  translate(x + size / 2, y + size / 2);
  rotate(angle);
  
  if (isGreen) {
    fill(0, 255, 0); // Set the fill to green
  } else {
    fill(255); // Set the fill to white
  }
  
  rect(-size / 2, -size / 2, 3*size, size);
  triangle(-size/2, -size/2, -size/2, size/2, -2*size,size/2);
triangle(-size/2, size/2, 2.5*size, size/2, 2.5*size, 1.5*size);


  pop();


  if (keyIsDown(UP_ARROW)) {
    y += speed; // Move the square down
    angle -= angleSpeed;
  } else if (keyIsDown(DOWN_ARROW)) {
    y -= speed; // Move the square up
    angle += angleSpeed;
  }

  if (keyIsDown(LEFT_ARROW)) {
    angle -= angleSpeed;
  } else if (keyIsDown(RIGHT_ARROW)) {
    angle += angleSpeed;
  }
  
  // Check if the 'g' key is pressed
  if (keyIsDown(71)) { // 71 is the ASCII code for the 'g' key
    isGreen = true;
  } else {
    isGreen = false;
  }
}

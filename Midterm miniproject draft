var mySound;

function preload() {
  mySound = loadSound("cat-meow.wav")
}
  
function mousePressed() {
  mySound.play();
} 

function setup() {
  createCanvas(800, 600);
  background(255);
}

// track the circle to draw next frame
var x = 50;
var y = 50;
var S = 6;

function draw() {
  colorMode(HSB);
  stroke(255);

  // draw circle with random hue
  fill(random(30), S, 100);
  ellipse(x, y, 50);

  if (S <= 95) {
    S += 1;
  }

  if (S > 95) {
    S *= -2;
  }

  // set up next circle
  x = x + 50;

  // if we hit the right edge, go down a line
  if (x > width - 50) {
    x = 50;
    y = y + 100;
  }

  // if we hit the bottom edge, reset to top
  if (y > height - 50) {
    y = 100;
    S = 6;
  }

  if (mouseIsPressed) {
    fill(255);
    rect(0, 0, 800, 600);

  }
}

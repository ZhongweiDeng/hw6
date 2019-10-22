var screen = 0;
var y = -25;
var x = 200;
var ballspeed = 3;
var score = 0;
var sound1;
var sound2;

function preload() {
  soundFormats("wav");
  sound1 = loadSound("ball.wav");
  sound2 = loadSound("oh no.wav");
}

function setup() {
  createCanvas(700, 500);
}

function draw() {
  if (screen == 0) {
    startScreen()
  } else if (screen == 1) {
    gameOn()
  } else if (screen == 2) {
    endScreen()
  }
}

function startScreen() {
  background(242, 167, 102)
  fill(255)
  textAlign(CENTER);
  textStyle(BOLD);
  textSize(36)
  text('ARE YOU READY ?!', width / 2, height / 2 - 40)
  textStyle(NORMAL);
  textSize(21)
  text('click to start', width / 2, height / 2 + 50);
  text('This is a ball catching game made by Betty Deng', width / 2, height / 2 + 100)
  reset();
}

function gameOn() {
  background(242, 167, 102)
  fill(255)
  textSize(30)
  text("score = " + score, width / 2, 50)
  noStroke()
  fill(255, 248, 197)
  ellipse(x, y, 25, 25)
  rectMode(CENTER)
  rect(mouseX, height - 10, 60, 40)
  y += ballspeed;
  if (y > height) {
    sound2.setVolume(3)
    sound2.play()
    screen = 2
  }
  if (y > height - 10 && x > mouseX - 25 && x < mouseX + 25) {
    sound1.play();
    y = -25
    ballspeed += 0.5
    score += 1
  }
  if (y == -25) {
    pickRandom();
  }
}

function pickRandom() {
  x = random(25, width - 25)
}

function endScreen() {
  background(96, 75, 56)
  fill(255)
  textAlign(CENTER);
  textStyle(BOLD);
  textSize(36)
  text('NO ！！！！！！！', width / 2, height / 2 - 50)
  text('GAME OVER', width / 2, height / 2)
  textStyle(NORMAL);
  textSize(21)
  text("SCORE = " + score, width / 2, height / 2 + 50)
  text('click to play again', width / 2, height / 2 + 80);
}

function mousePressed() {
  if (screen == 0) {
    screen = 1
  } else if (screen == 2) {
    screen = 0
  }
}

function reset() {
  score = 0;
  ballspeed = 2;
  y = -25;
}

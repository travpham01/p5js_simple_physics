var ySpeed = 0;
var y = 300;
var yAccel = 1;
var end = false;
var rectCoordsY = [0, 0, 0, 0];
var rectCoordsX = [0, 0, 0, 0];
var rectCoordsY1 = [0, 0, 0, 0];
var rectCoordsX1 = [0, 0, 0, 0];
var rectCoordsY2 = [0, 0, 0, 0];
var rectCoordsX2 = [0, 0, 0, 0];
var score = 0;

function setup() {
  createCanvas(600, 600);
  
  for(var i = 0; i < 1; i++){
    rectCoordsY[i] = random (300, 580);
    rectCoordsY1[i] = random (300, 580);
    rectCoordsY2[i] = random (300, 580);
    rectCoordsX[i] = random (600, 800);
    rectCoordsX1[i] = random (1000, 1200);
    rectCoordsX2[i] = random (1400, 1600);
  }
}

function draw() {
  if(end == false){
  background(255,165,0);
  ellipse(width/5, y, 20, 20);
  ySpeed = ySpeed + yAccel;
  y = y + ySpeed;
  drawRect();
  moveRect();
  moveBack();
  countScore();
  fill(138,43,226);
  rect(0, 580, 600, 50);
  fill(255, 5, 23);
  textSize(50);
  text("rabbit run", 190, 40)
  fill(255);
  textSize(40);
  text("Score: " + score, 190, 70);
  checkPipe();
  }
  
  if(end == true){
    background(0);
    fill(255,0,0);
    textSize(40);
    text("Game Over", 190, 280);
    text("Click to Restart", 150, 320);
    text("Score: " + score, 210, 360);
    
    if(mouseIsPressed){
      end = false;
      score = 0;
      for(var i = 0; i < 1; i++){
      rectCoordsY[i] = random (300, 580);
    	rectCoordsY1[i] = random (300, 580);
    	rectCoordsY2[i] = random (300, 580);
    	rectCoordsX[i] = random (600, 800);
   		rectCoordsX1[i] = random (1000, 1200);
    	rectCoordsX2[i] = random (1400, 1600);
      }
    }
  }
  
  if (y > 570){
    y = 570;
  }
  
  if (y < 0){
    ySpeed = 0
    y = 0;
  }
}

function mousePressed(){
  	ySpeed = -30;
}

function drawRect(){
  for(var i = 0; i < 1; i++){
    fill(0, 255, 0);
    rect(rectCoordsX[i], rectCoordsY[i], 25, 700);
    rect(rectCoordsX1[i], rectCoordsY1[i], 25, 700);
    rect(rectCoordsX2[i], rectCoordsY2[i], 25, 700);
  }
}

function moveRect(){
  for(var i = 0; i < 1; i++){
    rectCoordsX[i] = rectCoordsX[i] - 8;
    rectCoordsX1[i] = rectCoordsX1[i] - 8;
    rectCoordsX2[i] = rectCoordsX2[i] - 8;
  }
}

function moveBack(){
  for(var i = 0; i < 1; i++){
    if(rectCoordsX[i] < 0){
      rectCoordsX[i] = random (600, 800);
      rectCoordsY[i] = random (300, 580);
    }
    if(rectCoordsX1[i] < 0){
      rectCoordsX1[i] = random (1000, 1200);
      rectCoordsY1[i] = random (300, 580);
    }
    if(rectCoordsX2[i] < 0){
      rectCoordsX2[i] = random (1400, 1600);
      rectCoordsY2[i] = random (300, 580);
    }
  }
}

function countScore(){
  if (y > 570){
    score = score + 0.5;
  }
}

function checkPipe(){
  for(var i = 0; i < 1; i++){
    if(rectCoordsX[i] < 120 && rectCoordsY[i] < y && rectCoordsX[i] > 100 || rectCoordsY1[i] < y && rectCoordsX1[i] < 120 && rectCoordsX1[i] > 100 || rectCoordsY2[i] < y && rectCoordsX2[i] < 120&& rectCoordsX2[i] > 100){
      end = true;
    }
  }
} 

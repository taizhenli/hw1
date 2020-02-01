var x;
var y;
var radius;

function setup() {
  createCanvas(600, 400);
  x = random(width);
  y = random(height);
  radius = 20
  
}

function draw() {
  background(255);

  if (dist(mouseX, mouseY, x, y) > radius) {
    if (mouseIsPressed) {
     x = mouseX
      y = mouseY
      
    //  x = random(width);
     // y = random(height);
    }
    fill(255, 0, 0, 0);
  }
  else {
    fill(255, 220, 200, 200);
  }

  ellipse(x, y, radius *5
         );
  x += random(-1, 1);
  y += random(-1, 1);
}

    
 

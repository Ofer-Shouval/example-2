let g1, g2,title;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  g1 = createGraphics(width,height/2);
  g2 = createGraphics(width,height/2);
  
}

function draw() {
  
 // background(255)
  
  
  g1.background(0);
  g2.background(255,10);
  
  g1.noFill()
  g2.noFill()
  
  g1.stroke(255)
  g2.stroke(255,0,0)
  
  g1.strokeWeight(4);
  
  g1.ellipse(mouseX, mouseY,75)
  g2.ellipse(mouseX, mouseY-height/2,75)

  
  
  image(g1, 0,0)
  image(g2, 0,height/2)
  
}


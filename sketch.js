var mouseSize = 0;
function setup() {
  // put setup code here
  createCanvas(500,500);
  background("#12CDFF");
}

function draw() {
  // put drawing code here
  background("#12CDFF");
  fill("#FFE312");
  stroke("#E7CD0F");
  strokeWeight(3);
  ellipse(60,90,60,60);
  //face
  noStroke();
  fill(255,230,0);
  ellipse(width/2, height/2, 300,300);
  //eyes
  fill("#A6622F");
  stroke("#B96C33");
  strokeWeight(6);
  ellipse(200,180,30,50);
  fill("#A6622F");
  stroke("#B96C33");
  strokeWeight(6);
  ellipse(300,180,30,50);
   //text
  textSize(40);
  textFont("Bro");
  textStyle(ITALIC);
  fill("#FFE000")
  text('Be Happy Get Happy!',10,30);
   //mouse
  //background("FFFCE5");
    fill("FFF28D");
  //triangle(mouseX,mouseY,40,40);
  ellipse (width/2, height/1.5,mouseSize,mouseSize);
}

function mousePressed(){
  mouseSize = mouseSize+5;
}
  


  
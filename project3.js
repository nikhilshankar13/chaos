var a=2.0,b=-2.2, c=-1.8, d=2.8;
var x=1, y=1;

function setup()
 {
  createCanvas(1920,1080);
  stroke(255,255,255,50);

}

function draw() {
  background(0);
  strokeWeight(random(5))
  for(var  i=0;i<1000;i++){

var oldX = x;
var oldY = y;

x = sin(a * oldY) - cos(b * oldX);
y = sin(c * oldX) - cos(d * oldY);

var scaledX = map(x,-2,2,0,width);
var scaledY = map(y,-2,2,0,height);
line(scaledX,scaledY,mouseX,mouseY);
}
}

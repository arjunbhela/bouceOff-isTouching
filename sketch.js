var frect
var mrect
var rect1
var rect2
var test1
var test2
var test3
var top1
var top2
function setup() {
createCanvas(800,400);

frect = createSprite(100,150,50,100);
frect.shapeColor = "yellow";

mrect = createSprite(500,350,50,100)
mrect.shapeColor = "skyblue";

frect.debug = true;
mrect.debug = true;

rect1 = createSprite(200,200,50,100);
rect2 = createSprite(600,200,50,100);

rect1.shapeColor = "red";
rect2.shapeColor = "orange";

rect1.debug = true;
rect2.debug = true;

rect1.velocityX = 4;
rect2.velocityX = -4;

test1 = createSprite(200,150,50,100);
test1.shapeColor = "white";
test1.debug = true;

test2 = createSprite(300,150,50,100);
test2.shapeColor = "blue";
test2.debug = true;

test3 = createSprite(400,150,50,100);
test3.shapeColor = "brown";
test3.debug = true;

top1 = createSprite(400,0,50,100);
top1.shapeColor = "grey";
top1.debug = true;
top1.velocityY = 5;

top2 = createSprite(400,400,50,100);
top2.shapeColor = "yellow";
top2.debug = true;
top2.velocityY = -5;
}
function draw() {

background(0);  

mrect.x = mouseX;
mrect.y = mouseY;

if (isTouching(mrect,test3)) {
  test3.shapeColor = "purple";
  mrect.shapeColor = "pink";
} else {
  test3.shapeColor = "brown";
  mrect.shapeColor = "skyblue";
}


bounceOff(rect1,rect2);
bounceOff(top1,top2);
  drawSprites();
}



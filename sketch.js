var path, pathImg;
var boy, boy_running;
var leftEdge;
var rightEdge;

function preload(){
  //pre-load images
 pathImg = loadImage("path.png");
 boy_running = loadAnimation("runner1.png", "runner2.png");
}

function setup(){
  createCanvas(400, 400);
  //create sprites here
  path = createSprite(200, 200);
  path.addImage(pathImg);
  path.scale = 1.15;
  path.velocityY = 4;

  boy = createSprite (600, 330, 100, 100);
  boy.addAnimation("runnning", boy_running);
  boy.scale = 0.08;

  rightEdge = createSprite (-18, 200, 100, 400);
  rightEdge.visible = false;

  leftEdge = createSprite (430, 200, 100, 400);
  leftEdge.visible = false;
}

function draw() {
  background(0);

  if (path.y > 400){
  path.y = height /2
  }

  boy.x = mouseX;
  boy.collide(rightEdge);
  boy.collide(leftEdge);

  drawSprites();
}

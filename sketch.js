var runner, runner_running,runner_collided;
var path,invisibleBoundaries,pathImage,invisibleBoundaries2;
function preload(){
  //pre-load images
  runner_running = loadAnimation("runner1.png", "runner2.png");
  pathImage = loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here

  path = createSprite(200,200);
  path.addImage("path",pathImage);
  path.velocityY = 4;
  path.scale=1.2;
  runner = createSprite(200,160,20,50);
  runner.addAnimation("running", runner_running);
  runner.scale = 0.05;
  invisibleBoundaries=createSprite(0,0,400,10);
  invisibleBoundaries.visible=false;
  invisibleBoundaries2=createSprite(400,0,400,10);
  invisibleBoundaries2.visible=false;
}

function draw() {
  background(0);
if(path.y > 400){
  path.y = height/2;
}
  runner.x=World.mouseX;
  runner.collide(invisibleBoundaries);
  runner.collide(invisibleBoundaries2);
  drawSprites();
}

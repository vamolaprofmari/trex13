var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud;

function preload() {
  trex_running = loadAnimation(
    "assets/trex1.png",
    "assets/trex3.png",
    "assets/trex4.png"
  );
  groundImage = loadImage("assets/ground2.png");

  cloudImage = loadImage("assets/cloud.png");
}

function setup() {
  createCanvas(600, 200);
  trex = createSprite(50, 180, 20, 50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  trex.x = 50;

  ground = createSprite(200, 180, 400, 20);
  ground.addImage("ground", groundImage);
  ground.x = ground.width / 2;

  invisibleGround = createSprite(200, 190, 400, 10);
  invisibleGround.visible = false;
}

function draw() {
  background("black");
  console.log(frameCount);
  ground.velocityX = -2;
  if (keyDown("space") && trex.y >= 160) {
    trex.velocityY = -10;
  }

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  trex.velocityY = trex.velocityY + 0.8;
  trex.collide(invisibleGround);
  spawnClouds();
  drawSprites();
}

function spawnClouds() {
  if (frameCount % 60 === 0) {
    cloud = createSprite(600, 100, 40, 10);
    cloud.addImage(cloudImage);
    cloud.y = Math.round(random(10, 60));
    cloud.scale = 0.4;
    cloud.velocityX = -3;
  }
}

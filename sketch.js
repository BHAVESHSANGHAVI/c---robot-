var PLAY = 1;
var END = 0;
var gameState = PLAY;
var bg, bgImg;
var robot, robotImg
var obstacle1, obs1Img
var obsstacle2, obs2Img

function preload() {

  bgImg = loadImage("assets/night bg.jpg")
  obs1Img = loadImage("assets/obsBottom1.png")
  obs2Img = loadImage("assets/obsBottom3.png")
  robotImg = loadAnimation("assets/robotrun.jpg","assets/robotjumb.jpg")

}

function setup() {
  createCanvas(displayWidth-50, displayHeight-100);


  robotImg = createSprite(50,180,20,50);
  robotImg.addAnimation("running",robotrun.jpg );
  robotImg.addAnimation("collided",robotjumb.jpg,);
  robotImg.scale = 0.5;

  bg = createSprite(displayWidth / 2 , displayHeight / 2 , displayWidth, displayHeight);
  bg.addImage("b1", bgImg);
 

  bg.velocityX = -4;
  bg.x = bg.width / 2;




}

function draw() {
  background(0);
  if (bg.x < 0) {
    bg.x = bg.width / 2;
  }
  
  
    if (gameState===PLAY){;
    
      if(keyDown("space") && robotImg.y >= 159) {
        robotImg.velocityY = -12;
      }
    
      robotImg.velocityY = robotImg.velocityY + 0.8
    
      if (ground.x < 0){
        ground.x = ground.width/2;
      }
    
      robotImg.collide(invisibleGround);
      spawnClouds();
      spawnObstacles();
    
      if(obstaclesGroup.isTouching(robotImg)){
          gameState = END;
      }
    }
    else if (gameState === END) {
      gameOver.visible = true;
      restart.visible = true;
      
    
      bg.velocityX = 0;
      robotImg.velocityY = 0;
      
    }
    

  spawnObstacles();
  drawSprites();
}


function spawnObstacles() {
  
    if (frameCount % 85 == 0) {
      obs1 = createSprite(displayWidth +20, displayHeight / 2 + 160, 20, 20)
      obs1.addImage("o1", obs1Img)
      obs1.scale = 0.2;
      obs1.velocityX = -3;

  }

 
    if (frameCount % 360 == 0) {
    obs2 = createSprite(displayWidth+20, displayHeight/2+180, 10, 60)
    obs2.addImage("o2", obs2Img);
    obs2.scale = 0.2;
    obs2.velocityX = -3;
 
}


}
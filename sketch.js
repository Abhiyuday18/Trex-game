var trex,trex_run,ground,groundimg,invisibleGround,cloudimg,ob1,ob2,ob3,ob4,ob5,ob6,obstacle,score



function preload(){
  trex_run=loadAnimation("trex1.png","trex3.png","trex4.png")
  
  groundimg=loadImage("ground2.png")
  cloudimg=loadImage("cloud.png")
  ob1=loadImage("obstacle1.png")
   ob2=loadImage("obstacle2.png")
   ob3=loadImage("obstacle3.png")
   ob4=loadImage("obstacle4.png")
   ob5=loadImage("obstacle5.png")
   ob6=loadImage("obstacle6.png")
  
}


function setup() {
  createCanvas(600, 200);

 trex = createSprite(50,180,20,50);
trex.addAnimation("run",trex_run);
  trex.scale = 0.5;
trex.x = 50;
  
ground = createSprite(200,180,400,20);
ground.addImage(groundimg);
ground.x = ground.width /2;
ground.velocityX=-4
  invisibleGround = createSprite(200,190,400,5);
invisibleGround.visible = false;
  







}


function draw() {
  
  background(180);
  
  score=Math.round(frameCount/10)
  text("Score= "+score,400,30)
  
  if(keyDown("space") && trex.y >= 164){
      trex.velocityY = -12 ;
      
    }
  trex.velocityY = trex.velocityY + 0.8;
    
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  
   trex.collide(invisibleGround);
  
  spawnObstacles();
  
  spawnClouds();
  
  drawSprites()
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var cloud = createSprite(600,120,40,10);
    cloud.y = Math.round(random(80,120))

    cloud.addImage(cloudimg);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 210;
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
    
    //add each cloud to the group
    //CloudsGroup.add(cloud);
  }
}

function spawnObstacles() {
  if(frameCount % 60 === 0) {
   obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = -4;
    
    //generate random obstacles
  var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(ob1);
              break;
      case 2: obstacle.addImage(ob2);
              break;
      case 3: obstacle.addImage(ob3);
              break;
      case 4: obstacle.addImage(ob4);
              break;
      case 5: obstacle.addImage(ob5);
              break;
      case 6: obstacle.addImage(ob6);
              break;
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 210;
  }
}

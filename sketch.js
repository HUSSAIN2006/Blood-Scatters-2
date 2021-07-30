var player;
var g1;
var g2;
var g3;
var g4;
var g5;
var g6;
var g7;
var g8;

var enenmy;
var clouds;
var burger;
var coins;

function setup() {
  createCanvas(displayWidth,displayHeight);
  player=createSprite(40, 700, 50, 50);
  player.shapeColor="black"

  enenmy= createSprite(450,700,50,50);
  enenmy.shapeColor="blue"
   
  clouds=createSprite(800,80,50,50);
  clouds.shapeColor="aqua"
  
  burger = createSprite(750,700,50,50);
  burger.shapeColor="white"

  coins = createSprite(850,700,50,50);

  g1 = createSprite(0,height,width,100);
  g1.shapeColor="red"

  g2 = createSprite(50,height,width,100);
  g2.shapeColor="red"

  g3 = createSprite(100,height,width,100)
  g3.shapeColor="red"

  g4 = createSprite(150,height,width,100);
  g4.shapeColor="red"

  g5 = createSprite(200,height,width,100);
  g5.shapeColor="red"

  g6 = createSprite(250,height,width,100);
  g6.shapeColor="red"

  g7 = createSprite(300,height,width,100);
  g7.shapeColor="red"

  g8 = createSprite(350,height,width,100);
  g8.shapeColor="red"

  g9 = createSprite(750,height,width,100);
  g9.shapeColor="red"


}

function draw() {
  background("yellow"); 
  if(keyWentDown("up")){
     player.velocityY = -7
  }
  if(keyWentDown("down")){
    player.velocityY = 7
  }
  if(keyWentDown("left")){
    player.velocityX = 7
  }
  if(keyWentDown("right")){
    player.velocityX = 7
  }
  g1.velocityX=-7
  g2.velocityX=-7
  g3.velocityX=-7
  g4.velocityX=-7
  g5.velocityX=-7
  g6.velocityX=-7
  g7.velocityX=-7
  g8.velocityX=-7
  g9.velocityX=-7
  
  

  drawSprites();
}
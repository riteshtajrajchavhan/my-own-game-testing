const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world; 
var ball,backImg;
var gameState = "serve";
var play=1;
var end=0;
var song;

function preload(){
backImg=loadImage("img1.png")
startImage=loadImage("start.png");
back2Img=loadImage("img2.png")
AimImg=loadImage("Aim.png");
bomImg=loadImage("bomb.png");
}


function setup() {
 createCanvas(1350,650);
  
 start =createSprite(660,614)
    start.addImage(startImage)
    start.scale=0.5

    Aim =createSprite(660,314);
    Aim.addImage(AimImg);
   Aim.scale=0.2;

  engine = Engine.create();
  world = engine.world;
 
bunny = new Bird(200,200)

wall1 = new Ground(660,-5,1369,10);
wall2 = new Ground(660,659,1369,10);
wall3 = new Ground(-3,325,10,634);
wall4 = new Ground(1352,325,10,634);


}

function draw() {
 
 
  if (gameState === "serve") {
    background(backImg);
    
    start.visible=true;
    Aim.visible=false;
   
    if (mousePressedOver(start)){
      gameState=play
    }



  }else if (gameState === play) {
    background(back2Img);
    bom =createSprite(560,514)
    bom.addImage(bomImg)
    bom.scale=0.065
    
    start.visible=false;
    Aim.visible=true;
   
    Aim.x=mouseX;
    Aim.y=mouseY;

    Engine.update(engine );
    bunny.display();
    
    wall1.display();
    wall2.display();
    wall3.display();
    wall4.display();

   


  }
   



  
 


  drawSprites();
}

function mouseDragged() {
 // Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}


function bomb(){
  bom =createSprite(660,614)
  bom.addImage(bomImg)
  bom.scale=0.1

}


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "red";
  movingRect = createSprite(400,400,80,30);
  movingRect.shapeColor = "red";
  S1 = createSprite(300,100,20,20);
  S1.shapeColor = "yellow";
  S1.velocityY = 2;
  S2 = createSprite(300,400,20,20);
  S2.shapeColor = "black";
  S2.velocityY = -2;
  sprite1 = createSprite(200,200,20,20)
  sprite1.shapeColor = "violet"
}

function draw() {
  background(255,255,255);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  if(isTouching(sprite1, movingRect)){
    movingRect.shapeColor = "green";
    sprite1.shapeColor = "green";
  }else{
    movingRect.shapeColor = "violet";
    sprite1.shapeColor = "violet";
  }
bounceOff(S1,S2);
drawSprites();
}

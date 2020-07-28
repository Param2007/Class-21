var movingRect, fixedRect, object1, object2, ob1, ob2;

function setup() {
  createCanvas(800,400);

  object1 = createSprite(200,100,50,50);
  object1.velocityY = 5;
  object1.shapeColor = "white";

  object2 = createSprite(200,400,50,50);
  object2.velocityY = -5;
  object2.shapeColor = "red";

  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "white";
  fixedRect.visible = false;

  movingRect = createSprite(40,10,100,45);
  movingRect.shapeColor = "blue";
  movingRect.visible = false;

  ob1 = createSprite(100,100,40,50);
  ob1.velocityX = 5;
  ob1.shapeColor = "cyan";

  ob2 = createSprite(600,100,40,50);
  ob2.velocityX = -5;
  ob2.shapeColor = "grey";

}

function draw() {
  background(0);  

  movingRect.y = World.mouseY;
  movingRect.x = World.mouseX;

  bounceOff(ob1,ob2);
  bounceOff(object1,object2);

  if(collide(object1,object2)) {

    object1.shapeColor = "yellow";
    object2.shapeColor = "grey";
  }
  else{
    object1.shapeColor = "white";
    object2.shapeColor = "red";

  }
  drawSprites();
}

function bounceOff (object1, object2) {

  if(object1.x - object2.x < object1.width/2 + object2.width/2 &&
    object2.x - object1.x < object1.width/2 + object2.width/2) {

    object1.velocityX = object1.velocityX * (-1);
    object2.velocityX = object2.velocityX * (-1);
  }

  if(object1.y - object2.y < object1.height/2 + object2.height/2 &&
    object2.y - object1.y < object1.height/2 + object2.height/2) {
  
    object1.velocityY = object1.velocityY * (-1);
    object2.velocityY = object2.velocityY * (-1);
  
  }
}

function collide (object1, object2) {

  if(object1.x - object2.x < object2.width/2 + object1.width/2 &&
    object2.x - object1.x < object2.width/2 + object1.width/2 &&
    object1.y - object2.y < object2.height/2 + object1.height/2 &&
    object2.y - object1.y < object2.height/2 + object1.height/2) {
    return true;
  }
  else {
    return false;
  }
}
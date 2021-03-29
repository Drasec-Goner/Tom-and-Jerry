var ground, groundImg;
var cat, catImg, catRu, catHappy; 
var mouse, mouseImg, mouseTaunt, mouseGift;
function preload() {
    groundImg = loadImage("garden.png");

    mouseImg = loadAnimation("mouse4.png");

    mouseTaunt = loadAnimation("mouse2.png", "mouse3.png");

    mouseGift = loadAnimation("mouse1.png");

    catImg = loadAnimation("cat1.png");

    catRun = loadAnimation("cat2.png", "cat3.png");

    catHappy = loadAnimation("cat4.png");
}

function setup(){
    createCanvas(1000,800);
    
    ground = createSprite(340, 200);
    ground.addImage("Ground", groundImg);
    ground.scale = 0.7;

    cat = createSprite(500, 340, 20, 100);
    cat.addAnimation("cat", catImg);
    cat.scale=0.1;
    
    mouse = createSprite(200, 340, 10, 40);
    mouse.addAnimation("mouse", mouseImg);
    mouse.scale = 0.1;

}

function draw() {

    background(255);
    //Write condition here to evalute if cat and mouse collide

    if (cat.x - mouse.x < cat.width - mouse.width) {
        cat.velocityX = 0;
        cat.addAnimation("Happy", catHappy);
        cat.changeAnimation("Happy");
        cat.x = 250;
 
        mouse.addAnimation("Gift", mouseGift);
        mouse.changeAnimation("Gift");
        cat.bounce(mouse);
     }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode === LEFT_ARROW) {

    cat.velocityX = -5;
    cat.addAnimation("Cat Run", catRun);
    cat.changeAnimation("Cat Run");

    mouse.addAnimation("Mouse Taunt", mouseTaunt);
    mouse.changeAnimation("Mouse Taunt");
}


}

var cat,catImage,garden,gardenImage,catrunning;
var mouse,mouseImage,mouseDancing,mouse4,cat4;


function preload() {
   
   catImage = loadImage("Images/cat1.png");
   gardenImage = loadImage("Images/garden.png")
   catrunning = loadAnimation("Images/cat2.png","Images/cat3.png");
   mouseImage = loadImage("Images/mouse1.png");
   mouseDancing = loadAnimation("Images/mouse2.png","Images/mouse3.png")
   mouse4 = loadAnimation("Images/mouse4.png");
   cat4 = loadAnimation("Images/cat4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    
    garden = createSprite(500,400);
    garden.addImage(gardenImage);

    garden.scale = 1;
    
    cat = createSprite(900,640);
    cat.addImage(catImage);
    cat.scale = 0.13;

    mouse = createSprite(250,640);
    mouse.addImage(mouseImage);
    mouse.scale = 0.1;
}



function draw() {

    
    //Write condition here to evalute if tom and jerry collide
if(cat.x - mouse.x < (cat.width - mouse.width)/2){
    mouse.addAnimation("mouseLast",mouse4)
    mouse.changeAnimation("mouseLast");

    cat.addAnimation("catLast", cat4);
    cat.changeAnimation("catLast");
    cat.velocityX = 0;
    cat.x = 310;
}





    








    drawSprites();
    
    
    
   
}
function keyPressed(){
    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5;
        cat.addAnimation("catImg2", catrunning);
        cat.changeAnimation("catImg2");

        mouse.addAnimation("mouseImg2", mouseDancing);
        mouse.changeAnimation("mouseImg2");
        
    }
}



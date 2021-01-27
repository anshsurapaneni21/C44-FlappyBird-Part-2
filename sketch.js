var player;

var topObstacleGroup, bottomObstacleGroup;

var gameState;

var BottomBlockimg, TopBlockimg;

var DayBackground, NightBackground;

var FlappyBird;

function preload(){
    FlappyBird = loadImage("images/FlappyBird.png");

    BottomBlockimg = loadImage("images/BottomBlockLarge.png");
    TopBlockimg = loadImage("images/TopBlockLarge.png");

    DayBackground = loadImage("images/FlappyBirdBackgroundDay.png");
    NightBackground = loadImage("images/FlappyBirdBackgroundNight.png");
}


function setup(){
    createCanvas(displayWidth, displayHeight);

    player = createSprite(0,height/2,50,50);
    player.velocityX = 1;
    player.addImage(FlappyBird);
    player.scale = 0.5;

    topObstacleGroup = new Group();

    bottomObstacleGroup = new Group();

    gameState = "PLAY";

}

function draw(){
    background(0);

    if(gameState = "PLAY"){
        if(keyDown("space")){
            console.log("game");
            player.velocityY = -5;
        }
        player.velocityY+=0.5;
        topObstacles();
        bottomObstacles();

    }

    drawSprites();
}

function topObstacles(){
    if(frameCount%100 === 0){
        var topObstacle = createSprite(width,height/random(8,12),50,random(100,350));
        topObstacle.velocityX = -6;
        topObstacle.lifetime = width/6;
        topObstacle.addImage(TopBlockimg);
        topObstacleGroup.add(topObstacle);
        
    }
}

function bottomObstacles(){
    if(frameCount%100 === 0){
        var bottomObstacle = createSprite(width,height-random(10,50),50,random(100,350));
        bottomObstacle.velocityX = -6;
        bottomObstacle.lifetime = width/6;
        bottomObstacle.addImage(BottomBlockimg);
        topObstacleGroup.add(bottomObstacle);
    }

}
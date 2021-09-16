var scoreboard = document.getElementById("score");
var canvas = document.getElementById("myCanvas");
var graphics = canvas.getContext("2d");

var A = 65;
var D = 68;
var W = 87;
var S = 83;
var LEFT = 37;
var RIGHT = 39;
var UP = 38;
var DOWN = 40;



var length = 5;
var score =0;

var bg = "#000000";
var snake = "#561082";
var apple = " #C4B454";
var head = "#30084d";
var eat = "#FFFFFF";
var collide = "#FF0000";
var grayed = "#91919166";
var gameover = "#FF0000CC"


var tileSize=25;

var velX = 0;
var velY = 0;
posX = posY = tile(2); //initial position

var appleX;
var appleY;

var path = []; //tracks path of snake
var length = 5; // length of snake

var paused = false;
var collision = false;

var speed = 185;
var interval;

window.onload = function(){
    document.addEventListener("keydown",changeDir);
    start();
    newApple();
}

function start(){
    interval = window.setInterval(update,speed);
}

function stop(){
    velX=velY=0;
}

function update(){
    if(!paused && !collision){
        posX += velX;
        posY += velY;
        score = path.length -5;
        if(score < 0)
            score = 0;
        scoreboard.innerHTML = "Score: " + score;
        reset();
        //drawGrid();
        drawSnake();
        drawApple();
        checkCollisions();
    }
}

function drawGrid(){
    for(var i =1;i < canvas.width/tileSize;i++){
        graphics.moveTo(i*tileSize,0);
        graphics.lineTo(i*tileSize,canvas.height);
        graphics.strokeStyle="gray";
        graphics.lineWidth =0.01;
        graphics.stroke();
    }
    for(var i =1;i < canvas.height/tileSize;i++){
        graphics.moveTo(0,i*tileSize);
        graphics.lineTo(canvas.width,i*tileSize);
        graphics.strokeStyle="gray";
        graphics.lineWidth =0.01;
        graphics.stroke();
    }
}

function drawSnake(){    
    if(posX < 0)
        posX = canvas.width-tileSize;
    if(posY < 0)
        posY = canvas.height-tileSize;
    if(posX > canvas.width-tileSize)
        posX = 0;
    if(posY > canvas.height-tileSize)
        posY = 0;
        
    for(var i = 0; i < path.length;i++){
        if(i == path.length-1)
            graphics.fillStyle=head;
        else
            graphics.fillStyle=snake;
        graphics.fillRect(path[i].posX,path[i].posY,tileSize,tileSize);
    }

    graphics.strokeStyle = bg;
    for(var i = 0; i < path.length;i++){
        graphics.strokeRect(path[i].posX,path[i].posY,tileSize,tileSize);
    }



    //places new position at posX,posY every frame
    path.push({posX:posX,posY:posY});
    //deletes all posX,posY from path array until path array == length
    while(path.length > length){
        path.shift();
    }
}

function drawApple(){
    graphics.fillStyle = apple;
    graphics.fillRect(tile(appleX),tile(appleY),tileSize,tileSize);
    graphics.strokeStyle = bg;
    graphics.strokeRect(tile(appleX),tile(appleY),tileSize,tileSize);

}

function newApple(){
    var min = 0;
    var max = (canvas.width/tileSize)-1;
    appleX = (Math.floor(Math.random()*(max+1)));
    appleY = (Math.floor(Math.random()*(max+1)));
}

function checkCollisions(){
    if(posX == tile(appleX) && posY == tile(appleY)){
        length++;
        newApple();
        graphics.strokeStyle = eat;
        for(var i = 0; i < path.length;i++){
            graphics.strokeRect(path[i].posX,path[i].posY,tileSize,tileSize);
    }
    }
    for(var i = 0; i < path.length-1;i++){
        if(path[path.length-1].posX == path[i].posX && path[path.length-1].posY == path[i].posY && (velX+velY!=0)){
            graphics.strokeStyle = collide;
            for(var j = 0; j < path.length; j++)
                graphics.strokeRect(path[j].posX,path[j].posY,tileSize,tileSize);
            stop();
            collision = true;

            graphics.fillStyle = gameover;
            graphics.fillRect(0,0,canvas.width,canvas.height);
            graphics.font = "30px Bebas Neue";
            graphics.textAlign = "center";
            graphics.fillStyle = apple;
            graphics.fillText("Game Over",canvas.width/2,canvas.height/2);

            break;
        }
    }
}

function reset(){
    graphics.fillStyle = bg;
    graphics.fillRect(0,0,canvas.width,canvas.height);
}

function tile(x){
    return x*tileSize;
}

function changeDir(event){
    if(!collision){
        switch(event.keyCode){
            case W:
                if(velY == 0){
                    velY = -tileSize;
                    velX = 0;
                }
                break;
            case A:
                if(velX == 0){
                    velX = -tileSize;
                    velY = 0;
                }
                break;
            case S:
                if(velY == 0){
                    velY = tileSize;
                    velX = 0;
                }
                break;
            case D:
                if(velX == 0){
                    velX = tileSize;
                    velY = 0;
                }
                break;
            case UP:
                if(velY == 0){
                    velY = -tileSize;
                    velX = 0;
                }
                break;
            case LEFT:
                if(velX == 0){
                    velX = -tileSize;
                    velY = 0;
                }
                break;
            case DOWN:
                if(velY == 0){
                    velY = tileSize;
                    velX = 0;
                }
                break;
            case RIGHT:
                if(velX == 0){
                    velX = tileSize;
                    velY = 0;
                }
                break;
        }
    }
}

function buttonsDir(x){
    if(!collision){
        switch(x.id){
            case "up":
                if(velY == 0 ){
                    velY = -tileSize;
                    velX = 0;
                }
                break;
            case "down":
                if(velY == 0 ){
                    velY = tileSize;
                    velX = 0;
                }
                break;
            case "left":
                if(velX == 0 ){
                    velX = -tileSize;
                    velY = 0;
                }
                break;
            case "right":
                if(velX == 0 ){
                    velX = tileSize;
                    velY = 0;
                }
                break;
        }
    }
}

function pause(){
    if(paused)
        paused = false;
    else{
        paused = true;
        graphics.fillStyle = grayed;
        graphics.fillRect(0,0,canvas.width,canvas.height);
        graphics.font = "30px Bebas Neue";
        graphics.textAlign = "center";
        graphics.fillStyle = apple;
        graphics.fillText("Paused",canvas.width/2,canvas.height/2);
    }
}

function restart(){
    path = [];
    score = 0;
    length = 5;
    posX = posY = tile(2);
    velX = velY = 0;
    collision = false;
    newApple();
}

/////////////////// Change Speed Buttons Active Status//////////////////////
var buttons = document.getElementsByClassName("speed-button");
function switchSpeed(current){
    for(var i = 0; i < buttons.length;i++){
        buttons[i].className = "speed-button";
    }
    current.className += " active";
    var name = current.textContent || current.innerText;
    switch(name){
        case "Slow":
            speed = 185;
            break;
        case "Medium":
            speed = 120;
            break;
        default:
            speed = 90;
            break;
    }
    restart();
    clearInterval(interval);
    start();
}


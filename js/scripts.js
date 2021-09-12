
//Navbar Visibility
window.onscroll = function() {scroll()};

var landing = document.getElementById("landingPage");

function scroll(){
    var pixels = landing.offsetHeight-90;
    if(document.body.scrollTop >  pixels|| document.documentElement.scrollTop > pixels){
        document.getElementById("navbar").style.top = "0";
    }
    else{
        document.getElementById("navbar").style.top = "-100px";
    }
}

//Switch Skills Active Buttons
var btnContainer = document.getElementById("buttonsContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    if(this.className != "btn color-1 active"){
        for(var j=0; j<btns.length;j++){
            if(btns[j].className == "btn color-1 active"){
                btns[j].className = "btn color-1"
            }
        }
        this.className +=  " active";
    }
    var languages = document.getElementsByClassName("language");
    var software = document.getElementsByClassName("software");
    var other = document.getElementsByClassName("other");

    if(document.getElementById("language").className == "btn color-1 active"){
        for(var x=0;x<languages.length;x++){
            languages[x].style.display = "flex";
        }
        for(var x=0;x<software.length;x++){
            software[x].style.display = "none";
        }
        for(var x=0;x<other.length;x++){
            other[x].style.display = "none";
        }
    }
    else if(document.getElementById("software").className == "btn color-1 active"){
       for(var x=0;x<languages.length;x++){
            languages[x].style.display = "none";
        }
        for(var x=0;x<software.length;x++){
            software[x].style.display = "flex";
        }
        for(var x=0;x<other.length;x++){
            other[x].style.display = "none";
        }
    }
    else{
        for(var x=0;x<languages.length;x++){
            languages[x].style.display = "none";
        }
        for(var x=0;x<software.length;x++){
            software[x].style.display = "none";
        }
        for(var x=0;x<other.length;x++){
            other[x].style.display = "flex";
        }
    }
  });
}

//Changes Skill section layout
function resize(){
    var width = window.innerWidth;
    if(width <= 950){
        document.getElementById("buttonsContainer").className = "btn-group btn-group-md";
    }
    else{
        document.getElementById("buttonsContainer").className = "btn-group-vertical btn-group-lg";
    }
}
window.onload = resize;
window.addEventListener("resize",resize);

var canvas = document.getElementById("myCanvas");
canvas.style.backgroundColor='black';
var graphics = canvas.getContext("2d");
canvas.width= 700;
canvas.height=500;

var forest = new Image();
forest.src = "img/forest.jpeg";
graphics.drawImage(forest,0,0);
var start = 0;

var konoha = new Image();
konoha.src = "img/konoha.jpeg"
graphics.drawImage(konoha,canvas.width,0);
var position = canvas.width

var mario = new Image();
mario.src="img/Mario.jpeg";
graphics.drawImage(mario,canvas.width*2,0);
position2=canvas.width*2;

graphics.font = "50px Comic Sans MS";
graphics.fillStyle= 'black';
graphics.fillRect(canvas.width/7,canvas.height/5,500,150);
graphics.fillStyle= 'white';
graphics.textAlign="center";
graphics.fillText("Jonathan Nguyen",canvas.width/2, canvas.height/3);
graphics.font = "30px Comic Sans MS";
graphics.fillRect(100,canvas.height/3+20,500,2);
graphics.fillText("UCSC Computer Science",canvas.width/2, (canvas.height/2)-20);

var sammy=new Image();
sammy.src="img/sammy.png"
graphics.drawImage(sammy,(canvas.width/2)-60,(canvas.height/3)*2);

//move bg
/*
function movebg(event){
    if(event.keyCode == 65){
        start+=1;
        position += 1;
        position2+=1;
        graphics.drawImage(forest,start,0);
        graphics.drawImage(konoha,position,0);
        graphics.drawImage(mario,position2,0);
        graphics.drawImage(sammy,(canvas.width/2)-60,(canvas.height/3)*2);
        graphics.fillStyle= 'black';
        graphics.fillRect(canvas.width/7,canvas.height/5,500,150);
        graphics.fillStyle= 'white';
        graphics.textAlign="center";
        graphics.font = "50px Comic Sans MS";
        graphics.fillText("Jonathan Nguyen",canvas.width/2, canvas.height/3);
        graphics.font = "30px Comic Sans MS";
        graphics.fillRect(100,canvas.height/3+20,500,2);
        graphics.fillText("UCSC Computer Science",canvas.width/2, (canvas.height/2)-20);
    }
    if(event.keyCode == 68){
        start-=1;
        position -= 1;
        position2-=1;
        graphics.drawImage(forest,start,0);
        graphics.drawImage(konoha,position,0);
        graphics.drawImage(mario,position2,0);
        graphics.drawImage(sammy,(canvas.width/2)-60,(canvas.height/3)*2);
        graphics.fillStyle= 'black';
        graphics.fillRect(canvas.width/7,canvas.height/5,500,150);
        graphics.fillStyle= 'white';
        graphics.textAlign="center";
        graphics.font = "50px Comic Sans MS";
        graphics.fillText("Jonathan Nguyen",canvas.width/2, canvas.height/3);
        graphics.font = "30px Comic Sans MS";
        graphics.fillRect(100,canvas.height/3+20,500,2);
        graphics.fillText("UCSC Computer Science",canvas.width/2, (canvas.height/2)-20);
    }
    
}
*/
document.addEventListener("keydown",movebg);

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
        document.getElementById("buttonsContainer").className = "btn-group btn-group-md"
    }
    else{
        document.getElementById("buttonsContainer").className = "btn-group-vertical btn-group-lg"
    }
}

window.addEventListener("resize",resize);
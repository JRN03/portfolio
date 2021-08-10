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
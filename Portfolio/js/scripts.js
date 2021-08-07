window.onscroll = function() {scroll()};

function scroll(){
    if(document.body.scrollTop > 850 || document.documentElement.scrollTop > 850){
        document.getElementById("navbar").style.top = "0";
    }
    else{
        document.getElementById("navbar").style.top = "-80px";
    }
}
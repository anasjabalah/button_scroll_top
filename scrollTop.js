

var buttonTop = document.getElementById("button");

window.onscroll = function(){

    if(pageYOffset >= 400){
        buttonTop.classList.add("buttontop");
    }else{
        buttonTop.classList.remove("buttontop");
    }
}


buttonTop.onclick = function(){
    window.scrollTo(0,0);
}
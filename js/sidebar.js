var isMenuOpen = false;
function redirect(path){
    window.location.pathname = path;
}

function menu(){
    if(isMenuOpen){
        document.getElementById("menuMobile").style.opacity = 0;
        document.getElementById("menuMobile").style.display = "none";
        isMenuOpen = false;
    }else{
        document.getElementById("menuMobile").style.opacity = 1;
        document.getElementById("menuMobile").style.display = "block";
        isMenuOpen = true;
    }
}
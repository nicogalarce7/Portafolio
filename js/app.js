const menu = document.querySelector(".menu");
const OpenMenuBtn = document.querySelector(".open-menu");
const CloseMenuBtn = document.querySelector(".close-menu");

function toogleMenu(){
    menu.classList.toggle("menu_opened");

}

OpenMenuBtn.addEventListener("click", toogleMenu);
CloseMenuBtn.addEventListener("click", toogleMenu);

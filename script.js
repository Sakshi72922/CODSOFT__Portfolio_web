const hamburger = document.querySelector(".hamburger");
const menu_bar = document.querySelector("navbar-menu .menu-bar");
hamburger.addEventListner("Click", () => {
    menu_bar.classList.toggle("Show")
});
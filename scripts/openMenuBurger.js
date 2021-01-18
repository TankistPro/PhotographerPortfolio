const borgerIcon = document.querySelector(".burger-icon"),
    burgerMenu = document.querySelector(".menu-burger__block"),
    closeBurgerIcon = document.querySelector(".burger-close");

const openBurgerMenu = () => {
    burgerMenu.style.transition = '.4s all';
    burgerMenu.style.left = 0;
}

const closeBurgerMenu = () => {
    burgerMenu.style.left = "-100%";
}

borgerIcon.addEventListener('click', openBurgerMenu);
closeBurgerIcon.addEventListener('click', closeBurgerMenu)
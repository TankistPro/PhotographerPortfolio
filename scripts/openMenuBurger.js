const borgerIcon = document.querySelector(".burger-icon"),
    burgerMenu = document.querySelector(".menu-burger__block"),
    closeBurgerIcon = document.querySelector(".burger-close"),
    socialNavBlock = document.querySelector(".menu-items__social.nav");

const visibaleSocialNavBlock = (timeout, opacity) => {
    setTimeout(() => {
        socialNavBlock.style.transition = `${timeout}ms all`;
        socialNavBlock.style.opacity = opacity;
    }, timeout)
};

const openBurgerMenu = () => {
    burgerMenu.style.transition = '.4s all';
    burgerMenu.style.left = 0;
    visibaleSocialNavBlock(200, 0);
};

const closeBurgerMenu = () => {
    burgerMenu.style.left = "-100%";
    visibaleSocialNavBlock(200, 1);
};

borgerIcon.addEventListener('click', openBurgerMenu);
closeBurgerIcon.addEventListener('click', closeBurgerMenu);
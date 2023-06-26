const mobileMenu = document.querySelector('.mobile-menu');
const btnMenuHide = document.querySelector('.mobile-menu__btn');
const btnMenuShow = document.querySelector('.nav-btn');

btnMenuShow.addEventListener('click', () => {
    mobileMenu.classList.add('show-menu');
});
btnMenuHide.addEventListener('click', () => {
    mobileMenu.classList.remove('show-menu');
});

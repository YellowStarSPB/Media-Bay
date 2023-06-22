//слайдер кейсов
const carousel = document.querySelector('.carousel');
const firstItem = carousel.querySelectorAll('.carousel__item')[0];

let isDragStart = false;
let prevPageX = 0;
let prevScrollLeft = 0;
let firstItemWidth = firstItem.clientWidth + 20;

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
};

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove('dragging');
};

const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    carousel.classList.add('dragging');
    let positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
};

carousel.addEventListener('mousemove', dragging);
carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('mouseup', dragStop);
carousel.addEventListener('mouseleave', dragStop);

//sliderBar
const itemCarousel = [...carousel.querySelectorAll('.carousel__item')];
const scrollBar = document.querySelector('.scroll-bar');
const scrollBarCircle = scrollBar.querySelector('.scroll-bar__circle');
let currentIndex = 0;
let scrollBarPosition = scrollBar.offsetWidth / 4;

scrollBarCircle.style.transform = `translateX(${scrollBarPosition}px)`;

scrollBar.addEventListener('click', () => {
    if (scrollBarPosition >= scrollBar.offsetWidth) {
        scrollBarPosition = scrollBar.offsetWidth / 4;
        currentIndex = 0;
        scrollBarCircle.style.transform = `translateX(${scrollBarPosition}px)`;
        console.log(currentIndex);
        itemCarousel.forEach((item, index) => {
            item.classList.remove('active-slide');
            if (index === currentIndex) {
                item.classList.add('active-slide');
            }
        });
        return;
    }
    currentIndex++;
    scrollBarPosition += scrollBar.offsetWidth / 4;
    scrollBarCircle.style.transform = `translateX(${scrollBarPosition}px)`;
    itemCarousel.forEach((item, index) => {
        item.classList.remove('active-slide');
        if (index === currentIndex) {
            item.classList.add('active-slide');
        }
    });
});

itemCarousel.forEach((item) => {
    item.addEventListener('click', (e) => {
        if ([...item.classList].includes('active-slide')) {
            item.classList.remove('active-slide');
        } else {
            item.classList.add('active-slide');
        }
    });
});

const mobileMenu = document.querySelector('.mobile-menu');
const btnMenuHide = document.querySelector('.mobile-menu__btn');
const btnMenuShow = document.querySelector('.nav-btn');


btnMenuShow.addEventListener('click', () => {
    mobileMenu.classList.add('show-menu');

});
btnMenuHide.addEventListener('click', () => {
    mobileMenu.classList.remove('show-menu');

});

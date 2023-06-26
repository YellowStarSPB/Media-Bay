// //слайдер кейсов
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

// //sliderBar
const itemCarousel = [...carousel.querySelectorAll('.carousel__item')];
const range = document.querySelector('#range');

range.addEventListener('mousemove', (e) => {
    if (+e.target.value <= 25) {
        itemCarousel[0].classList.add('active-slide');
    } else {
        itemCarousel[0].classList.remove('active-slide');
    }
    if (+e.target.value > 25 && +e.target.value <= 50) {
        itemCarousel[1].classList.add('active-slide');
    } else {
        itemCarousel[1].classList.remove('active-slide');
    }
    if (+e.target.value > 50 && +e.target.value <= 75) {
        itemCarousel[2].classList.add('active-slide');
    } else {
        itemCarousel[2].classList.remove('active-slide');
    }
    if (+e.target.value > 75 && +e.target.value <= 100) {
        itemCarousel[3].classList.add('active-slide');
    } else {
        itemCarousel[3].classList.remove('active-slide');
    }
});



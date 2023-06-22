const btn = document.querySelector('.slider__button');
const item = [...document.querySelectorAll('.item')];
const track = document.querySelector('.preview__slider-track');
const widthImg = document.querySelector('.item__img').clientWidth + 21;
console.log(item);
let currentSlide = 0;
let positionDiff = 0;
let isCloned = false;

const startSlide = () => {
    item.forEach((slide, index) => {
        index === currentSlide
            ? slide.classList.add('active')
            : slide.classList.remove('active');
    });
};
startSlide();

btn.addEventListener('click', () => {
    track.style.transition = ``;
    if (currentSlide === 0) {
        if (!isCloned) {
            item[0].classList.remove('active');
            let clone = item[0].cloneNode(true);
            let clone2 = item[1].cloneNode(true);
            track.append(clone);
            track.append(clone2);
            isCloned = true;
        }
    }
    if (currentSlide === 1) {
        track.style.transform = `translateX(${(positionDiff += -widthImg)}px)`;
        currentSlide++;

        setTimeout(() => {
            currentSlide = 0;
            positionDiff = 0;
            track.style.transition = `transform 1ms ease-in-out`;
            track.style.transform = `translateX(${positionDiff}px)`;
            startSlide();
        }, 500);
        startSlide();
        return;
    }
    currentSlide++;
    console.log(currentSlide);
    track.style.transform = `translateX(${(positionDiff += -widthImg)}px)`;
    setTimeout(() => {
        startSlide();
    }, 500);
    console.log(item);
});

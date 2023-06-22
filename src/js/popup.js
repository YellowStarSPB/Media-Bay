class Popup {
    constructor(options) {
        //элемент на который кликнули
        this._element = document.querySelector(options.id);
        //получаем нужный попап
        this._popup = document.querySelector(options.popup);
        this._childrenPopup = this._popup.querySelector('.popup');
        //элементы управления слайдером в попап
        this._arrowBtn = this._popup.querySelectorAll('.navigation__btn');
        this._closeBtn = this._popup.querySelector('.popup__close-btn');
        //элемент смещения
        this._track = this._popup.querySelector('.slider__track');
        //картинка
        this._firstImg = this._track.querySelectorAll('img')[0];
        //количество слайдов
        this._countItem = this._track.querySelectorAll('img').length - 1;
        //стартовая позиция слайдера
        this._startPosition = 0;
        this._index = 0;
        this._element ? this.showPopupByClickElement() : null;
        this.closeForEsc();
        this.slide();
        this.closeForBtn();
        this.closeOutside();
        this.renderDots();
        // this.timeToOpenPopup();
        // this.timeToClosePopup();
    }
    // timeToOpenPopup() {
    //     setTimeout(() => {
    //         this._popup.style.display = 'block';
    //         this.stopScroll();
    //     }, 3000);
    // }
    // timeToClosePopup() {
    //     setTimeout(() => {
    //         this._popup.style.display = 'none';
    //         this.stopScroll();
    //     }, 5000);
    // }
    renderDots() {
        let dots = '';
        Array(this._countItem + 1)
            .fill(null)
            .forEach((_, index) => {
                const newDot = `
                <div class="dots ${this._index === index ? 'active-dot' : ''}"></div>
                `;
                dots += newDot;
            });
        this._childrenPopup.querySelector('.popup__right .popup__dots').innerHTML = dots;

        [
            ...this._childrenPopup.querySelectorAll('.popup__right .popup__dots .dots'),
        ].forEach((item, indexEl) => {
            item.addEventListener('click', () => {
                this._index = indexEl;
                this._startPosition = indexEl * -this._firstImg.clientWidth;
                this._track.style.transform = `translateX(${this._startPosition}px)`;
                this.disabledArrow();
                this.renderDots();
            });
        });
    }
    stopScroll() {
        this._popup.style.display === 'block'
            ? document.body.classList.add('stopScroll')
            : document.body.classList.remove('stopScroll');
    }
    showPopupByClickElement() {
        this._element.addEventListener('click', (e) => {
            if (this._popup.style.display === 'block') {
                this._popup.style.display = 'none';
            } else {
                this._popup.style.display = 'block';
            }
            this.stopScroll();
        });
    }
    showPopup() {
        if (this._popup.style.display === 'block') {
            this._popup.style.display = 'none';
        } else {
            this._popup.style.display = 'block';
        }
        this.stopScroll();
    }
    closeForEsc() {
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this._popup.style.display = 'none';
            this.stopScroll();
        });
    }
    closeForBtn() {
        this._closeBtn.addEventListener('click', () => {
            this._popup.style.display = 'none';
            this.stopScroll();
        });
    }
    disabledArrow() {
        if (this._startPosition === -this._countItem * this._firstImg.clientWidth) {
            this._arrowBtn[0].disabled = true;
            this._arrowBtn[0].classList.add('disabled');
        } else {
            this._arrowBtn[0].disabled = false;
            this._arrowBtn[0].classList.remove('disabled');
        }
        if (this._startPosition < 0) {
            this._arrowBtn[1].disabled = false;
            this._arrowBtn[1].classList.remove('disabled');
        } else {
            this._arrowBtn[1].disabled = true;
            this._arrowBtn[1].classList.add('disabled');
        }
    }
    slide() {
        this._arrowBtn.forEach((item) => {
            item.addEventListener('click', () => {
                if (item.id === 'next') {
                    this._track.style.transform = `translateX(${(this._startPosition -=
                        this._firstImg.clientWidth)}px)`;
                    this._index++;
                } else {
                    this._track.style.transform = `translateX(${(this._startPosition +=
                        this._firstImg.clientWidth)}px)`;
                    this._index--;
                }
                this.renderDots();
                this.disabledArrow();
            });
        });
    }

    closeOutside() {
        this._popup.onclick = (e) => {
            if (!e.composedPath().includes(this._childrenPopup)) {
                this._popup.style.display = 'none';
                this.stopScroll();
            }
        };
    }
}
//для клика по первому элементу слайдера "кейсы"
const popupForCaseSlider = new Popup({ id: '#firstItem', popup: '.popupWrapper' });

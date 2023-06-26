const phoneMask = IMask(document.getElementById('phone'), {
    mask: '+{7}(000)000-00-00',
});

const allInput = [...document.querySelectorAll('.form input')].filter((_, index) => index !== 4)
const allMessage = [...document.querySelectorAll('form .is-empty')];

allInput.forEach((item, index) => {
    item.addEventListener('blur', () => {
        /* условие такое, так как в маске уже есть 3 элемента из коробки, да и валидации в целом мы не делаем поэтому максимально примитивно
        можно было оставить просто !item.value
        */
        if (item.value.length <= 3) {
            allMessage[index].classList.remove('completed-form');
            allMessage[index].innerHTML = 'Поле не может быть пустым';
            allMessage[index].classList.add('error-form');
        } else {
            allMessage[index].classList.remove('error-form');
            allMessage[index].innerHTML = 'Отлично!';
            allMessage[index].classList.add('completed-form');
        }
    });
});

//аккордеон
const accordionItem = [...document.querySelectorAll('.accordion__item')];
accordionItem.forEach((item) => {
    item.addEventListener('click', () => {
        const elBody = item.querySelector('.accordion__body');

        if ([...item.classList].includes('accordion__item_show')) {
            item.classList.remove('accordion__item_show');
            elBody.style.display = 'none';
        } else {
            item.classList.add('accordion__item_show');
            elBody.style['display'] = 'block';
            elBody.style['padding'] = 0;
            elBody.style['transition'] = `padding .5s ease`;
            elBody.offsetHeight;
            elBody.style['padding'] = '18px 0';
        }
    });
});

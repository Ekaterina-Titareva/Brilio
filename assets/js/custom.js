const loader = document.querySelector('.loader');
const content = document.querySelector('.main');
const marquee = document.querySelector('.list-unstyled');
const cursor = document.querySelector('.cursor');


// 9. Лоадер
window.onload = function() {
    loader.style.display = 'block';
    content.style.display = 'none';
    setTimeout(() => {
        loader.style.display = 'none';
        content.style.display = 'block';
    }, 2000);
};


// 6. Прокрутка галереи логотипов
const animation = anime({
    targets: marquee,
    translateX: [0, -marquee.scrollWidth / 2],
    duration: 20000,
    easing: 'linear',
    loop: true,
});
const elements = document.querySelectorAll('.marquee ul li');
elements.forEach(el => {
    el.addEventListener('mouseover', () => animation.pause());
    el.addEventListener('mouseout', () => animation.play());
});

// 8. Курсор
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    anime({
        targets: cursor,
        translateX: mouseX,
        translateY: mouseY,
        easing: 'easeOutQuad',
        duration: 50,
    });
});


const parallax = document.querySelector('#cover-image');
const navBar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + 'px';
    if (offset === 0) {
        parallax.style.backgroundPositionY = 0.1 + 'px';
    }
})
console.log('ok');
const menuBtn = document.querySelector('#menuBtn');
const navMenu = document.querySelector('#navbar')
menuBtn.addEventListener("click", function() {
    navMenu.classList.toggle('header__right-items--active');
});
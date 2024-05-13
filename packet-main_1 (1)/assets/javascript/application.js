console.log('ok');
const modalBtn = document.querySelector('#btn');
const modal = document.querySelector('#modal');
const modalClose = document.querySelector('#close');
modalBtn.addEventListener("click", function() {
    modal.classList.toggle('modal--active');
});
modalClose.addEventListener("click", function(){
    modal.classList.toggle('modal--active');
});
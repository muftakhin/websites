// open-close menu ----------------------------------------

let ml = document.querySelector('.menu_left');
let bml = document.querySelector('.button_left');
let bcml = document.querySelector('.button_left-close');

let mr = document.querySelector('.menu_right');
let bmr = document.querySelector('.button_right');
let bcmr = document.querySelector('.button_right-close');

bml.addEventListener('click', function() {
    ml.classList.add('menu_left-show');
    mr.classList.remove('menu_right-show');
});

bcml.addEventListener('click', function() {
    ml.classList.remove('menu_left-show');
});

bmr.addEventListener('click', function() {
    mr.classList.add('menu_right-show');
    ml.classList.remove('menu_left-show');
});

bcmr.addEventListener('click', function() {
    mr.classList.remove('menu_right-show');
});
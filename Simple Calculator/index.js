/*
let screen = document.querySelector('.screen');
let buttons = document.querySelectorAll('.btn');
let equal_btn = document.querySelector('.btn-equal');
let reset_btn = document.querySelector('.btn-reset');
let off_btn = document.querySelector('.btn-off');
let on_btn = document.querySelector('.btn-on');

on_btn.addEventListener('click', function (){
    screen.style.backgroundColor = '#EDFFBD';
})



function calculation(){
    buttons.forEach(function (btns) {
        btns.addEventListener('click', function () {
            let btn_value = btns.value;
            screen.value += btn_value;
        });
    });
    
    equal_btn.addEventListener('click', function () {
        if (screen.value === '') {
            screen.value = 'Please Enter';
        } else {
            let answer = eval(screen.value);
            screen.value = answer;
        }
    });
    
    reset_btn.addEventListener('click', function () {
        screen.value = '';
    })
}

// if(on_btn.innerText == 'ON'){
//     calculation();
// }

off_btn.addEventListener('click', function () {
    screen.style.backgroundColor = 'white';
    screen.value = '';
})*/


let screen = document.querySelector('.screen');
let buttons = document.querySelectorAll('.btn');
let equal_btn = document.querySelector('.btn-equal');
let reset_btn = document.querySelector('.btn-reset');
let off_btn = document.querySelector('.btn-off');
let on_btn = document.querySelector('.btn-on');


on_btn.addEventListener('click', cal_on);
function cal_on() {
    screen.style.backgroundColor = '#EDFFBD';
    on_btn.style.backgroundColor = 'green';

    buttons.forEach(function (btns) {
        btns.addEventListener('click', function () {
            let btn_value = btns.value;
            screen.value += btn_value;
        });
    });

    equal_btn.addEventListener('click', function () {
        if (screen.value === '') {
            screen.value = 'Please Enter';
        } else {
            let answer = eval(screen.value);
            screen.value = answer;
        }
    });

    reset_btn.addEventListener('click', function () {
        screen.value = '';
    })
};


// off_btn.addEventListener('click', cal_off);
// function cal_off(){
//     screen.style.backgroundColor = 'black';
//     screen.style.color = 'black';
//     screen.value = '';
//     on_btn.style.backgroundColor = '#0000FF';
// }








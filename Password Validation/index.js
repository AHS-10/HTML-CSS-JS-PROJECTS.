'use strict';

let conds = document.querySelectorAll('.passValidConds');
let inputPass = document.querySelector('#inputPass');
let inputEmail = document.querySelector('#inputEmail');
let ShowPass = document.querySelector('#ShowPass');
let label = document.querySelector('.label');
let login = document.querySelector('.login');
let EightDigits = new RegExp('(?=.{8,})');
let OneLower = new RegExp('(?=.*[a-z])');
let OneUpper = new RegExp('(?=.*[A-Z])');
let OneNum = new RegExp('(?=.*[0-9])');
let OneSpChar = new RegExp('(?=.*[!@#$%^&*])');
let Space = /^\S/;
let container = document.querySelector('.container');
let body = document.querySelector('#body');
let CapsWar = document.querySelector('.CapsWar');
let CnfrmPass = document.querySelector('#CnfrmPass');

let inputPassTrm = inputPass.value.trim();
let inputPEmailTrm = inputEmail.value.trim();


// FOR CAPSLOCK WARNING:
window.addEventListener('keyup', function (event) {
    var a = event.getModifierState('CapsLock');
    if (a) {
        CapsWar.innerHTML = 'WARNING! CapsLock is On';
    } else {
        CapsWar.innerHTML = '';
    }
});


inputPass.addEventListener('keyup', function () {
    if (EightDigits.test(inputPass.value) && Space.test(inputPass.value)) {
        conds[0].style.color = 'green';
    } else {
        conds[0].style.color = 'grey';

    }
    if (OneLower.test(inputPass.value)) {
        conds[1].style.color = 'green';
    } else {
        conds[1].style.color = 'grey';

    }
    if (OneUpper.test(inputPass.value)) {
        conds[2].style.color = 'green';
    } else {
        conds[2].style.color = 'grey';

    }
    if (OneNum.test(inputPass.value)) {
        conds[3].style.color = 'green';
    } else {
        conds[3].style.color = 'grey';

    }
    if (OneSpChar.test(inputPass.value)) {
        conds[4].style.color = 'green';
    } else {
        conds[4].style.color = 'grey';

    }
}

);


login.addEventListener('click', function (a) {
    a.preventDefault();

    if (!inputPass.value && !inputEmail.value) {
        alert('Please enter the email & password');
    }

    else if (!inputPass.value && inputEmail.value) {
        alert('Please enter the password');
    }

    else if (inputPass.value && !inputEmail.value) {
        alert('Please enter the email');
    }

    else if (EightDigits.test(inputPass.value) && OneLower.test(inputPass.value) && OneUpper.test(inputPass.value) && OneNum.test(inputPass.value) && OneSpChar.test(inputPass.value) && Space.test(inputPass.value)) {
        inputPass.value = '';
        inputEmail.value = '';
        alert('Your account has been created');
        conds.forEach(function (a) {
            a.style.color = 'grey';
        });
    }

    else if (!Space.test(inputPass.value)) {
        alert("Please enter the password without spaces!");
    }

    else if ((!EightDigits.test(inputPass.value) || !OneLower.test(inputPass.value) || !OneUpper.test(inputPass.value) || !OneNum.test(inputPass.value) || !OneSpChar.test(inputPass.value))) {
        alert("Fullfil all conditions!");
        conds.forEach(function (a) {
            if (a.style.color == 'grey') {
                a.style.color = 'red';
            }
        });
    }

});


// FOR SHOW & HIDE PASSWORD:
ShowPass.addEventListener('click', function () {
    if (inputPass.type === 'password') {
        inputPass.type = 'text';
        CnfrmPass.type = 'text';
        label.innerHTML = 'Hide password';
    } else {
        inputPass.type = 'password';
        CnfrmPass.type = 'password';
        label.innerHTML = 'Show password';

    }
});

// (?=.*[a-z])	The string must contain at least 1 lowercase alphabetical character
// (?=.*[A-Z])	The string must contain at least 1 uppercase alphabetical character
// (?=.*[0-9])	The string must contain at least 1 numeric character
// (?=.*[!@#$%^&*])	The string must contain at least one special character, but we are escaping reserved RegEx characters to avoid conflict
// (?=.{8,})	The string must be eight characters or longer
// /^\S/; If no space is found it returns true. That is if username is ABC DEF. It doesn't work if a space is in the beginning,


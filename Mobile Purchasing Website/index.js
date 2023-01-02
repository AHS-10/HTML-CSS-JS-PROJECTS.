'use strict';

// FOR PRODUCT SEARCHING...
let searchBar = document.querySelector('#searchBar');

searchBar.addEventListener('keyup', function () {
    let userSearch = searchBar.value.trim().toUpperCase();
    let productsMainDiv = document.querySelector('#productsMainDiv');
    let product = document.querySelectorAll('.product');
    // let productName = document.getElementsByTagName('h1');
    // let productName = productsMainDiv.getElementsByTagName("h1");
    let productName = document.querySelectorAll('.prdctName');

    for (var i = 0; i < productName.length; i++) {
        let match = product[i].querySelector('.prdctName').innerText.toUpperCase();
        if (match) {
            if (match.indexOf(userSearch) > -1) {
                product[i].style.display = '';
            } else {
                product[i].style.display = 'none';
            }
        }
    }
});


// FOR ADD TO CART:
let cartBtn = document.querySelectorAll('.cartBtn');
let counter = document.querySelector('.counter');
let cartBody = document.querySelector('.offcanvas-body');
let num = 0;

for(var z = 0; z < cartBtn.length; z++){
    let btn = cartBtn[z];
    cartBtn[z].addEventListener('click', addToCart);
    function addToCart() {
        if (btn.innerHTML == 'Add to cart') {
            num = num + 1;
            counter.innerText = num;
            btn.innerHTML = 'Remove from cart';
        } else {
            btn.innerHTML = 'Add to cart';
            num = num - 1;
            counter.innerText = num;

        }

    };
}

// // FOR ADD TO CART:
// let cartBtn = document.querySelectorAll('.cartBtn');
// let counter = document.querySelector('.counter');
// let cartBody = document.querySelector('.offcanvas-body');
// let num = 0;

// cartBtn.forEach(function (btn) {
//     btn.addEventListener('click', addToCart);
//     function addToCart() {
//         if (btn.innerText == 'Add to cart') {
//             num = num + 1;
//             counter.innerText = num;
//             btn.innerText = 'Remove from cart';
//         } else {
//             btn.innerText = 'Add to cart';
//             num = num - 1;
//             counter.innerText = num;
//         }

//     };
// });


// FOR REACT OF LOVE...
let loveReact = document.querySelectorAll('.fa-heart');

loveReact.forEach(function (heart) {
    heart.addEventListener('click', function () {
        if (heart.style.color == 'red') {
            heart.style.color = 'grey';
        } else {
            heart.style.color = 'red';
        }
    })
});


// FOR RATING:
let stars = document.querySelectorAll('.stars');

for (var i = 0; i < stars.length; i++) {
    let stAr = stars[i].querySelectorAll('.fa-star');
    let ratingOutput = stars[i].querySelector('.ratingOutput');
    console.log(ratingOutput);

    for (var a = 0; a < stAr.length; a++) {
        let starvalue = stAr[a].starnum = (a + 1);
        stAr[a].addEventListener('click', function () {

            ratingOutput.innerText = `You have rated ${starvalue} stars`;
            stAr.forEach(function (element, index) {
                if (index < starvalue) {
                    element.style.color = 'orange';
                } else {
                    element.style.color = 'grey';

                }
            })
        })
    }

};


// FOR PRODUCT QUANTITY...
let qt = document.querySelectorAll('.quantityCounter');

    for(var a = 0; a < qt.length; a++){
        let p_Qb = qt[a].querySelector('.qntyBox');
        let p_Qadd = qt[a].querySelector('.addQnty');
        let p_Qless = qt[a].querySelector('.lessQnty');
        let num = 0;
        p_Qadd.addEventListener('click',function(){
            if(p_Qb.innerHTML == '5'){
                alert("You can't buy more 5 quantity of a product");
                num = 5;
            p_Qb.innerHTML = num;
            }else{
            num = num + 1;
            p_Qb.innerHTML = num;
        }
        })
        p_Qless.addEventListener('click',function(){
            if(p_Qb.innerHTML == '0'){
                num = 0;
            p_Qb.innerHTML = num;
            }else{
            num = num - 1;
            p_Qb.innerHTML = num;
        }
        })
    };


// 

// <button class="fw-semibold cartBtn p-2  fw-semibold">Add to cart</button>














/*
    for (var i = 0; i < productName.length; i++) {
        let match = product[i].getElementsByTagName('h5')[0];
        if (match) {
            let textValue = match.textContent || match.innerHTML;
            if (textValue.toUpperCase().indexOf(userSearch) > -1) {
                product[i].style.display = '';
            } else {
                product[i].style.display = 'none';
            }
        }
    }
    */
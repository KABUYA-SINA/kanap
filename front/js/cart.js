// variables 

const cartItems = document.getElementById('cart__items'); 

// let urlParams = (new URL(location)).searchParams;
// let productId = urlParams.get('id');

fetch('http://localhost:3000/api/products/')
    .then(function (res) {
        if (res.ok) {
            res.json()
                .then(function (product) {
                    cartItems.innerHTML = `<img src="${product.imageUrl}" alt="${product.altTxt}">`
                   
                });
        }

    })
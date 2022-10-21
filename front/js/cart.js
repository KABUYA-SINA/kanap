// variables 
const page = document.location.href; 
const cartItems = document.getElementById('cart__items'); 


if(page.match('carte')){
    fetch('http://localhost:3000/api/products')
        .then(function (res) {
            if (res.ok) {
                res.json()
                    .then(function (product) {
                        //cartItems.innerHTML = `<img src="${product.imageUrl}" alt="${product.altTxt}">`

                    });
            }

        })
        .catch(() =>{

        }); 
}
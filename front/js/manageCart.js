const LocalStorageAccess = localStorage; 

function getAllProducts(){
    const products = LocalStorageAccess.getItem('KanapProduct');    ///?.toString(); 
    if(!products){
        return {}
    }
 return JSON.parse(products); 
}


function UpdateStorage(items){
    LocalStorageAccess.setItem('KanapProduct', JSON.stringify(items)); 

}

function addToCart(id, color, quantity){
    let products = getAllProducts(); 

    if (products[id]){
        if(products[id][color]){
            if (parseInt(products[id][color]) + parseInt(quantity) < 100){
                products[id][color] = parseInt(products[id][color]) + parseInt(quantity);
            }else {
                alert ('Only 100 quantity are allowed')
                return
            }
        }else{
            products[id][color] = parseInt(quantity); 
        }

    }

    if (!products[id]) {
        products[id] = {
            [color]:parseInt(quantity)
        }


    }


    UpdateStorage(products);
    alert('Your products has been added in the basket')

}


function removeProduct(id, color){
    let products = getAllProducts();
    if(products[id][color]){
        if(Object.keys(products[id]).length > 1){
            delete products[id][color]
        }else{
            delete products[id]
            alert('Your basket will be empty, are you sure you want to continue ?')

        }
    }


    UpdateStorage(products);

    location.reload()

}








function updateQuantity(productId, colorOfProducts, NewQuantity) {
    let products = getAllProducts();
    if (products[productId][colorOfProducts]) {
       products[productId][colorOfProducts] =  parseInt(NewQuantity)
    }
    UpdateStorage(products);
}



// // FUNCTION REGEX //


 const inputField = document.getElementsByClassName('cart__order__form')[0]
 const SubmitBtn = document.getElementById('order')


function Isrequied(e){
    e.preventDefault();

    const regEX = /^[0-9a-zA-Z\s{2,}]/i; //  [0-9a-zA-Z]
    const eMailVerified = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/                ///^[\w -\.] +@([\w -] +\.) +[\w -]{ 2, 4 }$/g;
    if ((!regEX.test((inputField[0].value) && (inputField[1].value) && (inputField[2].value) && (inputField[3].value) && (inputField[4].value)))){
        alert('Please input a value')
            return
    }else if(!eMailVerified.test(inputField[4].value)){
        alert('Please enter the valid email')
        return

    }else {
        fetch('', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }, 
            body: JSON.stringify({
                contact, products
            })
        })
        alert('Your order has been accepted')
        inputField.value = ""
        return
    }
}



const LocalStorageAccess = localStorage; 

// ID ONE BY ONE - FUNCTION IDARRAY 
let BasketId = []



function getAllProducts(){
    const products = LocalStorageAccess.getItem('KanapProduct');
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
        }else {
            delete products[id]
        }
    }


    UpdateStorage(products);
    alert('Your product has been deleted')

    location.reload()

}





// FUNCTION UPDATE PANIER

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

    // VARIABLE CALLED FOR REGEX 

    let ZeroField = inputField[0] 
    let FirstField = inputField[1] 
    let SecondField = inputField[2]; 
    let ThirdField = inputField[3] 
    let FourthField = inputField[4] 

    // REGEX VERIFICATIONS

    let checkForm = 0;


    let cartForm = document.getElementsByClassName("cart__order__form")[0]
    let inputs = cartForm.elements
    for (let input of inputs) {
        console.log(input)
        //vérification du type
        let regexForField
        if (input.type === "submit") {
            break
        }
        if (input.type === "text") {
            //console.log("text")
            regexForField = /^[0-9a-zA-Z\s{2,}]/i
        }
        if (input.type === "email") {
            regexForField = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        }

        console.log(input.nextElementSibling)

        //vérification du champ
        if (input.value === "") {
            input.style.border = "red 1px solid"
            input.nextElementSibling.innerHTML = "Ce champ ne doit pas etre vide"
        } else if (input.value.length < 3) {
            input.style.border = "red 1px solid"
            input.nextElementSibling.innerHTML = "Ce champ doit comporter au moins trois caractères"
        } else if (input.value.match(regexForField) === null) {
            input.style.border = "red 1px solid"
            input.nextElementSibling.innerHTML = "Ce champ n'est pas valide"
        } else {
            input.style.border = "green 1px solid"
            input.nextElementSibling.innerHTML = ""
            checkForm++
        }
    }


        if (checkForm === 5) {
            //alert('commande valide')
            const products = BasketId
            const contact = {
                firstName: ZeroField.value,
                lastName: FirstField.value,
                address: SecondField.value,
                city: ThirdField.value,
                email: FourthField.value
            }
            //console.log(products)

            console.log('fetch')



            fetch('http://localhost:3000/api/products/order', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify({
                    contact, products
                })
            }).then((res) => {
                res.json()
                .then((OrderData) => {
                    console.log(OrderData)
                    //window.location.href = `/front/html/confirmation.html?SubmitBtn=${OrderData.orderId}`;
                    location.replace(`confirmation.html?id=${OrderData.orderId}`)
                }).catch((err) => {
                    console.log(err)
                })
            }).catch((err) => {
                console.log(err)
            })
                // .then((OrderData) => {
                //     console.log(OrderData)
                //     //location.href = `./confirmation.html?commande=${data.orderId}`
                //     //window.location.href = `/front/html/confirmation.html?SubmitBtn=${OrderData.orderId}`;
                // })
                // .catch(function (err) {
                //     console.log(err);
                //     alert("error");
                // })
            // alert('Your order has been accepted')
            // inputField.value = ""
            // return
        }


    }
    



// FUNCTION DISABLED BUTTON

function disabled(disabled){
    if(disabled === true){
        const SubmitBtn = document.getElementById('order')
        SubmitBtn.setAttribute('disabled', true)
    }else{
        const SubmitBtn = document.getElementById('order')
        SubmitBtn.removeAttribute('disabled')
    }

}


// FUNCTION ID ONE BY ONE
function IdArray() {
    let BasketStorage = JSON.parse(LocalStorageAccess.getItem('KanapProduct'))
    let EntriesInBasket = Object.entries(BasketStorage)
    console.log(BasketStorage)
    console.log(EntriesInBasket)
    if (EntriesInBasket && EntriesInBasket.length > 0) {
        console.log(EntriesInBasket)
        for (let index in EntriesInBasket) {
            let FirstInBasketId = EntriesInBasket[index][0]
            BasketId.push(FirstInBasketId)
        }
    } else {
        console.log('Your basket is empty')
        SubmitBtn.setAttribute('value', "Empty basket")
        let basketEmpty = document.querySelector('#cartAndFormContainer > h1')
        basketEmpty.innerHTML = 'Your basket is empty, Please select a product'
        basketEmpty.style.fontSize = "19px"
        SubmitBtn.style.opacity ="0.5"
        SubmitBtn.style.boxShadow = "none"
        disabled(true)
    }
}




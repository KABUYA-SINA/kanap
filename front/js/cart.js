// VARIABLES 
const productInStorages = getAllProducts();
let AllQuantityOfChoices = document.getElementById('totalQuantity')
let Quantitys = 0; 
let totalPriceOfchoices = document.getElementById('totalPrice')
let totalOfPrices = 0; 
const cartItems = document.getElementById("cart__items")

// FUNCTION ID ONE BY ONE - MANAGECART.JS
IdArray()

// PRODUCT IN BASKET 
for (let oneProductInStorages of Object.entries(productInStorages)) {
    console.log(oneProductInStorages)
    console.log(oneProductInStorages[0])
    const productId = oneProductInStorages[0]

    // FETCH PRODUCT IN BASKET + ID 
    fetch('http://localhost:3000/api/products/' + productId)
        .then(function (res) {
            if (res.ok) {
                res.json()
                    .then(function (product) {

                        for (let oneColor of Object.entries(oneProductInStorages[1])) {
                            console.log(oneColor)
                            cartItems.innerHTML += ` <article class="cart__item" data-id="${productId}" data-color="${oneColor[0]}">
                                                        <div class="cart__item__img">
                                                        <img src="${product.imageUrl}" alt="${product.altTxt}"> 
                                                        </div>
                                                        <div class="cart__item__content">
                                                        <div class="cart__item__content__description">
                                                            <h2>${product.name}</h2>
                                                            <p>${oneColor[0]}</p>
                                                            <p>${product.price}</p>
                                                        </div>
                                                        <div class="cart__item__content__settings">
                                                            <div class="cart__item__content__settings__quantity">
                                                            <p>Qté : </p>
                                                            <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${oneColor[1]}">
                                                            </div>
                                                            <div class="cart__item__content__settings__delete">
                                                            <p class="deleteItem">Supprimer</p>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </article>`

                            // REMOVE BUTTON + REMOVEPRODUCT FUNCTION MANAGECART
                            let buttonsRemove = document.getElementsByClassName('deleteItem')
                            for (let button of Object.values(buttonsRemove)){
                                button.addEventListener('click', function(e){
                                    let article = button.closest('article')
                                    let ElementId = article.getAttribute('data-id')
                                    let ElementColor = article.getAttribute('data-color')
                                    removeProduct(ElementId, ElementColor)
                                })
                            }

                            // NEW QUANTITY PRODUCT 
                            let NewQuantityModifications = document.getElementsByClassName('itemQuantity')
                            console.log(NewQuantityModifications)
                            for (let i of Object.values(NewQuantityModifications)) {
                                console.log(i)
                                i.addEventListener('change', function(e){
                                    let targetQuantity = i.closest('article')
                                    let productId = targetQuantity.getAttribute('data-id')
                                    let colorOfProducts = targetQuantity.getAttribute('data-color')
                                    let NewQuantity = e.currentTarget.value

                                    updateQuantity(productId, colorOfProducts, NewQuantity)

                                    alert('Your product are added to your basket')
                                    location.reload()
                                })
                            }
                            Quantitys += parseInt(oneColor[1])
                            AllQuantityOfChoices.innerHTML = Quantitys

                            totalOfPrices += parseInt(product.price)*parseInt(oneColor[1])
                            totalPriceOfchoices.innerHTML = totalOfPrices

                        }
                    })
                    .catch(function (errorJson) { console.log(errorJson) })
            }
        })
        .catch(function (errorApi) { console.log(errorApi) })
}

// PURCHASE EVENT + BUTTON

SubmitBtn.addEventListener('click', Isrequied)






















const productInStorages = getAllProducts();
console.log(productInStorages)

const cartItems = document.getElementById("cart__items")


for (let oneProductInStorages of Object.entries(productInStorages)) {
    console.log(oneProductInStorages)
    console.log(oneProductInStorages[0])
    const productId = oneProductInStorages[0]

    fetch('http://localhost:3000/api/products/' + productId)
        .then(function (res) {
            if (res.ok) {
                res.json()
                    .then(function (product) {
                        console.log(product)

                        for (let oneColor of Object.entries(oneProductInStorages[1])) {
                            console.log(oneColor)
                            cartItems.innerHTML = ` <article class="cart__item" data-id="${productId}" data-color="${oneColor[0]}">
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

                            let buttonsRemove = document.getElementsByClassName('deleteItem')
                            for (let button of Object.values(buttonsRemove)){
                                button.addEventListener('click', function(e){
                                    let article = button.closest('article')
                                    let ElementId = article.getAttribute('data-id')
                                    let ElementColor = article.getAttribute('data-color')
                                    removeProduct(ElementId, ElementColor)
                                })
                            }
//Quantité
                        }
                    })
                    .catch(function (errorJson) { console.log(errorJson) })
            }
        })
        .catch(function (errorApi) { console.log(errorApi) })
}
















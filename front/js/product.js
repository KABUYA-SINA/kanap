// variables
let urlParams = (new URL(location)).searchParams;
let productId = urlParams.get('id'); 

fetch('http://localhost:3000/api/products/'+productId)
    .then(function (res) {
        if (res.ok) {
            res.json()
                .then(function (product) {
                    let titleProducts = document.getElementById('title');
                    titleProducts.innerHTML = product.name;
                    
                    let images = document.getElementsByClassName('item__img');
                    for (let image of images)
                      image.innerHTML = `<img src="${product.imageUrl}" alt="${product.altTxt}">` 

                    let prices = document.getElementById('price'); 
                    prices.innerHTML = product.price;

                    let productDescriptions = document.getElementById('description');
                    productDescriptions.innerHTML = product.description; 




                    let selects = document.getElementsByTagName('select');
                    for (let select of selects) {
                        select.addEventListener('click', function () {

                            const allOptionValues = document.getElementById('colors');
                            for (let allOptionValue of allOptionValues) {
                                for (var i = 0; i < allOptionValues.length; i++) {
                                    // allOptionValues[i] = allOptionValue;
                                    allOptionValues.innerHTML = ` <option value="${product.colors[i]}">${product.colors[i]}</option>`
                                    console.log(allOptionValues);
                                }

                            }
                        });
                    }

                    
                    console.log(product); 
                    console.log(images);


                    let allQuantityObjets = document.getElementById('quantity');

                         allQuantityObjets.addEventListener('change', function (e){
                            allQuantityObjets.innerHTML = e.target.value; 
                             console.log(e.target.value); 
                        });
                }); 

        }

    })

 
    


// all value option 

//const allQuantityObjets = document.getElementById('quantity');
// all quantity products




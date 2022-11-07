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
                    
                    let images = document.getElementsByClassName('item__img')[0];
                      images.innerHTML = `<img src="${product.imageUrl}" alt="${product.altTxt}">` 

                    let prices = document.getElementById('price'); 
                    prices.innerHTML = product.price;

                    let productDescriptions = document.getElementById('description');
                    productDescriptions.innerHTML = product.description;


                    const allColors = document.getElementById('colors');
                    for (let i = 0; i < product.colors.length; i++) {
                        let option = document.createElement('option');
                        option.value = product.colors[i];
                        option.innerHTML = product.colors[i]; 
                        allColors.appendChild(option);
                    }


                    console.log(product); 
                    console.log(images);


                    let submit = document.getElementById('addToCart');
                    submit.addEventListener('click', function(e){
                        let colorChoices = allColors.value;
                        let quantityChoices = document.getElementById('quantity').value; 

                        if ( quantityChoices >= 1 && quantityChoices <= 100 ){
                            if(colorChoices === '' ){
                                alert('You must to choose a valid color'); 
                            }else{
                                addToCart(productId, colorChoices, quantityChoices);
                            }

                        }else{
                            alert('you must choose a color and quantity from 1 to 100');

                        }
                        console.log(colorChoices);  
                        console.log(quantityChoices); 
                       }); 

                }); 

        }

    })

 





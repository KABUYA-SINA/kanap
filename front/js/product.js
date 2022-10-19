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

                    const allOptionValues = document.getElementById('colors');
                    for (let i = 0; i < product.colors.length; i++){

                        let options = document.createElement('option');
                        const allOptionValues = document.getElementById('colors');

                        allOptionValues.appendChild(options); 

                        options.innerHTML = ` <option value="${product.colors[i]}">${product.colors[i]}</option>`

                    }
                    console.log(product); 
                    console.log(images);


                    let allQuantityObjets = document.getElementById('quantity');
                         allQuantityObjets.addEventListener('change', function (e){
                            allQuantityObjets.innerHTML = e.target.value; 
                           // console.log(e.target.value); 
                        });


                    //submit.addEventListerner("submit", function(e)) + create function send? FETCH In ?

                    let submit = document.getElementById('addToCart'); 
                    submit.addEventListener('click', function(e){
                        e.preventDefault; 
                        e.stopPropagation; 

                        console.log(submit);

                    });

                }); 

        }

    })

 
    


// all value option 

//const allQuantityObjets = document.getElementById('quantity');
// all quantity products




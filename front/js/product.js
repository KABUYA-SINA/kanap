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


                    



                    // let selects = document.getElementsByTagName('select'); 
                    // for (let select of selects){
                    //     select.addEventListener('click', function (event){
                    //         event.preventDefault();
                    //         const allOptionValues = document.getElementById('colors')
                    //         for (let allOptionValue of allOptionValues) {
                    //         allOptionValues.addEventListener('click', function(){
                    //             allOptionValues.innerHTML = product.colors;
                    //             console.log(select); 
                    //         })
                    //     }}); 
                    // }

                    // const allOptionValues = document.getElementById('colors');
                    // allOptionValues.addEventListener('click', function(){
                    //     for (let allOptionValue of allOptionValues){
                    //         allOptionValue.addEventListener('change', function(){
                    //             let options = document.getElementsByTagName('option')
                    //             for (let i = 0; i < options.length; i++) {
                    //                 let option = options[i];
                    //                 option.innerHTML = product.colors;
                    //             }
                    //         });

                    //     }
 
                    // }); 








                        // for (let allOptionValue of allOptionValues){
                        //     allOptionValue.addEventlistener('click', function(){
                        //         let options = document.getElementsByTagName('option')
                        //         for (let i = 0; i < options.length; i++) {
                        //             let option = options[i];
                        //             option.innerHTML = product.colors;
                        //             console.log(option);
                        //         }
                        //     });
                        // }
                            



                        //    function onClick (e){
                        //        let options = document.getElementsByTagName('option')
                        //        for (let i = 0; i < options.length; i++) {
                        //            let option = options[i];
                        //            option.innerHTML = product.colors;
                        //            console.log(option);
                        //        }
                        //    }
                        





                        //for (let i = 0; i < allOptionValues; i++)
                        //allOptionValue.innerHTML = product.colors;
                        //i.innerHTML = product.colors;
                    // for (let allOptionValue of allOptionValues)
                    //     allOptionValue.innerHTML = product.colors;
                    // allOptionValues.addEventListener('click', function(e){
                    //     allOptionValues.innerHTML = product.colors; //e.target.value;// product.colors; 
                    // });



                    
                    console.log(product); 
                    console.log(images);
                    //console.log(allOptionValues); 
                }); 

        }

    })


// all value option 

const allQuantityObjets = document.getElementById('quantity');
// all quantity products




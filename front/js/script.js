//variables
const allProducts = document.getElementById('items');

fetch('http://localhost:3000/api/products')
        .then(function (res) {
            if (res.ok) {
                res.json()
                .then(function(products){
                    for (let product of products){
                            allProducts.innerHTML += `<a href="./product.html?id=${product._id}">
                        <article>
                            <img src="${product.imageUrl}" alt="${product.altTxt}">
                            <h3 class="productName">${product.name}</h3> 
                             <p class="productDescription">${product.description}            
                        </article>
                        </a>`
                    }
                 console.log(products); 
                }); 
            }

        })

//<h3 class="${product.name}">Kanap name1</h3>
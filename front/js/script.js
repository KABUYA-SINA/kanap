//variables

//by class
//let allproductNames = document.getElementsByClassName('productName');
let allproductDescriptions = document.getElementsByClassName('productDescription');


    //const links = document.getElementsByTagName('a');
    // const allProducts = document.getElementById('items');
    // let clickArticles = document.getElementsByTagName('article'); 
    // let titleProducts = document.getElementById('title');
    // const links = document.querySelector('#items a > article');  
    //       links.addEventListener('click', function (event) {
    //           let clickArticles = document.getElementsByTagName('article');
    //           for (let clickArticle of clickArticles)
    //               clickArticle.addEventListener('click', function (event) {
    //                   let titleProducts = document.getElementById('title');
    //                   // let allproductNames = document.getElementsByClassName('productName');
    //                   titleProducts.innerHTML = event.target.value;
    //               });
    //       });

//console.log(allproductNames);
//console.log(clickArticles);
//console.log(titleProducts); 
//console.log(links.childNodes);

function requestVariables() {
    fetch('http://127.0.0.1:5500/front/html/product.html?id=42')
        .then(function (res) {
            if (res.ok) {
                return res.json();
            }

        })
        .then(function (value) {
            let titleProducts = document.getElementById('title');
            titleProducts.innerText = value.queryString.id;
        })
        .catch(function (err) {
            
        });
}
   let allproductNames = document.getElementsByClassName('productName')
   for (let allproductName of allproductNames)
      allproductName.addEventListener('click', function requestVariables (){
           let titleProducts = document.getElementById('title');
           titleProducts.innerHTML = requestVariables.target.value;
       });
//console.log(allproductNames); 



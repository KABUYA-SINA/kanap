// variables


// all value option 
const allOptionValues = document.getElementById('colors');



// all quantity products

const allQuantityObjets = document.getElementById('quantity');

let titleProducts = document.getElementById('title');
let productDescriptions = document.getElementById('description');

let clickArticles = document.getElementsByTagName('a');
clickArticles.addEventListener('click', function (event) {
    let allproductNames = document.getElementsByClassName('productName');
    allproductNames.addEventListener('change'), function (event) {
        let titleProducts = document.getElementById('title');
        titleProducts.innerText = e.target.value;
    }
});
// variables


// all value option 
const allOptionValues = document.getElementById('colors');

// all quantity products

const allQuantityObjets = document.getElementById('quantity');

let titleProducts = document.getElementById('title');
//let firstTitleProduct = titleProducts[0]; 
let productDescriptions = document.getElementById('description');


function requestVariables() {
    fetch('http://127.0.0.1:5500/front/html/product.html?id=42')
        .then(function (res) {
            if (res.ok) {
                return res.json();
            }

        })
        .then(function (value) {
            let titleProducts = document.getElementById('title');
            titleProducts.innerText = value.postData.text; //value.target.value; //value.queryString.value; //value.target.value //value.postData.text;
        })
        .catch(function (err) {
            
        });
    }


titleProducts.addEventListener('change', requestVariables); 


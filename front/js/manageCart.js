const LocalStorageAccess = localStorage; 

function getAllProducts(){
    const products = LocalStorageAccess.getItem('KanapProduct'); 
    if(!products){
        return {}
    }
 return JSON.parse(products); 
}


function UpdateStorage(items){
    LocalStorageAccess.setItem('KanapProduct', JSON.stringify(items)); 

}

function addToCart(id, color, quantity){
    let products = getAllProducts(); 

    if (products[id]){
        if(products[id][color]){
            products[id][color] = parseInt(products[id][color])+parseInt(quantity);
        }else{
            products[id][color] = parseInt(quantity); 
        }

    }

    if (!products[id]) {
        products[id] = {
            [color]:parseInt(quantity)
        }


    }


    UpdateStorage(products);

}


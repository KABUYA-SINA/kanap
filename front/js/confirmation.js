//VARIABLE
const OrderFinal = document.getElementById('orderId')
OrderFinal.style.fontWeight = "bold"

//PARAMS + ID
const CommandNumbers = new URLSearchParams(document.location.search).get("id")
Order()

//FUNCTION CONFIRMATION ORDER
function Order() {
    if (CommandNumbers !== undefined) {
        localStorage.clear();
        OrderFinal.innerHTML = `${CommandNumbers}`
    }else {
        window.location.replace('index.html')
    }

}
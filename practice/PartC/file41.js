function makePayment(){
    setTimeout(() => {
        console.log("Payment has been processed");
    }, 5000);
}

function sendConfirmation(){
    console.log("Order has been placed successfully");
}
//call back all
makePayment()
.then((sendConfirmation))
.catch.((err));

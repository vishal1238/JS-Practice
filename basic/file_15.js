let cart = []
//Click on add to cart button on iphone product
cart = [...cart,{name: "iphone", price: 1000, qty: 1}]
console.log(cart);

//Click on add to cart button on speaker product
cart = [...cart,{name: "speaker", price: 1000, qty: 1}]
console.log(cart);

const order = {
    email: "john@gmail.com",
    items: cart,
    orderValue: 46000,
    status: "pending"
}

db.orders.insertOne(order)  
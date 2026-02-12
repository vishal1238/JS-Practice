const products = [
  { id: 1, name: "Product 1", desc: "description", price: 100 },
  { id: 2, name: "Product 2", desc: "description", price: 100 },
  { id: 3, name: "Product 3", desc: "description", price: 100 }
];

let cart = [];

products.forEach((product) => {
  product.quantity = 1;
  product.total = product.price * product.quantity;

  cart.push(product); // add to cart
});

console.log(cart);
  
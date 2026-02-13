const products = [
  {
    id: 1,
    name: "Product 1",
    desc: "This is description",
    price: 100,
    category: "Laptop",
  },
  {
    id: 2,
    name: "Product 2",
    desc: "This is description",
    price: 150,
    category: "Mouse",
  },
  {
    id: 3,
    name: "Product 3",
    desc: "This is description",
    price: 120,
    category: "Desktop",
  },
  {
    id: 4,
    name: "Product 4",
    desc: "This is description",
    price: 134,
    category: "Keyboard",
  },
  {
    id: 5,
    name: "Product 5",
    desc: "This is description",
    price: 150,
    category: "PC",
  },
  {
    id: 6,
    name: "Product 6",
    desc: "This is description",
    price: 150,
    category: "Pendrive",
  },
];

let search = "Laptop";

const resultArray = products.filter(
  (product) => product.category.toLowerCase() === search.toLowerCase()
);


console.log("Search Result:");
console.log(resultArray);

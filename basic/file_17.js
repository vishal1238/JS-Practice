const products = ["product1", "product2", "product3"]
for(let i = 0; i< products.length; i++ ){
    console.log(products[i]);
}
products.forEach(() => {})
products.forEach((product) => console.log(product));


// function controller(f) {
//     console.log(f);
// }
// let a = 10
// let name = "james"

// const f1 = () => console.log("Hello World");
// f1()


function greet(f){
    f()
}
greet(() => console.log("Hello world"));

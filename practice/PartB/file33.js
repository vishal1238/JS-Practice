const student = {
    name: "John",
    age: 21,
    city: "Jalandhar",
    marks:{
        math: 60,
        scienec: 90
    }
}

// const {name,age} = student
// console.log(name);
// console.log(age);

// const {name: userName} = student
// console.log(userName);

const {city = "Amritsar"} = student
console.log(city);

const {marks:{marks}} = student
console.log(math);
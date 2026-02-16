const names = ["Vishal","aman","bhumi","arya"]

// names.push("aman")
// names.pop()
// names.shirf()
// names.unshift("vivek")
// shift and unshift is slower beacuse of rearrangement
// console.log(names);
// console.log(names.sort());
// console.log(names.reverse());

const numbers = [15, 2, 1, 8, 3]
console.log(numbers.sort((a,b) => a - b));
console.log(numbers.sort((a,b) => b - a));
console.log(numbers.indexOf(2));
console.log(numbers.lastIndexOf(2));
console.log(numbers.includes(3));

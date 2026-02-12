// Variables

// console.log("Hello World");
// var firstname = "vishal";
// console.log(firstname);

// firstname = "mohit";
// console.log(firstname);

// we can use only _ and $ in starting
// var _hel$lo_name = "vi";
// console.log(_hel$lo_name);

//convention
//start with small letter and use camelCase(_firstname) but not mandatory

// declare Variables with let keywords

// let firstname = "vishal";
// console.log(firstname);


//declare constants
// const pi = 3.14;
// console.log(pi);

// string indexing

// let firstname = "vishal";

//  v  i  s  h  a  l
//  0  1  2  3  4  5
// console.log(firstname[0]);
// console.log(firstname.length);
// console.log(firstname[firstname.length - 1]);

// some methods

// trim()
// toUpperCase()
// toLowerCase()
// Slice()

// let firstname = "     vishal      ";
// console.log(firstname.length);
// let newString = firstname.trim();
// console.log(newString.length);


// let firstname = "vishal";
// console.log(firstname.toUpperCase());

// let firstname = "vishal";
// firstname = firstname.toUpperCase();
// firstname = firstname.toLowerCase();
// console.log(firstname);

// let firstname = "vishal";
// start index 
// end index 

// let newString = firstname.slice(0,4); //n-1
// console.log(newString)



// typeof operator (it's tell data type)

// data types(primitive data types)
// string "vishal"
// number 2,4,5,6.5
// Boolean
// undefined
// null
// BigInt
// Symbol

// let age = 22;
// let firstname = "Vishal";

// console.log(typeof age);
// console.log(typeof "vishal");


//convert number to string.(age = age + "";)
// let age = 22;
// let firstname = "vishal";
// console.log(typeof (age + ""));
// age = age + "";
// console.log(typeof age); "22"


//convert string to number.
// let myStr = +"34";
// confirm.console.log(typeof myStr);

//another method to achneg string to number.
// let age = 18;
// age = String(age);
// console.log(typeof age);



//string concatenation




// let string1  = "vishal";
// let string2 = "gupta";

// let fullname = string1 + " " + string2;
// console.log(fullname);

// let string1 = "17";
// let string2 = "10";

// let newString = +string1 + +string2;
// console.log(newString);
///output: 1710

// let string1 = "17";
// let string2 = "10";

// let newString = +string1 + +string2;
// console.log(typeof newString);
//output: 27



// Template String



// let age = 22;
// let firstname = "Vishal"

// // //"my name is vishal and my age is 21"
// // let aboutMe = "may name is " + firstname + "and my age is " + age;
// // console.log(aboutMe);

// // insent of using this we can use this 

// let aboutMe = `my name is ${firstname} and my age is ${age}`;
// console.log(aboutMe);



//undefined
//null

// let firstname; 
// confirm.log(typeof firstname)
// // output: undefined
// firstname = "vishal";
// console.log(typeof firstname, firstname);
// output: undefined
//         String, vishal
// (when we don't define any value then it will show undefine in the case of let and var not in the const, in const it will show error.)
// same in null


// console.log (typeof null);
// output: Object
//(but in js it is a bug and error)



// BigInt



// let myNumber = 123;
// // confirm.log(myNumber)
// console.log(Number.MAX_SAFE_INTEGER) // in js we have limit of store data. that why we use BigInt to store big numbers.

// to use BihInt change


// let myNumber = BigInt(987653125192365126351634691431);

// or we can use another way;
// let sameNumber = 12334n; ( in last we can use n to create a number into BigInt)
// console.log(myNumber); (then we can use any function but we have make sure that both variable in BigInt)



// Boolean & comparison operator;

//booleans
//true, false

// let num1 = 7;
// let num2 = "7";
// console.log(num1>=num2);//(false)


// == vs ===

// console.log(num1 == num2) //it check only values, not check data type
// // output: true
// console.log(num1 === num2) //but it check both values and data type
// // output: false


// != (not equal to)  vs !== (not equal to and also check type)

// console.log(num1 != num2);
// console.log(num1 !== num2);



// if else condition
// let age = 17;
// if(age > 18){
//     console.log("User can play ddlc");
// }else{
//     console.log("user can pplay mario")
// }


// let num = 14;
// if(num%2 === 0){
//     console.log("even");
// }else{
//     console.log("odd");
// }


// truthy and falsy values


// falsy values

// false
// ""
// null
// undefined
// 0

// truthy

// "abc"
// 1, -1


// let firstname = false;
// if(firstname){
//     console.log(firstname);
// }else{
//     console.log("firstName is kinda empty");
// }

//ternary operator

// let age = 15;
// let drink;
// if(age>=5){
//     drink = "coffee";
// }else{
//     drink = "milk";
// }
// console.log(drink);

// ternary operator / conditional operator

// let age  = 8;
// let drink = age >= 5 ? "coffee" : "milk";
// console.log(drink);


// and or operator

// let firstName = "Harshit";
// let age = 22;

// if(firstNam0[0] === "H"){
//     console.log("your name is start from H");
// }

// if(age > 18){
//     console.log("you are above 18");
// }

// if(firstName[0] === "H" && age > 18){
//     console.log("Name starts with H and above 18");
// } else{
//     console.log("inside else");
// } 

// if(firstName[0] === "H" || age > 18){
//     console.log("Name starts with H and above 18");
// } else{
//     console.log("inside else");
// } 


// nested if else 

//winning number 19
// 19 your guess is right
// 17 too low
// 20 too high

// let winningNumber = 19;
// let userGuess = +prompt("Guess a number");
// // console.log(typeof userGuess, userGuess);

// if(userGuess === winningNumber){
//     console.log("your guess is right!!");
// }else{
//     if(userGuess < winningNumber){
//         console.log("too low!!!");
//     }else{
//         console.log("too high!!!");
//     }
// }


// switch Statement 

// let day = 2;

// switch(day){
//     case 0:
//         console.log("Sunday");
//         break;
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thrusday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     default:
//         console.log("Invalid Day");
// }


//while loop


//0 to 9
//DRY  = Don't repeat yourself


// let i = 0;
// while(i<=9){
//     console.log(i);
//     i++;
// }
// console.log(`current value of i is ${i}`);
// console.log("hello");

// // while loop example
// let num = 10;

// let total = 0;
// let i = 0;

// while(i<=10){
//     total = total + i;
//     i++;
// }
// console.log(total);

// do the same thing with mathmethical way 
// let num = 10;
// let total = (num*(num+1))/2;
// console.log(total);



// for loop

// print 0 to 9

// for(let i = 0;i<=9; i++){
//     console.log(i);
// }


//// for(var i = 0;i<=9; i++){
////     console.log(i);
//// }                                     ///in var console.log will work outside the for log but thi will not work in let
//// console.log("value of i is ", i);

// for loop example 
// let total = 0;
// let num = 10;
// for(let i = 1; i <=num; i++){
//     total = total + i;
// }
// console.log(total);




// do while loop
// let i = 0;
// while(i<=9){
//     console.log(i)
//     i++;
// }



// let i = 0;
// do{
//     console.log(i);
//     i++;
// }while(i<=9);
// console.log("value of i is ",i);
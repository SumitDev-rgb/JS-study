// there are two ways to define a number
// 1. using number leterals
let num = 100; // this will be a number our JS will treat this as a number

// 2. using Number object
//   let balance = new Number(200);

// this will also be considered as a number but in console the JS will print this with its data type as [Number:200] as a object format

// some methods of Number
// 1. toString() // this will change our number to string
// 2. toFixed(2) // this will change the float points to two decimel place ex. 100 it will change it to 100.00




const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

// console.log(Math.random()); // it will will give the random value every time and it will will be 0 to 1
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);

// const min = 10
// const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1)) + min)

console.log(Math.floor(Math.random()*((6-1)+1))+1);
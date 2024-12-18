// Arrays is the collection of different element in a single variable, in JS we can store diffrent different types of elements such as 
// string, boolean , number into a single array, In JS we Arrays are homogeneous means all data types are allowed and they are resizable
//  means we no need to define the size of the array it follows the zero based indexing
// when we are copying the array , it does the shallow copy means we just give the reference of place or it gives the another reference of the same data
// tis is how we can create an array
const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]); // this is how we can access the elemnt from array

// Array Method
const arr = [1,2,3,4,5]; // 

// 1. push method: this will push the new element at last index and modify the original array

arr.push(7); // [ 1, 2, 3, 4, 5, 7 ]
console.log(arr)
// pop() removes the value from last index
arr.pop();
console.log(arr); // [ 1, 2, 3, 4, 5 ]

arr.unshift(5) // this will add the new element at the starting index
console.log(arr); // [ 5, 1, 2, 3, 4, 5 ]

arr.shift(); // this will remove the element from first index
console.log(arr); //[ 1, 2, 3, 4, 5 ]

console.log(arr.includes(3)); // this method will search the element in the array return true or false based on the element availability
console.log(arr.indexOf(3)); // this will give the index of the available element and if the given element does not found it will return -1
console.log(arr.join());  // this method will convert the array into string

const newarr = ["sumit", "ashu","dk","rahul"]

console.log(newarr.slice(1,3)) // this will take the given indexing at get those element but it does not consider the last element means it will
// just take the elements for 1 and 2 index and does not manipulate the oroginal array

console.log(newarr.splice(1,3)) // this will take the given index and consider the last value also means it will take all given index but the main
// difference is it will also manipulate the original array so if t=you print the new array only the remaining elements will be there see ex below:
console.log(newarr); // only remainging values is there [ 'sumit' ] 


let arr1 = [1,2,3];
let arr2 = [4, 5,6]
//  if we try to use the push method
// arr1.push(arr2);
// console.log(arr1); // [ 1, 2, 3, [ 4, 5, 6 ] ] this will push the complete array but in form of array
// so to prevent this problem we need to use the concat method see below ex.

let arr3 = arr1.concat(arr2) // we need to store this in a new array because it will return the new array

console.log(arr3); // [ 1, 2, 3, 4, 5, 6 ] here the new copy of the new array is created

// we also have another method which is spread operator (...) this is the syntax see below ex.

let arr4 = [...arr1, ...arr2]; // this is the most used method in the industry

console.log(arr4); //[ 1, 2, 3, 4, 5, 6 ]


// Ex. we want to flat the array
let unflatArr = [1,2,3,[4,5,6], 8,7,[4,5,6,[7,8,6,[5,6,8,9]]]]

let flatArray = unflatArr.flat(Infinity);
console.log(flatArray); // below will be the flat array
// [
//     1, 2, 3, 4, 5, 6, 8,
//     7, 4, 5, 6, 7, 8, 6,
//     5, 6, 8, 9
//   ]

// also have an overvies of from(), of(), isArray() methods
// from() it will convert the value into the Array
// of(), it the conver thte set of element into Array
// isArray()=> this will return tru or flase based on the value we passed means it will tells us whether the variable is an array or not







// how to create the finction

// function is the way to wrap the lines of code to a package

function myFn(){ //no parameter function

}

// function with parameters

function myFn1(num1, num2){
    let result = num1+num2;
    return result;
    console.log("I will not execute");// after return statement no next line will get exeute
    
}



let result = myFn1(2,5);

console.log(result);
  

let newFn = function(){
    console.log("hello sir");
    
}
newFn(); // newFn is the name or reference of the function and () is the function execution
lastName = "kumar"

console.log("sumit:",lastName)


// parameter using rest operator

function restFn(...cart){
    return cart
}
 // 
const cart1 = restFn(1,2,3,4,5); // using cart with rest operator it will always retrun the array of the values
console.log(cart1)

function restFn(val1, val2, ...cart3){
    return cart3
}
 // 
const cart4 = restFn(1,2,3,4,5); // 
console.log(cart4) // here if you print using rest operator only 3 , 5 values will be assigned to cart3 other values will be assigend to val1 and val2


// this keyword always refres the current object context and it could be different in node or browser environemnt like we are printing this 
// only in node and it not not referring any context than it will give the empty object but in browser it will return window object
// if if a function we are printing this and there is no object in that function than it will retun lots of unknown values

const xyz = (parameterToPassHere) =>{         // this is the syntax of the arrow function
// here we can write the code 
}   // we can not use this keyword with the arrow function as this will only return the eompty object 

// we can write arrow function below ways also

const abc = ()=>(a+b); // it will retun the sm of a and b and we no need to write the retun keyword but it we using the above way like
// wrapping then into curly braces than we need to write the curly braces like see below exp ans this is implicite return

let sharma = (s,f)=>{
    return s+f;
}


//  we can not write arrow function this way 

// arFn ()=>{
// console.log("I am arrow function")
// } 


// immediately invoked function expression(IIFE) : these are the immediately invoked function automatically

//  we use this kind of function we prevent the globalscope pollution that why we use iife function and we also call this named iife

(function ifF(){
    console.log("i am the immediately invoked function");
    
})(); // but the main problem is that they dont know where to stop so they will thorw the error so to avoid this we need to close them
//  with the ; semi-colon

// parameterized iife function but unnamed iife

((name)=>{
    console.log("i am prameterized function",${name});
    
})("sumit")


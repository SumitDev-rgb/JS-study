// truthy values or falsy va;ue means what JS will process as tru or false in condition statement


const name = 'sumit'
if(name){ // here JS is processing name condition as truthy value
    console.log("we got the name")
}else{
    console.log('no user name is processed');
    
}
// ******************** below are some truth or falsy value which can we asked in intervies*******************************
// falsy values
// false, 0, -0, BigInt 0n, undefined, Nan, null, ''  these are some falsy value

// rest values are considerd as truthy value see some exmp

// 1, true, {}, [], "anystring", "0", "false", function(){}: this is empy function


// ********************************nullish colenscing operator ??

// it basically works for null and undefined value and it will not consider those value if they are given in the expression see ex.

let a= null??5
console.log(a);//here it will not cosider null and assign 5 into a veriable

let b = 5??10 // here it will assign 5 as both values are not null or undefined

let c = null??undefined // it will not consider null here
console.log(c);

let d = null??null //now null will be assigned
console.log(d);

let e = undefined??6 // now 6 will be assigned
console.log(e)

// ******************ternary operator*********
// syntax: condition ? true:false  ex see belo


let score = 100;

score<110?console.log("score is less than 100"):console.log("score is higher than100 ");

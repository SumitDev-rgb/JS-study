// We can create any object by two methods
// 1. using laterals  // let obj = {}; 
// 2. using object constructor see below ex. // if we create any object with any constructor it also called singleton object
// Object.create
let person = {
    name : "sumit", // here name will always be processed as string
age : 30,
"full name": "sumit kumar",
location: "agra"
} // we can put any value here like another object or Array or anything

// How to access objects

console.log(person.name); // another way below
console.log(person["age"]) // this way is n=better because if full name we want to acess than
console.log(person["full name"]);

// if we want to add te symbol below is the way 
const mysyl = Symbol("mykey1")
let newObj = {
    duration:20,
    [mysyl]: "anything",
   
}
console.log(newObj[mysyl])

// how to change the value of the object 

newObj.duration = 35;
console.log(newObj["duration"]);

//  we can also add the function into the objects see below
newObj.greeting = function(){
    console.log("welcome to js learning");
}

newObj.greeting();

// another way is also below
newObj.greeting2 = function(){
    console.log(`welcome to js learning, ${this.duration}`);
}


newObj.greeting2();


// if we want to freeze any object means no one change the values of the object than see below


Object.freeze(newObj);
newObj.duration = 40;
console.log(newObj["duration"]); // outpur will be 35 only new values will not be added

//  we can also add the function into the objects

// We can create any object by two methods
// 1. using laterals  // let obj = {}; 
// 2. using object constructor see below ex. // if we create any object with any constructor it also called singleton object
// Object.create
let person = {
    name : "sumit", // here name will always be processed as string
age : 30,
"full name": "sumit kumar", // we can write the key this way also because JS will understand all keys in string format so if you want you can write it this way also
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

// *************** below how we can make objects as skeleton or using constructor *******************


let kitchen = new Object(); // this is how we can declare objects as skeleton both types of declaration is fine nothing is changed
// here we are creating a nestd object

kitchen = {
    ration : {

        food:{
            roti:"flour",
            sabji:"oil",
            masale:"all type available"
        }

    }
}
// below is how we can access the masale value

console.log(kitchen.ration.food.masale); // all type avalibale
// suppose if we are lookiing for any nested object inside and object and that object is not available than we can give ? with the object name
// ex. if suppose food is available or not we dont know so here we can write see below
// console.log(kitchen.ration.food?.masale);


// how to merge two objects

let obj1 = {
    1:"s",
    2:"u",
    3:"m"
}
let obj2 = {
    4:"i",
    5:"t"
    
}

let obj3 = Object.assign({}, obj1, obj2) // we can use assign method here to merge two or more objects
let obj4 = {...obj1, ...obj2} // another way to merge two objects
console.log(obj3);
console.log(obj4);



// how to get all keys and values of the  objects

console.log(Object.keys(obj1)); // this will return all the keys but in array // [ '1', '2', '3' ]
console.log(Object.values(obj2)); // this will return all the values but in array // [ 'i', 't' ]

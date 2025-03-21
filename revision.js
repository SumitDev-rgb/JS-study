
const myObj = {

    name:"Sumit",
    age:31,
    place:"Agra",
fn: function(){
console.log("I am the function from object")
}
}

console.log(myObj["place"]);

myObj.fn();

myObj.f1 = function(){
    console.log('I am from outside')
} 
myObj.f1();

function fg(){
    
}
console.log(typeof fg());

((name)=>{
    console.log(`"i am prameterized function" ${name}`);
    
})("sumit")
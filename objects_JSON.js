// belwo we will talk some more about objects
// below we will see how to destructure the object for better values extraction

let obj = {
name:"sumit",
teacher:"DK",
location:"gurugram"

}
// to access this we can use earliar method like obj.name but below we are destructuring it get the clean code

const { teacher, location, name} = obj;

// now all the values are destructured and will be refered by teacher, location and teacher only
console.log(name);
console.log(teacher);
console.log(location);


// note:- JSON is also the same as Objects in JS but the main difference is te JSON objects will have no name and all the keys and values 
// will be in string only see ex. below this is the json objects format. Here youa re seeing some error because we have not install some 
// program to see the exact JSON file
{

"name":"rahul",
"school":"baccho inter college",
"lacation": "karahara",
"distt":"Agra"

}
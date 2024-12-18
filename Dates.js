// to declare a date we need to first create the date object below ex will show the current date in the console

let myDate = new Date();
console.log(myDate);  // this will be give me unreadable value // 2024-12-18T16:30:01.649Z
// we can convert this to string and try
console.log(myDate.toString());  // output - Wed Dec 18 2024 22:01:37 GMT+0530 (India Standard Time)
// there are some other method also to convert a date into more readable format
console.log(myDate.toDateString()); //Wed Dec 18 2024
console.log(myDate.toJSON()); //2024-12-18T16:34:47.557Z
console.log(myDate.toISOString()); //2024-12-18T16:34:47.557Z
console.log(myDate.toLocaleString()); //18/12/2024, 10:04:47 pm
console.log(typeof myDate); // object

// if we want to declare any our choice specific date than see below

const newDate = new Date(2024, 0, 1); // one point to remember here is that JS will start the month from 0(January) to 11(December)
console.log(newDate.toString());  //Mon Jan 01 2024 00:00:00 GMT+0530 (India Standard Time)

// Time Stamp




// Dates(below code from tutorial)

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let new1Date = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})
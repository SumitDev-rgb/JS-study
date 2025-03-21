// this is the syntax to write the if else statement

if (true) {
  console.log("I am the if condition");
    
}

if (false) {
    console.log("i will ot get execution");
    
} else {
    console.log("i will get execute");
    
}

// we can check sometime two or more condition in a single if expression

if (true && 7 && true) {// in this case all condition must be true to execute this if block of code
    
}

if (true || false){ // in this case any vamue must be true in order to execute the if condition

}

if(true){ // in the below code whatever valye it find true will get execute

}
else if(false){

}
else{

}

//***************************** */ Switch Statement *****************************
// below the the stament for the switch case it will check the true value and for rest it will get execute and if we do not use the 
// break keyword it will execute all the code below inside the swich case but will not execute the default case
switch (key) {
    case value:
        
        break;

    default:
        break;
}

//  in the below program when we want to check based on the month number

let month = 12

switch(month){
    case 1:
        console.log("it is the Jan month")
        break;
    case 2:
        console.log("it is the Jan month")
        break;
    case 3:
        console.log("it is the Jan month")
        break;
    case 4:
        console.log("it is the Jan month")
        break;
    case 5:
        console.log("it is the Jan month")
        break;
    case 6:
        console.log("it is the Jan month")
        break;
    case 7:
        console.log("it is the Jan month")
        break;
    case 8:
        console.log("it is the Jan month")
        break;
    case 9:
        console.log("it is the Jan month")
        break;
    case 10:
        console.log("it is the Jan month")
        break;
    case 11:
        console.log("it is the Jan month")
        break;
    case 12:
        console.log("it is the Dec month")
        break;
        default:
            console.log("I got executed")
            break;
}

// we check check the value fro string also

switch("mar"){
    case "mar":
        console.log("I am march");
        break;
    case "feb":
        console.log("I am feb");
        break;
        default:
            console.log("I am no month");
break;            

}
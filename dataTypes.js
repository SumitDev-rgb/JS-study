/* There are basicaaly two type of data type in JS 
1. Primitve: integer, boolean, string, Arrays
bigInt: it is a number but we can store here very big number
null=> it is also an datatype but it does not hold any data, it is an standalone value
undefine=> it means we have not define any values
symbol=> it means uniqueness

whenever we try to find the typeof null: it will give object
and typeof undefine: it means undefine

2. Non-primitive  - objects, functions, Arrays
typeof Object // function
typeof Class // function


There are some ways tp define the variable 
1. var: it has the global or block scope and we can redeclare and reinitilize it at any time means whatever is written inside below braces called the scope
ex: var t= 20;
var t=10; // this is allowed with var data type
{
}
2. let: it has the function scope means whatever it written inside the {} can not be accessed outside the block. we can reinitilize it but
can not redlacre it ex.
let a=20;
let a =30; // this is not allowed
a=30; // this is te allowd way

3. const: const is the keyword to amke the value constant it means we can not change it value after initilize it and also we can only 
create const variable with delcaration and initilization
ex. const c=20;  // we have to declare it and initilize it at the same time


there is also one more thing that whenever we car writing "use strict" with any code it means JS will treat our cade as newer version

Whenever we try t convert any thing if that thing is number it will convert into number
true and false will convert to 1 and 0



//console.log(typeof Object);

prefix and postfix operator need to study

console.log((3*5)/(2%2));// infinity
*/
let a=25;
let b=12;
console.log(a%b);



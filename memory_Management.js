// below we will see how our data is being stored in memory

// there are two types of memory stroge in JS
// 1. Stack Memory 
// 2. Healp Memory

// 1. Stack Memory:- 
// All the primitive data store the value in stack memory which is also called as structured memory
// and often we call is call by value.so whenever we define any value in memory we got the copy of that memory
// ex. let x=10;
// let y =X;
// means if I make change in the value of the y it change will not reflect in the value of the x because we are assgint the copy of value
// of x into y 


// 2. Heap Memory: it is applicable for the non primitive data type like, array, objects, functions, here if we are assinginf the value of one 
// data  to another the reference will be provided not the value of the datatype ex.
// let arr = [1,2,3]
// let arr2 = arr;
// so fi I make change in the value of arr2 those change will reflect into the value of arr as well
// but there is one thing to remember is that all the variable of the on primitive data type will be stored in the stack memory 
// only the values of the non primitive data type will be stored in the heap memory

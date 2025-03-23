// ********************* forof loop and higher order function*****************

let arr1 = [1,2,3,4,5]

for (const index of arr1) { // here what is happening is from arr each value is coming from array saving in index
    // console.log(index);



    // ****************** forin loop**************

    let forArr = [5,6,7,8,9]

    for (const key in forArr) {
    //    console.log(forArr[key])
    }
    
}
// **********higher orderd function************
//  there are some highr order function which means the function which takes the function or series of the call function in the arguments or return the function 
// are claaed the higher order function
// there are some higher order function below
// 1. forEach, filter, map, reduce
// 1. forEach function it will iterate the values from the arr, object or the string and it does not return anything see ex below

const arr = [1,2,3,4,5,6,7,8,9,10]

//  arr.forEach((item)=>console.log(item)) // here every iteration the values are saving in teh item and saved into



const newArr = [
    {name:'sumit',
        age:31,
        place:"agra"
    },
    {name:'ashu',
        age:33,
        place:"ballia"
    },
    {name:'dhan',
        age:29,
        place:"gorakh"
    },
    {name:'guddu',
        age:26,
        place:"ballia"
    }
]

// lets iterate teh value from newArr using map it worsk same as forEach but the man diff is it return the values

const data = newArr.map((obj)=>{
    // console.log(obj.name); // or we can write it below way
    // console.log(obj.place);
    // console.log(obj.age);
    
    return (`the person name is ${obj.name}, age is ${obj.age} and place of birth is ${obj.place}`)
})

console.log(data);

// lets iterate the values using filter : in this type of function we can pass a callback function but also put some condition and it also 
// retrun the values same as map

const filArr = newArr.filter(fil => fil.age > 27)
                     .map(fil => `The person's name is ${fil.name}, age is ${fil.age}, and place of birth is ${fil.place}`);

console.log(filArr);


// reduce function: it also takes the arugement a callback function and it can also return but the main changes is here we have the two
// parameters one is accumulator and second is currentvalue see below ex.
// oin below ex what happenig is it will initilize the 0 value in the accumulator and 1 in curr after one itemrator sum of those two values 
// will be assigned to accumulator that is 1 and 2 in currentvalue in thirs iteration 3 means sum of accu and curr will be assigned to acc 
// and so on so the sum of all the values in the array will be 24 and that will be assigned to redArr and will print it


let redArr = [1, 2,3, 5,6,7]

let newRed = redArr.reduce((accu, curr)=>{

   return accu = accu+curr;
},0)

console.log(newRed);

// Ex : lets print the even numbers using filter function

let even = [2,5,67, 34, 24, 7,8,99,110, 111]

const newEven = even.filter(item => item%2===0) 

console.log(newEven);

   






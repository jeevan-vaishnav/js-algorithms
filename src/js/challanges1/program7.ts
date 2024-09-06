// now that we've covered BIG o 
// Lets spend a couple of minuts ,
// analyize the things we do all the time in JS :
// working with arrays objects and built in method 

// Objective
// Understand how objects and array works,through the lens of BIG o
// Explain why adding elements to the begning of an array is costly 
// Compare and contrast the runtime for arrays and objects , as well as built-in methods 

// Object : Onordered key value paires 
let instructor ={
    name: "Steve",
    isInstructor:true,
    isfavNumbers : [1,2,3,4,5]
}
// when to you object 
// When you dont need order 
// When you need fast access , insertion and removel

// Big O of Objects
// Access : O(1)
// Insertion : O(1)
// Removal : O(1)
// Searching : O(n)
// when you don't need order the object is best choice!
// Object are very fast 
// I mean thats is fasted we can go 
// constant time 
// comeback to searching on moment 

// console.log(Object.keys(instructor))
// console.log(Object.entries(instructor))
// console.log(instructor.hasOwnProperty("isfavNumbers"))

// Big o of object methods 
// Object.ksy =  0(n)
// Object.entries = o (n)
// hasOwnProperty = o (1)
// Object.values = 0 (n)



// let namesArray = ["Rahul", "Priya", "Aman", "Sneha", "Rohit", "Kiran", "Neha", "Arjun", "Pooja", "Vikas"];
// console.log(namesArray.indexOf("Sneha1"))
/**
 * Objectives : 
 * Describe what a searching algorithm is
 * Implement linear search on arrays (learning*) : check one by one
 * Implement binary search on sorted arrays /: devide half again and again and check
 * Implement a navive string searching algorithm : check by word in paragraph
 * Implement the KMP string searching alggorithm : 
 * 
 */

/**
 * JS has search!
 * there are many dif search methods on array in java script
 * indexOf :
 * includes :
 * find :
 * findIndex :
 * 
 * But how the above function it work
 */

// let namesArray = ["Rahul", "Priya", "Aman", "Sneha", "Rohit", "Kiran", "Neha", "Arjun", "Pooja", "Vikas"];

// // indexOf
// console.log(namesArray.indexOf("Vikas")) // return index if found they return positive with current index if not found than they return negative
// //includes
// console.log(namesArray.includes("Priya")) //return true, deterfine the the weather the certain value is there is not, its is return true and false
// console.log(namesArray.includes("Jeevan")) // return fales

/**Linear Time: how indexOf work */
function indexOfFun(arr,target){
    console.log(arr)
    console.log("Method Includes:Target is", target)
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return i
        }
    }
    return -1
}

let justArray = ['Dell',"HP","Acer","Asus"]
let target  = "Asus"
const indexOfResult = indexOfFun(justArray,target)
console.log("Index Of Result:", indexOfResult)
/**Linear Time: how includes work */
function includesOfFun(arr,target){
    console.log(arr)
    console.log("Method Includes:Target is", target)
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return true
        }
    }

    return false
}
let justAnotherArray = ["Yes","No","Great","Wow"]
const includeResult = includesOfFun(justAnotherArray,"Wow")
console.log("Include Of Result:", includeResult)

console.log("How Find Works")
/**
 * Now things become intreseting 
 * suppose we have conse users = [
 * {id:1,name:"jeevan"}
 * {id:2,name:"Wil"}
 * {id:3,name:"Sam"}
 * ]
 * 
 */

// creating test users 
const users = [
    {id:1,name:"jeevan"},
    {id:2,name:"Wilson"},
    {id:3,name:"Mac"},
]

const result = users.find(v =>  v.id === 2)
console.log("Find:", result)

/**
 * Now my focus how find method is working befind the js engine 
 */

function customFind(users,callback){
    for(let i = 0; i < users.length; i++){
        if(callback(users[i])){
            return users[i]
        }
    }
    return undefined
}

const resultCustom = customFind(users, user => user.id === 2);

console.log("Result Custom:", resultCustom)


function customFindIndex(users,callback){
    for(let i = 0; i < users.length; i++){
        if(callback(users[i])){
            return i
        }
    }
    return -1
}

const resultFindIndexCustom = customFindIndex(users, user => user.id === 2);

console.log("Result Find Index Custom:", resultFindIndexCustom)


/**
 * Linear Search
 * Pseudocode
 * This function accepts an array and a value
 * Loop through the array and check if the current array element is equal tot he value 
 * If it is, return the index at which the element is found
 * If the value is never found, return -1
 */
function linearSearch(inputArray,tgt){
  // add whatever parameters you deem necessary - good luck!
  for(let i = 0; i < inputArray.length; i++){
    if(inputArray[i] === tgt){
        return i
    }
  }
  return -1
}
const inputValue = [10, 10, 20, 25, 30]
const targetValue  =  30
console.log("Result 1:",linearSearch(inputValue,targetValue))


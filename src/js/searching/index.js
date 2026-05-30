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

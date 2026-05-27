// function checkOds(arr) {
//     const tempOds = []
//     function handlerRec(input) {
//         if (input.length === 0) return false

//         if (input[0] % 2 !== 0) {
//             tempOds.push(input[0])
//         }
//         handlerRec(input.slice(1))
//     }
//     handlerRec(arr)
//     return tempOds
// }
// //sample data
// const sampleArray = [1, 5, 5, 4, 7, 8, 9, 5, 2, 3, 6, 45, 1, 2, 1, 15, 2]
// const result = checkOds(sampleArray)
// console.log("Check Ods,", result)
// another method to check ods with pure recursion

// console.log("Pure Recursion")
// function pureRecursion(arr) {
//     let tempArr = []
//     if (arr.length === 0) {
//         console.log("The Array is empty now")
//         return
//     }
//     console.log("Logic start to calculating the data...")
//     if (arr[0] % 2 !== 0) {
//         console.log("This is ods value")
//         tempArr.push(arr[0])
//     }
//     console.log("the arr value:", arr[0])
//     return tempArr = tempArr.concat(pureRecursion(arr.slice(1)))
// }

// const itsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log("Original Array", itsArray)

// const result = pureRecursion(itsArray)
// console.log("Pure Rec:", result)



// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

/**
 * Learning
 * input [1, 2, 3, [1, 2, 3]]
 * output [1, 2, 3, 1, 2, 3]
 * observe the pattern
 * Each element is can be a normal number or another array
 * so you brain should ask if element is normal put it in answer if element is array flattern it again 
 * Think visually
 * Imagaine [1,2,[3,4]] go one by one
 * element 1 add to result 2 add to result [3,4] flattern again
 * now inside element 3 add 4 add and done
 * and final output is 1 2 3 4
 * loop through array
 * if items is array 
 *  flattern array
 * else put item into result
 */

function flatternRecursive(createdArray){
        let result = []
        for(let item of createdArray){
            if(Array.isArray(item)){
                result.push(...flatternRecursive(item))
            }else{
                result.push(item)
            }
        }
        return result
}

let createArray = [1,[2,3,[4,5,[6,7,[8,9]]]]]
const result = flatternRecursive(createArray)
console.log(result)

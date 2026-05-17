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

console.log("Pure Recursion")
function pureRecursion(arr) {
    let tempArr = []
    if (arr.length === 0) {
        console.log("The Array is empty now")
        return
    }
    console.log("Logic start to calculating the data...")
    if (arr[0] % 2 !== 0) {
        console.log("This is ods value")
        tempArr.push(arr[0])
    }
    console.log("the arr value:", arr[0])
    return tempArr = tempArr.concat(pureRecursion(arr.slice(1)))
}

const itsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log("Original Array", itsArray)

const result = pureRecursion(itsArray)
console.log("Pure Rec:", result)


// Frequency Counters
/**
 * This patterns uses objects or sets to collect values/frequencies of values 
 * This can often avoid the need for nested loops or O(N^2) operation with arrays / strings 
 *  
 */

/**
 * Challange 
 * Write a function called same, which accepts two arrays
 * The function should return true if every value in the array has its corresponding 
 * value squared in the second array
 * The frquency of values must be the same
 */

// const same = (arr1, arr2) => {
//     if (arr1.length !== arr2.length) {
//         return false
//     }
//     for (let i = 0; i < arr1.length; i++) {
//         console.log(arr2)
//         let correctIndex = arr2.indexOf(arr1[i] ** 2)
//         if (correctIndex === -1) return false
//         arr2.splice(correctIndex, 1)
//         console.log(correctIndex);
//     }
//     return true;
// }
// const callSame = same([1, 2, 4], [4, 16, 1]);
// console.log(callSame)


// after refactor 

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }

    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    console.log(frequencyCounter1)
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    console.log(frequencyCounter2)
    for (let key in frequencyCounter1) {
        console.log(key);
        console.log(key ** 2 in frequencyCounter2);
        console.log(frequencyCounter2[key ** 2]);
        console.log(frequencyCounter1[key]);
        if (!(key ** 2) in frequencyCounter2) {
            return false
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false
    }
    return true
}


console.log(same([1, 2, 3, 3], [4, 1, 9, 9]))


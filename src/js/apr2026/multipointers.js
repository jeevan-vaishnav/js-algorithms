/**
 * Multiple Pointers
 * Creating pointers or values that correspond to an index or position and move towards the beginning,
 * end or middle based on a certain condition
 *
 * Very efficient for solving problems with minimal space complexity as well
 *
 * problem statement:
 * write a function called sumzero which accepts a sorted array of integers.
 * the function should find the first pair where the sum is 0, return an array that includes both values that sum to zero
 * or underfined if a pair does not exist
 * [
 * -3,-2,-1,0,1,2,3
 *  ] // [-3,-3]
 * [
 * -2,0,1,3 \\ undefined
 * ]
 * [
 * 1,2,3
 * ] // undefined
 *
 * goal : find a pair in array whose sum = 0
 * requirement array is must be sorted
 * approch ( two pointers)
 * one pointer at start left
 * one pointer at end right
 * working
 * calcualte sum = arr[left] + arr[right]
 * if sum = 0 pair found
 * if sum > 0 decrease right need smaller value
 * if sum < 0 increase left need bigger vale
 * example
 * -4,-2,-1,0,1,3,5
 * (-4 +5) -> too big  - move right
 * -4 + 3 -> to small  - move left
 * -2 + 3 -> move right
 * -2 + 4 -> to small - move let
 * -1,+1 = 0
 * result [-1,1]
 *
 *
 */

// function sameZero(itsArray) {
//     let left = 0;
//     let right = itsArray.length - 1;

//     while (left < right) {

//         let sum = itsArray[left] + itsArray[right]
//         if (sum === 0) {
//             return [itsArray[left], itsArray[right]]
//         } else if (sum > 0) {
//             right--
//         } else
//             left++
//     }

// }

// const myarr = [-2, 0, 2, 3]
// const theResult = sameZero(myarr)
// console.log(theResult)


/**
 * New problem count unique values
 */

// function unvaluesfun(arr) {
//     let l = arr.length;
//     let temp = {}

//     for (let i = 0; i < l; i++) {
//         // console.log(arr[i])
//         temp[arr[i]] = temp[arr[i]] ? temp[arr[i]] += 1 : 1
//     }
//     console.log(temp.length)
//     let unvV = Object.keys(temp).length
//     console.log("Uniq Length:", unvV)
//     return temp
// }

// let unvalues = [1, 1, 1, 1, 2];
// let thisMy = unvaluesfun(unvalues);
// console.log(thisMy)

/**another solution */
// function duplicateValuesFN(arr) {
//     let i = 0
//     for (let j = 1; j < arr.length; j++) {
//         if (arr[i] !== arr[j]) {
//             i++
//             arr[i] = arr[j]
//         }
//         console.log(i, j)
//     }
//     console.log(i)
// }
// let duplicateValues = [1, 1, 4, 2, 5, 6, 4];
// console.log(duplicateValuesFN(duplicateValues))

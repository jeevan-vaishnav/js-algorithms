console.log("Sliding Window")
/**
 * write a function called maxsumarray which accepts an array of integers
 * and a number called n. the function should calculate the maximum sum of n consecutive
 * elements in the array.
 *
 * msa[1,2,5,2,8,1,5],2 = 10 bcz if the 2 and 8 is max
 * msa[1,2,5,2,8,1,5],4  =  17
 *
 *
 *
 */

// function msa(store, n) {
//     if (n > store.length) return null // if the n is grt to the array length its return null bcz of this is nothing.
//     // console.log("store length is ", store.length)
//     let max = -Infinity;
//     // console.log(max)
//     for (let i = 0; i < store.length - n + 1; i++) {
//         console.log("Its I", i)
//         let temp = 0
//         for (let j = 0; j < n; j++) {
//             console.log("i index:", i, store[i], "j index:", j, store[j])
//             console.log("store calculation", store[i + j])
//             temp += store[i + j]
//         }

//         if (temp > max) {
//             max = temp
//         }
//         console.log(temp)
//     }

//     return max
// }

// pair
/**
 * 1,2
 * 2,1
 * 1,4
 * 4,6
 */

// function msa(arr, n) {
//     console.log("Printing array:")
//     console.log(arr)

//     let max = -Infinity;
//     console.log("length is:", arr.length - n + 1)
//     for (let i = 0; i < arr.length - n + 1; i++) {
//         console.log('index i:', i, "arr value:", arr[i])
//         let temp = 0;
//         for (let j = 0; j < n; j++) {
//             console.log("index j:", j)
//             console.log("I + J mean increase the index", i + j)
//             temp += arr[i + j]
//         }
//         if (temp > max) {
//             max = temp
//         }
//     }

//     return max
// }

// const mystore = [1, 2, 1, 4, 6];
// const result = msa(mystore, 2)
// console.log("calling msa function and print the result", result)


//creating function to calcualting the maxsum

function windowslide(arr, n) {
    console.log("Function Started:")
    // check edge case 
    if (arr.length < n) return null
    let maxsum = 0
    let temp = 0

    for (let i = 0; i < n; i++) {
        maxsum += arr[i]
    }
    // console.log(maxsum)

    temp = maxsum

    for (let j = n; j < arr.length; j++) {
        console.log("Before update temp", temp)
        console.log("J", j, "and n is:", n)
        console.log("Remove:", arr[j - n])
        console.log("Add:", arr[j])
        temp = temp - arr[j - n] + arr[j]
        console.log("After update temp:", temp)
        maxsum = Math.max(maxsum, temp)
    }
    return maxsum
}


// creating array 
const thearray = [1, 2, 4, 3, 5, 8]
const limit = 2

const result = windowslide(thearray, limit);
console.log("MAX Sum is :", result)




















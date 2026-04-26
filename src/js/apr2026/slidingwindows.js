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

function msa(arr, n) {
    console.log("Printing array:")
    console.log(arr)

    let max = -Infinity;
    console.log("length is:", arr.length - n + 1)
    for (let i = 0; i < arr.length - n + 1; i++) {
        console.log('index i:', i, "arr value:", arr[i])
        let temp = 0;
        for (let j = 0; j < n; j++) {
            console.log("index j:", j)
            console.log("I + J mean increase the index", i + j)
            temp += arr[i + j]
        }
        if (temp > max) {
            max = temp
        }
    }

    return max
}

const mystore = [1, 2, 1, 4, 6];
const result = msa(mystore, 2)
console.log("calling msa function and print the result", result)
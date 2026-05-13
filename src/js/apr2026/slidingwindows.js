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

// function windowslide(arr, n) {
//     console.log("Function Started:")
//     // check edge case
//     if (arr.length < n) return null
//     let maxsum = 0
//     let temp = 0

//     for (let i = 0; i < n; i++) {
//         maxsum += arr[i]
//     }
//     // console.log(maxsum)

//     temp = maxsum

//     for (let j = n; j < arr.length; j++) {
//         console.log("Before update temp", temp)
//         console.log("J", j, "and n is:", n)
//         console.log("Remove:", arr[j - n])
//         console.log("Add:", arr[j])
//         temp = temp - arr[j - n] + arr[j]
//         console.log("After update temp:", temp)
//         maxsum = Math.max(maxsum, temp)
//     }
//     return maxsum
// }


// // creating array
// const thearray = [1, 2, 4, 3, 5, 8]
// const limit = 2

// const result = windowslide(thearray, limit);
// console.log("MAX Sum is :", result)



// samefreq logic
// function sameFr(a, b) {
//     let at = a.toString();
//     let bt = b.toString();

//     if (at.length !== bt.length) return null
//     console.log("at", at, "b", bt)

//     let count = {}
//     for (let digit of at) {
//         count[digit] = (count[digit] || 0) + 1
//     }
//     // comapre with b
//     for (let digit of bt) {
//         if (!count[digit]) return false
//         count[digit]--
//     }

//     return true

// }

// const first = 123
// const second = 321
// const result = sameFr(first, second);



// anagram check
// listen
// silent

// function anagramCheck(f, s) {
//     let fStr = f.toString()
//     let sStr = s.toString()
//     if (fStr.length !== sStr.length) return null

//     let count = {}
//     for (let f of fStr) {
//         count[f] = (count[f] || 0) + 1
//     }

//     for (let s of sStr) {
//         if (!count[s]) return false
//         count[s]--
//     }

//     return true
// }

// let first = 'listen'
// let second = 'silent'
// const res = anagramCheck(first, second);
// console.log(res)



// count character
// function countChar(str) {
//     let count = {}
//     for (let c of str) {
//         count[c] = (count[c] || 0) + 1
//     }
//     console.log(count)
// }

// const result = countChar("jeevanhun")
// console.log(result)

// same sqaure
// function sameSqr(first, second) {

//     if (first.length !== second.length) return false

//     let count1 = {}
//     let count2 = {}

//     for (let c1 of first) {
//         count1[c1] = (count1[c1] || 0) + 1
//     }

//     for (let c2 of second) {
//         count2[c2] = (count2[c2] || 0) + 1
//     }
//     console.log("Count A:", count1)
//     console.log("Count B:", count2)

//     for (let key in count1) {
//         if (!(key ** 2 in count2)) return false
//         if (count2[key ** 2] !== count1[key]) return false
//     }
//     return true
// }


// const first = [2, 4, 6, 8]
// const second = [4, 16, 64, 36]
// const result = sameSqr(first, second)
// console.log(result)

// function hasDup(str) {

//     let count = {}
//     for (let d of str) {
//         if (count[d]) return true
//         count[d] = 1
//     }
//     console.log(count)

//     return false

// }

// const v = [1, 2, 8, 5, 6, 9]
// const result = hasDup(v);
// console.log(result)

















// /*
// Basic Problems
// Print Alternates
// Linear Search
// Largest Element
// Second Largest
// Remove Duplicates from Sorted
// Generate all Subarrays
// Reverse an Array
// Rotate an Array
// */

// /**
//  * Print Alternates
//  * Alternate elements of an array
//  * Given an array arr[], the task is to print every altername element of the array
//  * starting from the first element
//  * examples:
//  * input arr[] = [10,20,30,40,50]
//  * Output: 10 30 50
//  * Explanation: Print the first element (10), skip the second
//  * element(20), orint the third element (30), skip thr fourth element (40) and
//  * print the fifth element(50)
//  *
//  * input arr[] = [-5,1,4,2,12]
//  * output -5 4 12
//  */

// function alterName(array) {
//     console.log("Original Array:", array)
//     let alt = []

//     for (let i = 0; i < array.length; i += 2) {
//         alt.push(array[i])
//     }
//     return alt
// }

// const arr = [10, 20, 30, 40, 50];
// const result = alterName(arr)
// console.log(result)

// console.log("Recursive method")

// function recFunction(array, idx, myArRes) {

//     if (idx < array.length) {
//         myArRes.push(array[idx])
//         recFunction(array, idx + 2, myArRes)
//     }
// }

// function getAlternates(array) {
//     let myArRes = []

//     recFunction(array, 0, myArRes)
//     return myArRes
// }

// let tempArra = [10, 20, 30, 40, 50]
// let getResult = getAlternates(tempArra);
// console.log(getResult.join(" "))

// console.log("Linear Search Algorithm")
// /**
//  * Given an array, arr[] of n integers, and an interger element x,
//  * find whether element x is present in the array. return the index
//  * of the first occurrence of x in the array . or -1 if it doesn't exits
//  */


// /**
//  * Input arr[] = [1,2,3,4], x = 3
//  * Output 2
//  *
//  * Explanation:There is on test case with array as [1,2,3,4] and
//  * element to be searched as 3.
//  * Since 3 is present at index 2, the
//  * output is 2
//  *
//  * IN linear search, we iterate overll all the elements of the array and check if
//  * it the current element is equal to the target element, If we find any
//  * element to be equal to the target element, then return the index of
//  * the current element, Otherwise, if no element is equal to the target element,
//  * then return -1 as the element is not found Linear search is also knwos as sequential
//  * search
//  */


// const LinearArray = [5, 6, 7, 8, 9]
// const searchKey = 15;
// console.log("Original Array is :", LinearArray)
// console.log("Search Key is :", searchKey)
// function IndexSearch(arr, x) {

//     if (arr.length === 0) {
//         return "No Data Available"
//     }

//     for (let i = 0; i < arr.length; i++) {
//         if (x == arr[i]) {
//             return `The Index is found at ${i}`
//         }
//     }

//     return - 1

// }

// const res = IndexSearch(LinearArray, searchKey);
// console.log(res)

// console.log("*************************")
// console.log("Larget element in an Array")
// /**
//  * Given an array arr.
//  * The task is to find the largest element in the given array.
//  *
//  * examples:
//  * input arr[] = [10,20,4]
//  * output = 20;
//  * Explanation: Among 10 20 and 4 20 is the larget
//  *
//  */


// /**
//  *
//  * @param {*} arr
//  * @returns
//  *        0   1   2   3   4   5   6  7
//  * arr = 10, 20, 10, 30, 40, 90, 20, 4
//  * let max = arr[0] intial 10 larger
//  * Loop iterate
//  * i = 1
//  * we check
//  * 20 > max / 10
//  * max = 20
//  * i = 2
//  * 10 > max / 20
//  * max:no changed still 20
//  * i = 3
//  * 30 > max / 20
//  * max = 30
//  * i = 4
//  * 40 > 30
//  * max =40
//  * i = 5
//  *  90 > max // 40
//  *  max  = 90
//  * i = 6
//  * 20 > max / 90
//  * no ahcnage stil max is 90
//  * i = 7
//  * 4 > max // 90
//  * no chnage
//  * so final return 90 is max
//  *
//  *
//  */


// function checkMaxFunction(arr) {
//     let maxElement = arr[0] // 10
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > maxElement) {
//             maxElement = arr[i]
//         }
//     }
//     return maxElement;
// }

// let checkMax = [10, 20, 10, 30, 40, 90, 20, 4]
// let resMax = checkMaxFunction(checkMax)
// console.log(resMax)


// // recursive function for finding largest number
// console.log("Recursive finding largets number")
// // let collArray = [20, 40, 60, 30, 10, 1000]

// function maxRecusive(arr, idx) {
//     // Last Index return the element
//     if (idx === arr.length - 1) {
//         return arr[idx]
//     }
//     // find the max from the rest of the arrya

//     let recMax = maxRecusive(arr, idx + 1)
//     console.log(recMax, arr[idx])
//     return Math.max(recMax, arr[idx])
// }

// function getMax(ar) {
//     return maxRecusive(ar, 0)
// }


// let collArray = [20, 40, 60, 30, 10, 5]
// console.log(collArray)
// console.log(getMax(collArray))

// console.log("Count Down Program")

// function countdown(n) {
//     if (n === 0) {
//         console.log('Done!')
//         return
//     }
//     console.log(n)
//     setTimeout(() => {
//         countdown(n - 1)
//     }, 2000)
// }

// countdown(10)

console.log("*************************")
console.log("Seconds Largeset Number");

/**
 * Given an array of positive intergers arr[]
 * of side n, the task is to find second largest distinct
 * element in the array
 *
 *
 * input arr[] = [12 35 1 10 34 1]
 *
 * output:34
 * Explanation: The largest element of the array
 * is 35 and the second element is 34
 */


// function getSecondLarg(arr) {
//     let n = arr.length;
//     console.log("Length:", n)
//     let sortArray = arr.sort((a, b) => a - b)
//     console.log("SortedArray", sortArray)

//     for (let i = n - 2; i > 0; i--) {
//         console.log(i)
//         console.log(arr[i])
//         console.log(arr[i], arr[n - 1])
//         if (arr[i] !== arr[n - 1]) {
//             return arr[i]
//         }

//     }
// }


// let arr = [10, 10, 90, 30, 10, 80]
// console.log("Orginal Array:", arr)
// let secondLarg = getSecondLarg(arr);
// console.log("Second Largest Number:", secondLarg)


console.log("Seconds Largest Number")
console.log("*********************")
/**
 * Better Approch Two Pass Search
 * The approch is to traverse the array twise.
 * in the first traversal , find the maxiumn element
 * in the second traversa, find the maximum elmeent ignoring the one
 * we found in the first traversal.
 */


/**
 * Working
 *  0  1  2 3  4  5
 * [12,35,1,10,34,1]
 * largest:35
 * second largest = -1
 * 
 * Traverse the array and find the largest element 
 * in the array initialize second largest with -1
 * 
 * 02: Since arr[0] > secondLargest, that is the 12 >-1
 * update second largest to 
 * 12
 * 
 * largest = 35
 * second largest = 12
 * 
 * 03| Since arr[1] > secon arlgest but arr[1] = largest,
 * no updates are required.
 * 
 * 04 since ,arr[2] <= secondlargest, that is 1<=12
 * no update are require.
 * 
 * largest = 35
 * second largest 12
 * 
 * 05| Since, arr[3]<= secondlargest, that is 10 <=12,
 * no updates are required.
 * largest = 35
 * secondLargest = 12
 * 
 * 
 * 06 since arr[4] > secondLargest, that is 34 > 12
 * uupdate second largset to 34
 * larget = 35
 * second largset 34
 * 
 * 07 seince, arr[5] <= secondLargest, that is 1 <= 34,
 * no update are requried 
 * largest  = 35
 * second largest = 34
 */

console.log("Better Approch")

/**
 * element in the array
 * using two traverls
 */
// function getSecondLargest(arr) {

//     let n = arr.length

//     let largest = -1
//     let secondLargest = -1;

//     // finding the largest element
//     for (let i = 0; i < n; i++) {
//         if (arr[i] > largest) {
//             largest = arr[i]
//         }
//     }
//     console.log(largest)

//     // find the second largest elemetn
//     for (let i = 0; i < n; i++) {
//         // update second larget if teh curent element is
//         // greater

//         // than second largest and not equa to the last

//         if (arr[i] > secondLargest
//             && arr[i] !== largest
//         ) {
//             secondLargest = arr[i]
//         }
//     }

//     return secondLargest
// }

// let myarr = [12, 35, 1, 10, 34, 1]
// console.log(getSecondLargest(myarr))

// function getSecondLargest(arr) {
//     const n = arr.length
//     let largest = -1
//     let secondLargest = -1
//     console.log("Start Largest", largest)
//     console.log("Second Largest ", secondLargest)

//     // find the largest number
//     for (let i = 0; i < n; i++) {
//         if (arr[i] > largest) {
//             largest = arr[i]
//         }
//     }
//     for (let i = 0; i < n; i++) {
//         if (arr[i] > secondLargest && arr[i] !== largest) {
//             secondLargest = arr[i]
//         }
//     }
//     return secondLargest
// }

// console.log("Pratice again,two pass")
// let sArray = [10, 3, 41, 4, 5, 32, 35]
// console.log("We have orignal array")
// console.log(sArray)
// console.log(getSecondLargest(sArray))

console.log("remove duplicate from sorted")


/**
 * Remove duplicates from sorted array
 *
 * given a sorted array arr[] of size n, the goal is to rearrange
 * the array so that all distinct element apear at the begnining in
 * sorted order. additionally , return the lft of this distnict sorted subarrya
 *
 *
 * Note: the elements after the distnct onces can be in any order and hold
 * any value, as they dont't affect the result
 *
 *
 * example we have
 * input 2 2 2 2 2
 * output 2
 * all the elements are 2, so only keep one instnace of 2
 *
 *
 * input 1 2 2 3 4 4 4 5 5
 * output 1 2 3 4 5
 *
 * input 1 2 3
 * output 1 2 3
 * no changes as all elements are distinct.
 */


/**
 * Using hash set , works for unsorted also o(n) time and O(n) space
 *
 * use a hash set or dictionary to store elements already processed
 * initialize index of result array as 0
 * traverse through the input array, if an element is not in the hash set,
 * put it at the result index and insert into the set
 */


// function removeDuplicates(arr) {
//     // to track seen elements
//     const s = new Set()
//     console.log(s)
//     // to maintian the new size of the array s
//     let idx = 0

//     for (let i = 0; i < arr.length; i++) {
//         console.log("value:", arr[i])
//         // console.log(!s.has(arr[i]))
//         if (!s.has(arr[i])) {
//             // console.log(arr[i])
//             s.add(arr[i])
//             console.log(s)
//             arr[idx++] = arr[i]
//         }
//     }

//     // return the size of the array with unique elements
//     return idx
// }

// // driver code
// const arr = [1, 2, 2, 3, 4, 4, 4, 5, 5]
// const newSize = removeDuplicates(arr)
// console.log(newSize)
// console.log(arr.slice(0, newSize).join(' '))

console.log("Expected Approach")
/**o(n) time and o(1) space */
/**
 * since the array is sortedm we do not need to maintain
 * a hash set. all occurences of an element would be consectuve, so we mainly 
 * need to check if the current element is same as the previus element or not
 * 
 * 
 * 
 * Step by step implementtatin
 * Start with idx = 
 * 
 * 
 */

console.log("Generating All Sub Arrays")
/**
 * Generating all sub arrays
 * 
 */

function subArray(myArr) {
    const myArrLength = myArr.length
    // console.log("Length:", myArrLength)

    //pick starting point 
    for (let i = 0; i < myArrLength; i++) {
        // console.log("Picking starting point:", myArr[i])
        //pick ending point 
        for (let j = i; j < myArrLength; j++) {
            // console.log("Picking ending point", myArr[j])
            // Print subarray between current starting and ending points
            let subArray = [];
            for (let k = i; k <= j; k++) {
                subArray.push(myArr[k])
            }
            console.log(subArray)
        }
    }
}

const meArray = [1, 2, 3, 4]
console.log("ALL Non-Empty Subarrays:")
subArray(meArray);













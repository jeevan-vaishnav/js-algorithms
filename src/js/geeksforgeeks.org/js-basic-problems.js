/*
Basic Problems
Print Alternates
Linear Search
Largest Element
Second Largest
Remove Duplicates from Sorted
Generate all Subarrays
Reverse an Array
Rotate an Array
*/

/**
 * Print Alternates
 * Alternate elements of an array
 * Given an array arr[], the task is to print every altername element of the array
 * starting from the first element
 * examples:
 * input arr[] = [10,20,30,40,50]
 * Output: 10 30 50
 * Explanation: Print the first element (10), skip the second 
 * element(20), orint the third element (30), skip thr fourth element (40) and
 * print the fifth element(50)
 * 
 * input arr[] = [-5,1,4,2,12]
 * output -5 4 12
 */

function alterName(array) {
    console.log("Original Array:", array)
    let alt = []

    for (let i = 0; i < array.length; i += 2) {
        alt.push(array[i])
    }
    return alt
}

const arr = [10, 20, 30, 40, 50];
const result = alterName(arr)
console.log(result)

console.log("Recursive method")

function recFunction(array, idx, myArRes) {

    if (idx < array.length) {
        myArRes.push(array[idx])
        recFunction(array, idx + 2, myArRes)
    }
}

function getAlternates(array) {
    let myArRes = []

    recFunction(array, 0, myArRes)
    return myArRes
}

let tempArra = [10, 20, 30, 40, 50]
let getResult = getAlternates(tempArra);
console.log(getResult.join(" "))

console.log("Linear Search Algorithm")
/**
 * Given an array, arr[] of n integers, and an interger element x,
 * find whether element x is present in the array. return the index
 * of the first occurrence of x in the array . or -1 if it doesn't exits
 */


/**
 * Input arr[] = [1,2,3,4], x = 3
 * Output 2
 * 
 * Explanation:There is on test case with array as [1,2,3,4] and 
 * element to be searched as 3. 
 * Since 3 is present at index 2, the
 * output is 2
 * 
 * IN linear search, we iterate overll all the elements of the array and check if
 * it the current element is equal to the target element, If we find any
 * element to be equal to the target element, then return the index of 
 * the current element, Otherwise, if no element is equal to the target element,
 * then return -1 as the element is not found Linear search is also knwos as sequential
 * search
 */


const LinearArray = [5, 6, 7, 8, 9]
const searchKey = 15;
console.log("Original Array is :", LinearArray)
console.log("Search Key is :", searchKey)
function IndexSearch(arr, x) {

    if (arr.length === 0) {
        return "No Data Available"
    }

    for (let i = 0; i < arr.length; i++) {
        if (x == arr[i]) {
            return `The Index is found at ${i}`
        }
    }

    return - 1

}

const res = IndexSearch(LinearArray, searchKey);
console.log(res)



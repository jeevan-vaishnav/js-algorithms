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
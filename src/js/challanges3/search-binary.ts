/**
 * Binary Search Pseudocode
 * 
 * This function accepts a sorted array and a value 
 * Create a left pointer at the start of the array , and a right pointer at the end of the array
 * While the left pointer comes before the right pointer:
 *  Create a pointer in the middle 
 *  If you find the value want, retunr the index
 *  If the value is too small, move the left pointer up
 *  If the value is too large , move the right pointer down
 * 
 * If you never find the value. return -1
 */

function searchBinary(arr: any, ele: any) {
    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor((left + right) / 2);
    console.log("Left: " + left + " Middle: " + middle + " Right: " + right)
    while (arr[middle] !== ele && left <= right) {
        if (ele < arr[middle]) {
            right = middle - 1
        } else {
            left = middle + 1
        }
        middle = Math.floor((left + right) / 2);

    }
    console.log("Left: " + left + " Middle: " + middle + " Right: " + right)
    if (arr[middle] === ele) {
        return arr[middle]
    }
    return - 1
}

console.log(searchBinary([1, 2, 6, 8, 10, 13, 15, 18], 18))
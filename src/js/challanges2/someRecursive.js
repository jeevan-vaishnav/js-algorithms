function isOdd(num) {
    console.log('isOdd: ' + num);
    return num % 2 !== 0;
}

function someRecursive(arr, callback) {
    if (arr.length === 0) return false;
    if (callback(arr[0])) return true
    return someRecursive(arr.slice(1), callback)
}

// Test examples
console.log(someRecursive([1, 2, 3, 4], isOdd)); // true (because 1 is odd)
console.log(someRecursive([2, 4, 6, 8], isOdd)); // false (no odd numbers)
console.log(someRecursive([10, 15, 20], isOdd)); // true (because 15 is odd)

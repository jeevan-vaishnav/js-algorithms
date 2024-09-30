/**Pure Recursion */
function collectOddValues(arr) {
    let newArray = [];

    if (arr.length === 0) {
        return newArray
    }

    if (arr[0] % 2 !== 0) {
        newArray.push(arr[0]);
    }

    newArray = newArray.concat(collectOddValues(arr.slice(1)));
    return newArray
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]))

/**
 * Pure Recursive Tips 
 * For arrays, use methods like slice, the spread operator, and concat that make copies of
 * arrays so you do not mutate them
 */
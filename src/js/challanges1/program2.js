/**
 * An Example 
 * Suppose we want to write a function that calcuates the sum of all numbers from 1up to (and including) some number (n)
 * 
 */

/**Solution 1: This is the one that comes to my mind first is to basically  create a total variables accumulator and loop
 * through all those numbers and add them in one at a time, starting at one the way up until, so that's what i've done here
 */

// Approach 1
function addUpTo(n) {
    let total = 0;
    for (let i = 0; i <= n; i++) {
        total += i;
    }
    return total
}
// console.log("Total number is: " + addUpTo(5));
// Approach 1
/*Whie not use timmer */
let tt1 = performance.now();
addUpTo(1000000000)
let tt2 = performance.now();
console.log(`Time Elapsed Approach 1 ${(tt2 - tt1) / 1000} seconds.`)

// Approach 2
function addUpTo2(n) {
    return n * (n + 1) / 2;
}
// console.log("Total number is: " + addUpTo2(265));


/*Whie not use timmer */
// Approach 2
let t1 = performance.now();
addUpTo2(1000000000)
let t2 = performance.now();
console.log(`Time Elapsed Approach 2 ${(t2 - t1) / 1000} seconds.`)

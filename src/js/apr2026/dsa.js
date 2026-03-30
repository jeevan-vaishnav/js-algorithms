// Problem 1
// write a function which takes string and return count of character in the string
// example
// countString("abcc");
// {
//     a:1
//     b:1
//     c:2
// }
// function countChar(str) {
//     //make object to return at end
//     const result = {}
//     // loop over string, for each character
//     for (let i = 0; i < str.length; i++) {
//         // if the char is a number/letter AND is a key in object , add one to count
//         const lowStr = str[i].toLowerCase();
//         if (result[lowStr] > 0) {
//             result[lowStr]++
//         } else {
//             // if the char is number/letter AND not in object, add it to object and set to 1
//             result[lowStr] = 1
//         }
//         // if the char is something else (space,period, etc.) dont do anything
//     }
//     // return object at end
//     return result;
// }
// console.log(countChar("Aabacbccp"))



/**
 * Refactoring questions
 * can you check the result?
 * can you drive the result differently?
 * can you understand the glance>
 * can you use the result or method for some other problems?
 * can you improve the performance of the solution?
 * can you think to other way to refector ?
 * How have other peples solve this problem?
 * 
 * 
 */

// after refctor the code 
function charCount(str) {
    let obj = {};
    for (let v of str) {
        v = v.toLowerCase();
        if (/[a-z0-9]/.test(v)) {

            if (obj[v] > 0) {
                obj[v]++
            }
            else {
                obj[v] = 1
            }
        }
    }
    return obj
}

console.log(charCount("Hi Jeevan!"))





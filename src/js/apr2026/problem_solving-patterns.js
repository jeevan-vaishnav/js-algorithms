/**Frequency Counters */
/**This pattern uses objects or sets to collects values/frquency of values
 * This can often avoid the need for nested loops or O(N^2) operations with arrays / strings
 * 
*/


/**
 * Q1: Write a function called same, which accepts two arrays. the function should return true if 
 * every value in the array has it's corresponding value squared in the second array. The frequency 
 * of values must be the same .
 */

/**
 * input:[2,4,6,8][4,16,64,36] = true
 * input[1,2,3][2,1] = false
 * input [1,3,9][1,9,5] = false
 */

/**
 * both array size should be same if not then throw false
 * iterate ove the array to check each index to compare the value of the second array if the catch return tru if not return false
 * 
 */

function fc(a1, a2) {
    // console.log("a1 length is ", a1.length)
    // console.log("a2 length is :", a2.length)
    if (a1.length !== a2.length) {
        return false
    }

    for (let i = 0; i < a1.length; i++) {
        console.log("Index I:", i)
        console.log(a2.indexOf(a1[i] ** 2))
        let correctIndex = a2.indexOf(a1[i] ** 2)
        if (correctIndex === -1) {
            return false
        }
        a2.splice(correctIndex, 1)
    }

    return true
}

const a1 = [4, 3, 2]
const a2 = [4, 16, 9]
console.log(fc(a1, a2))
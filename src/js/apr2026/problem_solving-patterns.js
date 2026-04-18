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

// function fc(a1, a2) {
//     // console.log("a1 length is ", a1.length)
//     // console.log("a2 length is :", a2.length)
//     if (a1.length !== a2.length) {
//         return false
//     }

//     for (let i = 0; i < a1.length; i++) {
//         console.log("Index I:", i)
//         console.log(a2.indexOf(a1[i] ** 2))
//         let correctIndex = a2.indexOf(a1[i] ** 2)
//         if (correctIndex === -1) {
//             return false
//         }
//         a2.splice(correctIndex, 1)
//     }

//     return true
// }

// const a1 = [4, 3, 2]
// const a2 = [4, 16, 9]
// console.log(fc(a1, a2))


// just pratice again
// so we have 2 array and the array one will sqaure value in the second array

// example
// we have array 4 9 1 8 4 this is first arrray
// and the second array is 81 1 64 16 5 so the logically this is faluse bcz of the index one not sequre found in second array
// {
// input a =  4,5,6,1
// input  b = 16 25 36 1
// output is true

// input a = 1 5 6 9
// input b = 1 81 36 26
// output false

// i a = 1 5 6
// i b = 1 2
// output false

// // i  a  = 1 5
// // i b = 1
// output false
// }

// input and calling function
// let a1 = [2, 2, 1]
// let a2 = [1, 4, 4]

// console.log(freCounter(a1, a2))
// function freCounter(a1, a2) {
//     console.log("array a1:", a1)
//     console.log("array a2:", a2)
//     // make sure the both array is equal
//     if (a1.length !== a2.length) {
//         return false
//     }
//     console.log("Array sturcture is okay")

//     for (let i = 0; i < a1.length; i++) {
//         console.log(a1[i])
//         let index = a2.indexOf(a1[i] ** 2)
//         console.log(index)
//         if (index === -1) {
//             return false
//         }
//         a2.splice(index, 1)
//     }
//     return true
// }

// after refector code 
console.log("Refector code")
/**
 * problem:write a function called same, which accept 2 array,its return the value the every array
 * crossponding the square of second array.the frquency of value will be same
 *
 * input
 * a = 1 5 6 4
 * b = 1 4
 * output false
 * a = 1 4 5
 * b = 1 16
 * output false
 * a = 4 6 9
 * b = 16 36 91
 * output: true
 *
 */


// function same(a1, a2) {
//     console.log("array one:", a1)
//     console.log("array two:", a2)
//     if (a1.length !== a2.length) {
//         return false
//     }

//     let aTemp = {}
//     for (let at of a1) {
//         aTemp[at] = aTemp[at] ? ++aTemp[at] : 1
//     }
//     let bTemp = {}
//     for (let at of a2) {
//         bTemp[at] = bTemp[at] ? ++bTemp[at] : 1
//     }
//     console.log(aTemp)
//     console.log(bTemp)

//     for (let key in aTemp) {

//         if (!(key ** 2 in bTemp)) {
//             return false
//         }
//         if (bTemp[key ** 2] !== aTemp[key]) {
//             return false
//         }
//     }

//     return true
// }

// let array1 = [4, 6, 6, 5, 5, 5]
// let array2 = [16, 25, 36, 36, 25, 25]
// const returnOutput = same(array1, array2)
// console.log(returnOutput);

// similar program 
console.log("Anagaram");
/**
 * Logic statement
 * Anagram mean user define input variable and both character are match to each other
 * for example : car -> rat = false
 * car -> rac = true
 * jeevan -> vaneej = true
 * and both array length should be equal
 */


// function makeAnagaram(a, b) {
//     console.log("Calling function:")
//     if (a.length != b.length) return false

//     let ObjA = {}
//     let ObjB = {}

//     for (v of a) {
//         ObjA[v] = ObjA[v] ? ObjA[v] + 1 : 1
//     }
//     for (v of b) {
//         ObjB[v] = ObjB[v] ? ObjB[v] + 1 : 1
//     }
//     for (key in ObjA) {
//         if (ObjA[key] !== ObjB[key]) {
//             return false
//         }
//     }


//     return true
// }


// const inputA = "mma";
// const inputB = "mam";

// const result = makeAnagaram(inputA, inputB);
// console.log("Result is: ", result)


console.log("New Logic")

function checkAnagram(first, second) {
    if (first.length !== second.length) return false

    let lookup = {}
    for (let i = 0; i < first.length; i++) {
        lookup[first[i]] = lookup[first[i]] ? lookup[first[i]] += 1 : 1
    }
    console.log(lookup)

    for (let i = 0; i < second.length; i++) {
        let second_value = second[i]
        if (!lookup[second_value]) {
            return false
        } else {
            lookup[second_value] -= 1
            console.log(second_value, "", lookup)
        }


    }

    return true
}

const vr = "eme"
const yr = "mee"
const result = checkAnagram(vr, yr)
console.log(result)


















console.log("JS Arrays")
/**
 * in js an arrays is an ordered list of values
 * each value knwon as an element
 * is assigned a numeric position in the array ca;;ed its index
 * the indexing start at 0, so the first element is at position 0, the second at position 1
 * and son on
 *
 *
 * Array can hold any type of data such as numbers, strings,objects or even other ararys
 * making them a flexible and essential part of js programming.
 * array index -> 0 1 2 3 4 5 ..n
 * array elements -> 2 4 8 12 16 17 18 ..n
 */

// 1. Create Array singin literal 
console.log("Create Array using Literal")
/**
 * Creating an empty array
 */

let a = []
console.log(a);
/**
 * Creating an array and initializing with values 
 */

let b = [10, 20, 30, 40, 50]
console.log(b);

console.log("Creating using new keyword ( Constructor ) ")

/**
 * The Array Constructor referes to a method of creating arrays by
 * invoking the array constructor function
 */


/**
 * Creating and intializing an array with values s
 */

let aa = new Array(10, 20, 30)
console.log(aa)

// output:[10, 20, 30]
/*
Note: Both the above methods do exaclty the same, Use the array literla method for efficiency,
readability, and speed.
*/


console.log("Basic Operations ON JS Arrays")

/**
 * 1. Accessing Element on an array
 * 
 * Any element in the array can be accessed using the index number
 * The index in the arrays starts with 0
 */

/**
 * Creating and array and initizlizing with values 
 */

let aaa = ["html", 'css', 'js']

// Accessing array element 
console.log(aaa[0])
console.log(aaa[1])

// output:HTML,CSS

// 2. Accessing the First Element of an Array
/**
 * The array indexing start from 0, so we can access first element of array suing
 * the index number
 */


// creating an array and initializing with values 

let aaaa = ['HTML', 'CSS', 'JS']

// Accessing First Array Elements

let fst = aaaa[0]
console.log("First Item", fst)

// Output : First Item : HTML 


console.log("Accessing the Last Element of an Array")

/**
 * We can accesstthe last array elmenent using [array.length - 1]
 * index number.
 */

// creating an array and initizaling with values 

let aaaaa = ['HTML', 'CSS', 'JS']
// accessng last array elements
let lstElement = aaaaa[aaaaa.length - 1]
console.log("Last Item", lstElement)

/**
 * Output
 * Lirst Item: JS
 */


// 4. Modifying the Array Elements 

/**
 * Elements in an array can be modified by assigning a new value to
 * their corresponding index.
 * 
 * So lets creating an array and initializing with values
 * 
 */
console.log("Modifying the Array Elements")
let rA = ["HTML", "CSS", "JS"]
console.log(rA)

rA[1] = "Fucking HTML"
console.log(rA)

console.log("COOL!!")
console.log("******************")

// 5. Adding Elements to the Array 
console.log("Adding Elements to the Array")
console.log("******************")
/**
 * Elements can be added to the array using the method like
 * push() and unshift()
 * 
 * The push() method add the element to the end of the array
 * The unshift() method add the element to the starting of the array 
 */


/**
 * Creating an Array and Initializing with values
 */

let mA = ["HTML", "CSS", "NEXT"]

// Add Element to the end of Array
console.log("Add Element to the end of Array")
mA.push("Node.js")
console.log("Updated Array:", mA)
//Add Element to the begining
console.log("Add Element at the beginning")
mA.unshift("Web Development")
console.log("New Updated:", mA)
console.log("********************")
console.log("Removing Elements from an Array")
/**
 * To remove the elements from an array we have different methods like
 * pop(),shift() or splice()
 * 
 * The pop() method removes an element from the last index of the array
 * The shift() method removes the element form the first index of the array
 * The splice() method removes or replaces the element from the array.
 * 
 */

/**
 * Creating an array and initializing with values
 */
console.log("********************")
let xA = ["HTML", "JS", "CSS"]
console.log("Original Array:", xA)
//remove and retruns the last element
let rLst = xA.pop();
console.log("After removing the last:", xA)
//remove and return the first element
let rFst = xA.shift();
console.log("After Removing the First:", xA)

// removes 2 element starting from index 1
let newDummaryArray = ["Test", "New", "Old", "Mid"]
newDummaryArray.splice(1, 2)
console.log("After removing 2 elements starting from index 1:", newDummaryArray)


console.log("********************")
console.log("Array Length")
/**
 * We can get the length of the array using the array length property
 * Creating an Array and Initializing with values
 */

let hA = ["NewHTML", "NewCSS", "NewJS"]
console.log("Original New hA Array", hA)
let hLen = hA.length;
console.log("Array Length:", hLen)
console.log("********************")

/**
 * 8. Increase and Decrease the Array Length
*/
console.log("Increase and Decrease the Array Length")

/**
 * We can increase and decrease the array length using the JS length property
 * 
 */

let jA = ['jHTML', 'jCSS', 'jJS']
console.log("Check the current lenght", jA.length)

// increae the array length to 7
jA.length = 7

console.log("After Increasing Length :", jA)

// decrease the array length to 2

jA.length = 2
console.log("After Decreasing Length:", jA)
/**
 * Output
 * After Increasing Length : [ 'jHTML', 'jCSS', 'jJS', <4 empty items> ]
 * After Decreasing Length: [ 'jHTML', 'jCSS' ]
 */

console.log("********************")
// 9 Iterating Through Array Elements
console.log("Iterating Through Array Elements")

/**
 * We can iterate array and access elements using for loop and
 * forEach loop
 */

console.log("Example: It is an example of for loop")

let fA = ["IHTML", "ICSS", "IJS"]

// iterating through for loop

for (let i = 0; i < fA.length; i++) {
    console.log(fA[i])
}

/**
 * output
 * IHTML
 * ICSS
 * IJS
 */

console.log("********************")
console.log("Example: It is the example of Array.forEach() loop.")


let pA = ["pHTML", "PCSS", "PJS"]

// Iterating through forEach Loop

pA.forEach(function myFun(x) {
    console.log(x)
})

console.log("********************")

console.log("Array Concatenation")
/**
 * Combine two or more arrays using the concat() method.
 * it returns new array containing joined arrays elements.
 */

let pA2 = ["Next", "Nuxt"]
let pA3 = ["Vue", "React"]

let conCat = pA2.concat(pA3);
console.log("Concatenate Both arrays")
console.log("Concatenated Array:", conCat)


console.log("********************");
console.log("Conversion of an Array to String")

/**
 * We have a builtin method toString() to converts an array to string.
 * 
 */

let mA9 = ["HTML", "JS", "Shadcn", "Quasar"]
console.log("Convert to string")
// Convert array to string
console.log(mA9.toString())

// 12 Check the type of an arrays

/**
 * The JavaScript typeof operator is used to check the type of an array
 * it return object for arrays
 */

console.log("*********************")
console.log("Check the Type of an Arrays")
let returnObj = ["Next", "Nuxt", "Server"]
// check type fo array
console.log(typeof returnObj)

console.log("*********************")
/**
 * Recognizing a js array
 * These are two methods by which we can recognize a js array
 */


/**
 * By using Array.isArray() method
 * By using instanceof method
 */

// below is an example showing both approchas:

const course = ["HTML", "CSS", "JS"]
console.log("Using Array.isArray() method",
    Array.isArray(course)
)

console.log("Using instanceof method ", course instanceof Array)

/**
 * Using Array.isArray() method:  true
 * Using instanceof method:  true
 * 
 * Note: A common error is faced while writing the arrays
 */


const kA = [5]
const kAA = new Array(5)
console.log(kA) // [5]
console.log(kAA) // 5 number of  empty array

/**
 * Output: This statement creats an array with an element [5].
 * Try with the following examples
 */

// Example 1
const p1 = [5]
console.log(p1)

// exmaple 2
const p2 = new Array(5)
console.log(p2)

/**
 * Output
 * [ 5 ]
 * <5 empty items> ]
 */












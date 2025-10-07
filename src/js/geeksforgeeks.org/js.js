console.log("Intro OF JS ")
/**
 * JavaScript is varstile,dynamic,programing langauge them brings life to web page by making them interactive
 * It is used to building attactive applications
 * Support both client and server
 * Integrated seamlessly with html, css and reach standard library
 * 
 * Its Object Oriented,Platform independent,Update HTML using the DOM,Capable Of Expcetion Handling,Allows async function
 * Java Script is single threaded languages that executed one task at time
 * It is an interpreted language which means it executes the code line by line
 * The Data type of the varibale is decided at run time in JS, which is why it is called dynamically typed.
 */

/**
 * Hello World, Program in server code
 */
console.log("Hello World! -> Server Side")
/**
 * Key Features in JS
 * Client Side Scripting: JS runs on the user's browser, so has faster response time
 * Verstile: Can be use for wide range task, from simple calculation to server side application
 * Event Driven: Responds to user action (clicks, keystrokes) in real time
 * Asynchronous: It can handle task like fetching data from servers w/o freezing the user interface
 * Rich Echosystem: There are numerous libraries and framework built on js, such as react angular and vuejs , which make development faster and more efficent
 */

/**
 * JS Verions
 * ES5 -> 2009 -> strict mode,JSON,getters/setters
 * ES6 -> 2015 -> let/const/classes,arrow,functions
 * ES7-ES13 -> 2016-2022 -> async/await/BigInt,optional chaning
 * ES14 -> 2023 -> toSorted,findLast,static,blocks
 *
 * Note: Older Version of browser do not support ES6
 */

/**
 * Variables and Datatypes in Java Script
 * Variables and data types are fundational concepts in programming,serving as the building blocks for
 * stroing and manupulating information withinn a program. IN javascript,getting a good graps of these
 * concept is importantfor writing code that works well and is easy to understand
 *
 * Data Types in JS
 * 1.Primitive Data Types
 * Numeric Type:
 * Number,BigInt
 * Non-Numeric Type:
 * String,Boolean,Undefined,Null,Symbol
 * 2.Non-Primitive Data types
 * Object,Arrays,function,Date object,regular,expression
 */

/**
 * Variables
 * A variable is like a container that holds data that can be reused or update later in the
 * progrm.in js , variable are declared using keywords var,let oor const.
 */

/**
 * 1. var keyword
 * The var keyword is used to declare a varibale. it has a function scoped or globally scoped behaviour
 * Example:
 * var n = 5;
 * console.log(n);
 * var n = 20 // reassiging is allowd
 * console.log(n)
 * Output:5
 * Output:20
 *
 * 2. let keyword
 * The let keyword is introduced in ES6, has block and cannot be re-decalred in the smae scope
 *
 * let n = 10
 * n = 20 // value can be update
 * //let n = 15 // can not redeclare
 * console.log(n)
 * output 20
 *
 * 3. const Keyword
 * The const keyword declares variables that cannot be reassigned, its block scoped as well
 *
 * const n = 100;
 * //n = 200; this will throw an error
 * console.log(n)
 *
 * output:100
 */

/**
 * Data Types
 * JS supports variaous data types,which can be brodaly categories into primitive and non-primitive
 * types.
 *
 * Primitive Types represent single values and are immutable:
 * Number:Represent numeric values ( intergers and decimals)
 * let n  = 42;
 * let pi = 3.14
 * String: Represents text enclosed in single or double qoutes.
 * let s = "Hello, World,"
 * Boolean: Represents a logical value ( true or false)
 * let bool = true;
 *
 * Undefined:A varibale that has been decalred but not assigned a value
 * let notAssigned;
 * console.log(notAssigned)
 *
 * Output:undefined
 *
 * Null:Represents an international absence of any value
 * let empty  = null;
 *
 * Symbol: Represents unqiue and immutable values, often used as obejct keys
 * let sym = Symbol('unique')
 *
 * BigInt: Represent intergers larger than Number.MAX_SAFE_INTEGER
 *
 * let bigNumber = 123456879123456789123456789
 *
 * Non-Primitive
 * Non-Primitve is types are objects and can store collections of data or more complex entities
 *
 * 1. Object: Represent key-value pairs
 *
 * let obj = {
 * name:"Jeevan",
 * age:27
 * }
 *
 * 2. Array : Represents an ordered list of values.
 * let a = ["red","blue","yellow"]
 *
 * 3. Function Represent reusable blocks of code.
 *
 * function fun(){
 * console.log("Testing the basic things")
 *
 * }
 *
 * Exploring js datatypes and variables: understand common exporession
 *
 * Expression: null === undefined
 * result false
 *
 * in js,both null and undefined represnt "empty" values but are distinct types null is special obejct
 * representing the intentional absense of a value ,while undefined signifies that a values has been declared
 * but not assigned a value,despite their similar purpose, theyare not strickly equal (===) to each
 * other
 *
 * null === undefined evaluates to false becuase js does not perform type corrcion with ===
 *
 *
 * console.log(5>3>2)
 * Result : false
 *
 *
 * At first glance, this expresioon my appear to be checking if 5 is greather than 3 and 3 is greathr than 2
 * but js evualtes it left to right due to its operator precedence
 *
 * First, 5 > 3 evaluates to true.
    Then, true > 2 is evaluated, which in JavaScript results in 1 > 2 (since true is coerced to 1), which evaluates to false.
    So, 5 > 3 > 2 evaluates to false.
 *
console.log([] === [])
Expression: [] === []
Result: false
In JavaScript, arrays are objects. Even if two arrays have the same content, they are still different objects in memory.

When you compare two arrays with ===, you are comparing their references, not their contents.
Since [] and [] are different instances in memory, the result is false.

console.log("10" < "9")
Expression: "10" < "9"
Result: true
When JavaScript compares strings, it compares their Unicode values lexicographically (character by character).

"10" is compared to "9". Since "1" has a lower Unicode value than "9", JavaScript determines that "10" is less than "9".
This comparison might seem counterintuitive, but it's due to JavaScript's string comparison mechanism.


console.log(NaN === NaN)
Expression: NaN === NaN
Result: false
In JavaScript, NaN (Not-a-Number) is a special value that represents an invalid number or the result of an operation that cannot produce a valid number.

One of the most unusual aspects of NaN is that it is not equal to itself. This behavior exists due to the design of the IEEE 754 standard, which JavaScript follows for floating-point arithmetic.
As a result, NaN === NaN returns false.
To check if a value is NaN, use Number.isNaN().
console.log(true == 1)
Expression: true == 1
Result: true
JavaScript uses type coercion with the loose equality operator (==). When comparing true and 1, JavaScript converts true to 1 and then compares the values.

Since 1 == 1 is true, the overall expression evaluates to true.
This behavior might lead to unexpected results in some cases, so it’s often recommended to use the strict equality operator (===) to avoid implicit type coercion.


console.log(undefined > 0)
Expression: undefined > 0
Result: false
When JavaScript attempts to compare undefined with 0, it converts undefined to NaN (Not-a-Number). Any comparison involving NaN returns false.

undefined > 0 becomes NaN > 0, which evaluates to false.


console.log("5" === 5)
Expression: "5" === 5
Result: false
The strict equality operator (===) checks both value and type. Since "5" is a string and 5 is a number, the types are different, and the comparison returns false.

If you used the loose equality operator (==), JavaScript would perform type coercion, converting the string "5" to the number 5, and the comparison would return true.




console.log([1, 2] == [1, 2])
Expression: [1, 2] == [1, 2]
Result: false
Even though both arrays contain the same elements, JavaScript compares arrays by reference, not by value.

Since each array is a separate object in memory, their references are different, and thus the comparison returns false.
To check if two arrays are equal, you must compare their contents element by element.


console.log(Infinity > 1000)
Expression: Infinity > 1000
Result: true
In JavaScript, Infinity represents an unbounded, positive number. It's greater than any finite number, including 1000.

Therefore, Infinity > 1000 evaluates to true.

 */





/**
 * JS Operators
 * Java script are symbol and keywords that peroform with values and variables
 * They are building blocks of js expression and can manipulate data in various ways.
 *
 * There are various operators supported by JS
 */


// 1. JS Arithmeitc Op
// Arithmetics operator peroform mathetical calculation like addtion,subtraction,multiplication,etc

const sum = 5 + 3 // addition
const diff = 10 - 2 // subtraction
const p = 4 * 7 // multiplication
const q = 8 / 2 // Division

console.log("sum:", sum, "diff:", diff, "mul:", p, "Div:", q)

console.log("Assignment Operators")
// 2. JS Assignment Operator
/**Assiggnment operator is used to assign value to variables */

let z = 5; //5
console.log("Orignal Value: ", z)
z += z; // 10
console.log("Incz Z Value:", z)
z -= 2 //8
console.log("Decn Z Value: ", z)
z *= 4 // 32
console.log("Multiplies Z Value:", z)

/**
 * Output:
 * = assign a value to a variable
 * += adds and assigns the result to the variable
 * -= Subtract and assing the result to the varibale
 * *= Multiples and assing the result to the variabel
 */

console.log("Comparesion Operators")

/**
 * Comparison Operators
 * Comapre two values and return a bollean true or false . they are usefull for
 * making decisions in conditinoal statements.
 * 
 */
console.log(10 > 5);//true
console.log(10 === "10") //false
console.log(10 == "10") // true

/**
 * > checks if the lefr value is greater than the right 
 * === checks for strict equality ( both type and value)
 * Other operators include, <,<=,>= and !===
 */



console.log("Logical Operators")
/**
 * Logical Operators
 * are mainly used to perform the logical operations that deteremine the equality or difference 
 * between the values
 */

const tt = true
const ff = false
console.log(tt && ff) // false
console.log(tt || b) // true

/**Output
 * flase and true
 * && return true if both operands are true.
 * || returns true if at least one operand is true
 * ! negates the boolean value.
 */

// 5. JavaScript Bitwise operators 
console.log("BitWise Operators")

/**
 * Bitwise operators perform operations on binary
 * representations of numbers.
 */

const res = 5 & 1; // Bitwise AND
console.log(res) // 1
/**
 * Java Script Bitwise operators
 * in js a number is stored as a 64bit floating point number
 * but bitwise operations are performed on a 32bit binary number.
 * To peroform a bit operation, javascript converts the operations and converts 
 * back the result to a 64 bit number
 * (signed) and performs the operation and converts back the result to a
 * 64 bit number
 */


/**
 * List of Bitwise Operators with explantion
 * 1 bitwise AND Operator ( & )
 * it is a binary operator ie accepts two operands. Bit wise and (&)
 * returns 1 if both the bits are set (i.e 1) and 0 in any other case
 * 
 *  
 */

let xx = 5;
let yy = 3;
console.log(xx & yy)
/**
 * A B Outout ( A & B)
 * 0 0 0
 * 0 1 0
 * 1 0 0
 * 1 1 1
 */
/**
 * 2 Bitwise OR Operator (|)
 * it is a binary operator ie accepts twoo operands. Bitwise OR(|)
 * returns 1 if any of the operands is set(i.e.1) and 0 in any other case
 */


let xxx = 5
let yyy = 3
console.log(xxx | yyy)

/**
 * A B (A | B)
 * 0 0 0
 * 0 1 1
 * 1 0 1
 * 1 1 1
 * 
 * 32 16 8 4 2 1
 *         1 1 1
 */

console.log("BitWise XOR Operator (^)")
console.log(`It is a binary operator ie accepts two operands. BitWise XOR (^)
returns 1 if both the operands are different and 0 in any other case`)

let x2 = 5
let y2 = 3
console.log(`${x2 ^ y2}`)
/**
 * A B Output (A ^ B)
 * 0 0 0
 * 0 1 1
 * 1 0 1
 * 1 1 0
 */

// 4. Bitwise NOT operator ( ~)
console.log("Bitwise NOT Operator (~)")
// it is unary operator ie accepts single operands. bit wise
// NOT (`~`) flips the bits ie 0 becomes 1 and 1 becomes 0

console.log("Ternary Operator")
// 6 Java Script Ternary Operaor  
/**
 * the ternary operator is a shorthand for conditional
 * statement. it takes three operands.
 * 
 */

const age = 18;

const status = age >= 18 ? "Adult" : "Minor"
console.log(status)

/**
 * condition ? experssion1 ; experssion2 evaluates expersion 1 if the condition
 * is true, otheriwse evaluates expersion2
 */


console.log("Comma Operator")
/**
 * JS Comma Operator
 * mainnly evaluates its operands from left to right sequentially and returns the value of the rightmost 
 * operand
 */


let nn1, nn2;
const comma = (nn1 = 1, nn2 = 2, nn1 + nn2)
console.log(comma)

/**
 * Each experssion is evaluated form left to right
 * the final result of experssion is the rightmost value
 */

console.log("JS Unary Operators")
/**
 * Unary Operators operate on a single operand (e.g. increment,decrement)
 * 
 */


let x9 = 5;
console.log(++x9); // pre increment
console.log(x9--); // Post decrement 
console.log(x9)

// ++ increments the value by 1
// -- decrements the value by 1
// typeof returns the type of variable

console.log("JS Relational Operators")
// 9.JS Relational Operators
/**
 * JS RP are used to compare its operands and determine the relatinonship
 * between them. they return a boolean value ( true or false)
 * based on the comparson result
 *
 */

// const obj = { length: 10 }
// console.log("length" in obj) // true
// console.log([] instanceof Array) // true

// in checks if a property exits in an object
// instanceof checks if an object is an instance of a constructor



// 10 JS BigInt Operators 
console.log("BigInt Operators")
/**
 * BigInt operators allow calculations with numbers beyond the safe interger range
 * 
 */

const big1 = 123456789012345678901234567890n;
const big2 = 987654321098765432109876543210n
console.log(big1 + big2)

/**
 * Output
 * 1111111110111111111011111111100n
 * Operations liek addition,subtraction,and multiplication
 * work with BigInt
 * Use n suffix to denote BigInt literals.
 */

// 11 JS String Operators
// console.log("JS String Operators")
// JS String Operators include oncatenation ( + ) and
// concatenation assignment (+=), used to join string or
// combine strings with other data types.

const s = "Hello" + "" + "World"
console.log(s)

/**
 * Output Hellow World
 *
 * + concatenates strings.
 * += appends to an exiting string
 */

// 12 JavaScript Chaning Operators
console.log("Js Chaining Operator")

/**
 * The optional chaining operator allows safe access to deeply nested properties
 * without throwing errors if the property doesn't exits
 */

const objj = {
    name: 'Jeevan',
    address: { city: "Raipur", test: "test" }
}

console.log(objj.address?.city)
console.log(objj.address?.phone)
/**
 * Outpu Raipur
 * undefined
 */

/**
 * ?. safely access a property or method 
 * Returns undefined if the property doesn't exits
 */


/**
 * Controll Statement In JS 
 * JS controll statement is used to control the execution of 
 * a program based on a specific condition. if the condition meets then a
 * particular block of action will be executed otherwie it will executed another
 * block of action that satisfies that particular condition 
 * 
 */


/**
 * Type of control statements in js
 * Conditional Statement: these statements are used for decision making , a decision
 * n i made by the conditional statement based on an expersion that is passed. Either Yes or NO
 * 
 * Iterative Statement: This is a statement that iterates repeatedely untill a condition is met. 
 * Simply said, if we have an expression, the statement will keep repeating itself until and unless it is satisfied.
 */

/**
 * Approch 1 : If Statement
 * in thie approch, we are using an if statement to checka specific condition, the code block gets
 * executed when the given condition is satisfied
 */


/**
 * Syntax
 * if(condition_is_give_here){
 * // if the condition is met
 * // the code will get executed.
 * }
 */

/**
 * Now lets understand this with the help of example
 * 
 */

const num = 5;
if (num > 0) {
    console.log("The number is positive.", num)
}

/*
Output:
The number is positive.
*/

/**
 * Approch 2: Using If Else Statement
 * The if else statement will perform some action for a specific 
 * condition. if the condition meets then a particular code of action will be executed 
 * othewise it will executed another code of action that satisfies that partcular condition
 * 
 */

/**
 * Syntx
 * if(condition1){
 * 
 * executes when condition1 is true
 * 
 * if(con2){
 * executes when con2 is true
 * }
 * }
 */

/**
 * Now lets understand this with the help of example
 * let num = -10
 * if(num>0)
 * console.log("The number is positive")
 * else
 * console.log("The number is negative")
 */

let numm = -10
if (numm > 0) {
    console.log("The number is positive")
}
else {
    console.log("The number is negative")
}

console.log("Approch 3 Using Switch Statement")
/**
 * the switch case statement is js is also used for decision making purpose.
 * in some case, using the switch case statement is seen to be more convenient than
 * if else statements
 */


// Syntx
// switch (exp) {
//     case v1:
//         statement
//         break;
//     case v2:
//         statement
//         break;
//     default:
//         statemenentDefault;
// }

let num3 = 5;

switch (num3) {
    case 0:
        console.log("Number is zero.");
        break;
    case 1:
        console.log("Nuber is one.");
        break;
    case 2:
        console.log("Number is two.");
        break;
    default:
        console.log("Number is greater than 2.");
};


console.log("Approch 4 Using the Ternary Operator")
/**Conditional Operator */
/**
 * The conditional operator, also referred to as the ternary
 * operator, is a shortcut for experssing conditional statement in js
 */

// Syntax
// con ? v if true : v if false


// Now let's understand this with the help of example 

let numF = 10

let resultF = numF >= 0 ? "Positive" : "Negative"

console.log(`The number is ${resultF}`)


console.log("Approach 5 : Using Foor Loop")

/**
 * in this approch, we are using for loop in which the execution of a set of instructions ,
 * repeadtedly until some condition evalautes and becomes false 
 * 
 * syntax
 * 
 * for(st 1: st2: st3){
 * code here}
 */

// Now lets understnad this wth the help of example s
for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}


console.log("Approch 6: Using While loop")

// The while loop repeats a block of code as long as a specified  contion is true

// Syntx
// while (con){
//     // code block
// }


// Now lets understand this with thelp if example 

let kk = 1

while (kk <= 5) {
    console.log(kk)
    kk++
}

console.log("Approch 7: Using Do while loop")

// The do while loop is simmliar to the wile loop,
//     expcet tthat the condition is evaluted after the exection of the loop's
// body,
//     this means the code block will executed at least one, even if the condition is false


// Syntax
// do {
//     // code block
// } while (con)



// now let's understand this with the help of example 

let i = 1;

do {
    console.log(i)
    i++
} while (i < 5)

/**
 * Conclusion
 * This article now includes example for if statement, if else
 * statement,switch statement, ternary operator, for loop, while loop,
 * and do while loop, providing a comprehensive guide to control statements
 * in js , these contrl structures help manage the flow of a program based on various 
 *conditions and are fundamental to mastering js 
 */
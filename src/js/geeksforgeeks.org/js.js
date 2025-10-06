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


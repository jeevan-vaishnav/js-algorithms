
// function sameFrequency(num1, num2) {
//     console.log(num1)
//     console.log(num2)

//     let str1 = num1.toString();
//     let str2 = num2.toString();
//     console.log(str1)
//     console.log(str2)
//     if (str1.length !== str2.length) return false;
//     if (str1 != str2.split('').reverse().join('')) return false;
//     return true;
// }

// console.log(sameFrequency(123, 321))



// Another one 
const sameFrequency = (num1, num2) => {
    console.log("String: 182, 281");
    // convert number to string 
    let numString = num1.toString();
    let numString2 = num2.toString();

    //check if the string length is not equal to another one 
    if (numString.length !== numString2.length) return false;

    //create object
    let count1 = {};
    let count2 = {};

    for (let i = 0; i < numString.length; i++) {
        count1[numString[i]] = (count1[numString[i]] || 0) + 1
    }
    console.log(console.log(count1));

    for (let i = 0; i < numString2.length; i++) {
        count2[numString2[i]] = (count2[numString2[i]] || 0) + 1
    }
    console.log(count2)

    for (let key in count1) {
        console.log(key)
        if (count1[key] !== count2[key]) return false
    }
    return true;
}
const printFrequency = sameFrequency(182, 812);
console.log(printFrequency)
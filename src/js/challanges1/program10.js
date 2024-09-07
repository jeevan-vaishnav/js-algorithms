/**
 * Write a function which takes in a string and returns count
 * of each character in the string
 */

function charCount(str) {
    //make object and return at end 
    let result = {}
    //loop over string, for each character...
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        // if char is not number/letter, don't do anything
        if (/[a-z0-9]/.test(char)) {
            //if the char is number/letter AND is a key in object, add one to count
            if (result[char] > 0) {
                result[char]++
            }
            //if char is number/letter and is not in object, add it to object and set value to 1
            else {
                result[char] = 1
            }
        }
    }
    //return obejct at end
    return result
}
const cCount = charCount('hello 123 nice');
console.log(cCount);
// after refactor code 
function characterCount(str) {
    let obj = {}
    for (var char of str) {
        if (isAlfaNumric(char)) {
            let lowerCase = char.toLowerCase();
            console.log(lowerCase)
            obj[lowerCase] = ++obj[lowerCase] || 1
        }
    }
    return obj
}

const isAlfaNumric = (char) => {
    //check if char is number
    let code = char.charCodeAt(0)
    // check number , check alfa and check cap alfa 
    //  0-9 >47 to 57
    //  a-z > 65 to 90
    //  A-Z > 96 to 122
    if (!(code > 47 && code < 57)
        && !(code > 64 && code < 91)
        && !(code > 96 && code < 123)) {
        return false
    }

    return true;
}

const moreRef = characterCount('Hello Jeevan')
console.log(moreRef)












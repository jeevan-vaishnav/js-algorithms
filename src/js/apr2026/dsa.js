// write a function which takes string and return count of character in the string
// example
// countString("abcc");
// {
//     a:1
//     b:1
//     c:2
// }
function countChar(str) {
    //make object to return at end 
    const result = {}
    // loop over string, for each character 
    for (let i = 0; i < str.length; i++) {
        // if the char is a number/letter AND is a key in object , add one to count
        const lowStr = str[i].toLowerCase();
        if (result[lowStr] > 0) {
            result[lowStr]++
        } else {
            // if the char is number/letter AND not in object, add it to object and set to 1
            result[lowStr] = 1
        }
        // if the char is something else (space,period, etc.) dont do anything 
    }
    // return object at end
    return result;
}
console.log(countChar("Aabacbccp"))





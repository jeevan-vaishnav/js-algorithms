/**
 * Anagrams 
 * Given two strings, write a function to determine if the
 * second string is an anagram of the first. An anagram is a word, pharse, or name formed by rearranging the 
 * letters of another, such as cinema, formed from iceman.
 */

/*
 * Challenge
 * Write a function that takes in two strings and returns a boolean
 * indicating whether or not the second string is an anagram of the first
 * validAnagram('','') true
 * validAanagram('aaz','zza') false
 * validAnagram('anagram','nagaram') true
 * validAnagram('rat','car') false
 * validAnagram('awesome','awesom') false
 *
*/



const validAnagram = (str1, str2) => {
    console.log(str1)
    console.log(str2)
    if (str1.length !== str2.length) {
        return false;
    }

    let lookup = {};

    for (let i = 0; i < str1.length; i++) {
        let letter = str1[i];
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
    }
    console.log(lookup)
    for (let i = 0; i < str2.length; i++) {
        let letter = str2[i];
        console.log(letter)
        console.log(lookup[letter])
        if (!lookup[letter]) {
            return false
        } else {
            lookup[letter] -= 1
            console.log(lookup[letter])
        }
        console.log(lookup[letter])
    }


    return true;
}

const result = validAnagram('car', 'ccar');
console.log(result)







/**Naive String Search */
function naiveSearch(long: string, short: string) {
    var count = 0;
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            if (short[j] !== long[i + j]) break
            if (j === short.length - 1) count++;
        }
    }
    console.log(`Count: ${count}`)
}

console.log(naiveSearch('abcdgoodwowcd', 'cd'))

/**
 * That is an implementing of naive string searching..
 * Next, we're going to seea better implementing of a different sort of string algorithm
 * Stay connected with us !!! Happy DSA
 */
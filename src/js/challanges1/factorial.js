// Old way to find factorial 
function fact(n) {
    let total = 1;
    for (let i = n; i > 0; i--) {
        total *= i;
        /**
         * 1*5,5*4, 20*3, 60*2, 120*1, 120
         */
    }

    return total;
}

console.log(fact(5));

// Recursivye factorial function 

function factRec(num) {
    if (num === 1) return 1;

    return num *= factRec(num - 1);
    /**
     * return 5 * fac(4)
     * return 4 * fac(3)
     * return 3 * fec(2)
     * return 2 * fec(1)
     * 1*2 2*3 3*4 4*5
     */
}

console.log(factRec(6));
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
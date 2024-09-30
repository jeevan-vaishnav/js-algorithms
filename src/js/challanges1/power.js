function power(base, exponent) {
    console.log('Base: ' + base);
    // console.log('Exponent:' + exponent);
    if (exponent === 0) return 1
    console.log('exponent: ' + exponent)
    return base * power(base, exponent - 1);
}

console.log(power(2, 2))
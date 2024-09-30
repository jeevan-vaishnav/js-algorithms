function fact(x) {
    console.log(x)
    // 5 * 4 * 3 * 2 * 1
    if (x < 0) return 0
    if (x <= 1) return 1
    return x * fact(x - 1)
}


console.log(fact(4))
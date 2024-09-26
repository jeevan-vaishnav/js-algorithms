const sumRange = (value) => {
    // console.log(`Calling sumRange(${value})`);
    
    if (value === 0) {
        console.log(`Returning 1 because value is 1`);
        return 0;
    }

    const result = value + sumRange(value - 1);
    console.log(`Returning ${result} for sumRange(${value})`);
    
    return result;
}

const totalSum = sumRange(5);
console.log(`Total Sum: ${totalSum}`);

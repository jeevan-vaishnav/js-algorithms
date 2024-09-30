function checkOddValues(arr) {
    console.log("array slice: ", arr.slice(1))
    let result = [];

    function inputHandler(helperInput) {
        if (helperInput.length === 0) return
        console.log(helperInput)
        console.log(helperInput[0])
        if (helperInput[0] % 2 === 0) {
            result.push(helperInput[0])
        }
        inputHandler(helperInput.slice(1))
    }

    inputHandler(arr);

    return result;
}


console.log(checkOddValues([1, 2, 3, 4, 5, 6]))
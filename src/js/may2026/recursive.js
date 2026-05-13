function checkOds(arr) {
    const tempOds = []
    function handlerRec(input) {
        if (input.length === 0) return false

        if (input[0] % 2 !== 0) {
            tempOds.push(input[0])
        }
        handlerRec(input.slice(1))
    }
    handlerRec(arr)
    return tempOds
}
//sample data
const sampleArray = [1, 5, 5, 4, 7, 8, 9, 5, 2, 3, 6, 45, 1, 2, 1, 15, 2]
const result = checkOds(sampleArray)
console.log("Check Ods,", result)
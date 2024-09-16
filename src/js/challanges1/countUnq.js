/**
 * [1,1,4,5,6,4,4,5,6]; un number 1 4 5 6 - total count 4
 */


function countUniValues(arr) {
    let i = 0;
    for (var j = 0; j < arr.length; j++) {
        // i = 1, j =1
        //1 2
        // 1 [ 1 = 4]
        console.log(i, j)
        console.log(arr)
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]

        }
    }

    return i + 1;
}

console.log("total un : " + countUniValues([1, 1, 2, 4, 5, 4]))
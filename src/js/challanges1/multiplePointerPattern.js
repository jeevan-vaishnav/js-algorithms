// Before refctor 
// const multiplePointerPattern = (arr) => {

//     for (let i = 0; i < arr.length; i++) {
//         console.log("Outer: " + i);
//         for (let j = i + 1; j < arr.length; j++) {
//             console.log("Inner: " + j)
//             if (arr[i] + arr[j] === 0) {
//                 return [arr[i], arr[j]]
//             }
//         }
//     }
// }
// const result = multiplePointerPattern([-1, -3, -2, -1, 0, 5, 6, 4, 7]);
// console.log(result)

// after refactor 


const sumZero = (arr) => {
    console.log(arr);
    let left = 0;
    let right = arr.length - 1;
    console.log("Left :" + left + " Right :" + right);
    while (left < right) {
        console.log("While Loop : Left :" + left + " Right :" + right);
        let sum = arr[left] + arr[right];
        console.log("Sum is : " + sum)
        if (sum === 0) {
            return arr[left] + arr[right]
        } else if (sum > 0) {
            right--
        } else {
            left++
        }
    }
}

const mPointerPattern = sumZero([-1, -3, -2, -1, 0, 1, 6, 4, 7]);
console.log(mPointerPattern)
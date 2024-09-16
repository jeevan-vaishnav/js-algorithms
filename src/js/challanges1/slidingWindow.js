/**
 * Siding Window
 * This pattern involves creating a window which can either be an array 
 * or number one position to another
 * 
 * Depending on a certain condition , the window either increases or closes
 * (and a new window is created)
 *
 */

function maxSum(arr,num){

    if(arr.length < num) return null;
    let maxSum = 0 ;
    let tempSum = 0;
    for(let i = 0; i < num; i++){
        maxSum += arr[i];
    }
    tempSum = maxSum
    console.log(tempSum);
    

}


const resultMaxSum = maxSum([2,6,9,2,1,8,5,6,3],3)
console.log(resultMaxSum)




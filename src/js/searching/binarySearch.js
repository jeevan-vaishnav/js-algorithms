console.log("Binary Search")
const sortedArray = [10,20,30,40,50,60,70,80,90,100]
const lookingNumber = 90;
console.log("Sorted Array:")
console.log(sortedArray)
const resultIndex = binnarySearch(sortedArray,lookingNumber)
console.log("Index Is: ", resultIndex)

function binnarySearch(arr,target){
    let left = 0;
    let right = arr.length - 1
    console.log("Left:",left," Right:",right)

    while(left <= right){
        let mid = Math.floor((left + right) / 2)
        console.log("mid value ",arr[mid])
        if(arr[mid] === target){
            return mid
        }else if (arr[mid] < target){
            left = mid + 1
            console.log(left)
        }else{
            console.log("else ", right)
            right = mid - 1
        }
    }

}


const bubbleSort = (arr: number[]) => {
    console.log(arr);
    for (let y = arr.length; y > 0; y--) {
        for (let z = 0; z < y - 1; z++) {
            console.log(arr, arr[z], arr[z + 1])
            if (arr[z] > arr[z + 1]) {
                let temp = arr[z];
                arr[z] = arr[z + 1];
                arr[z + 1] = temp
            }
        }
        console.log("New Y");
    }
}

console.log(bubbleSort([40, 30, 35, 41, 8, 60]))
console.log("Kuch Karte Hai using JS")
/**
capitalizeFirst(['car','taco','banana']); 
['Car','Taco','Banana']
*/
function capitalizeFirst(inputArray){
    // console.log(inputArray)
    // console.log(inputArray[0])
    // console.log("Using Remaining leter")
    // console.log(inputArray.slice(1))
    // console.log(inputArray[0].toUpperCase())
    // console.log(inputArray[0].toUpperCase() + inputArray.slice(1))
    // console.log(inputArray[0].substring())
    let res = inputArray.map((word)=>{
        console.log("First: ", word[0].toUpperCase() ,"Slice: "+ word.slice(1))
        return word[0].toUpperCase() + word.slice(1);
    })

    return res
}

let BaseArray = ['i','me','my','myself','itsme','us']
const result = capitalizeFirst(BaseArray);
console.log("result is :", result)
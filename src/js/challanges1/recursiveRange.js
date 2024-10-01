// range solutions using recursive

function range(num){
    if(num === 0) return 0;
    return num + range(num - 1);
}

console.log(range(5));
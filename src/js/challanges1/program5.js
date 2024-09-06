//print all pairs

const pairs  = (n) => {
    // 1 2 3 4 5 6 7 8 9 10
    for(let i =1 ; i<=n ;i++){
        for(let j=1;j<=n;j++){
            console.log(i + ":" + j)
        }
    }
}

pairs(10)
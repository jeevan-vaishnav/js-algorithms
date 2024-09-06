const upOnDown = (n) => {
    console.log("Going Up");
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
    console.log("At the top \n going down");
    for (let j = n - 1; j >= 0; j--) {
        console.log(j);
    }
    console.log("Back down \n bye!")
}

upOnDown(5)

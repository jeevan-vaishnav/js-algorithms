console.log('Count Down');

function countDown(num) {
    console.log("Num is: " + num);
    if (num <= 0) {
        console.log("All Done");
        return false;
    }
    num--;
    countDown(num);
}

countDown(5);
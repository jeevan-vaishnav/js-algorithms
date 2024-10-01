// string recursive reverse
function reverse(str) {
    if (str.length <= 1) return str;
    console.log("str:" + reverse(str.slice(1)) + str[0])
    return reverse(str.slice(1)) + str[0];
}

console.log(reverse("jege"))
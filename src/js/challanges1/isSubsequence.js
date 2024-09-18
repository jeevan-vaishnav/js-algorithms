const isSubsequence = (str1, str2) => {
    console.log(str1)
    console.log(str2);
    let i = 0;
    let j = 0;
    if (!str1) return true;
    while (j < str2.length) {
        console.log(` STR1 ${str2[j]} === STR2 ${str1[i]}`);
        if(str2[j] === str1[i]) i++;
        console.log(`${i} === ${str1.length}`);
        if(i === str1.length) return true;
        j++;
    }
}

console.log(isSubsequence('abc', 'akilblk'))// false
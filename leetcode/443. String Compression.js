function compress(chars) {
    let res = 0;
    let i = 0;
    let newIndex = 0
    while (i < chars.length) {
        let char = chars[i];
        let countChar = 0;
        while (i < chars.length && chars[i] == char) {
            countChar++;
            i++;
        }
        chars[newIndex++] = char;
        res += 1;
        if (countChar == 1) continue;

        let countCharStr = countChar + '';
        res += countCharStr.length;
        for (let j = 0; j < countCharStr.length; j++) {
            chars[newIndex++] = countCharStr[j];
        }
    }
    return res;
};
compress(["a","a","b","b","c","c","c"])
compress(["a"])
compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"])
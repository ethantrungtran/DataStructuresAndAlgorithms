function reverseWords(s) {
    const words = [];
    let i = 0;
    while (i < s.length) {
        while (i < s.length && s[i] == ' ') i++;
        if (i >= s.length - 1) break;
        let j = i;
        for (; j < s.length; j++) if (s[j] == ' ') break;
        words.push(s.slice(i, j));
        i = j+1;
    }
    console.log("🚀 ~ reverseWords ~ words:", words)
    return words.reverse().join(' ');
};

reverseWords("  hello world  ")

function reverseWords2(s) {
    return s.trim().split(" ").filter(word => word.length > 0).reverse().join(" ");
};
function validPalindrome(s) {
    // O(n)
    let count = 1;
    const dfs = (l, r) => {
        if (l >= r) return true;
        if (s[l] == s[r]) return dfs(l+1, r-1);

        if (count > 0) {
            count--;
            return dfs(l+1, r) || dfs(l, r-1);
        }
        return false;
    }
    return dfs(0, s.length - 1);
}

function validPalindrome2(s) {
    // keep the s
    // delete one character
    // O(n^2)
    const isPalindrome = (str) => {
        let l = 0, r = str.length - 1;
        while (l < r) {
            if (str[l] != str[r]) return false;
            l++; r--;
        }
        return true;
    }
    if (isPalindrome(s)) return true;
    for (let i = 0; i < s.length; i++) {
        if (isPalindrome(s.slice(0, i) + s.slice(i+1))) return true;
    }
    return false;
};
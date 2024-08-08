function lengthOfLongestSubstringKDistinct(s, k) {
    // O(n)
    const map = {};
    let l = 0, r = 0;
    let longest = 0;
    while (r < s.length) {
        map[s[r]] = (map[s[r]] ?? 0) + 1;
        while (l <= r && Object.keys(map).length > k) {
            map[s[l]] = (map[s[l]] ?? 0) - 1;
            if (map[s[l]] == 0) delete map[s[l]];
            l++;
        }
        longest = Math.max(longest, r - l + 1);
        r++;
    }
    console.log("🚀 ~ lengthOfLongestSubstringKDistinct ~ longest:", longest)
    return longest;
}
lengthOfLongestSubstringKDistinct('eceba', 4);
lengthOfLongestSubstringKDistinct('WORLD', 4);
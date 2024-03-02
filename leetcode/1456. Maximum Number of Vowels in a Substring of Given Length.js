function maxVowels(s, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let vowel = 0;
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        if (vowels.has(s[i])) vowel++;
        if (i < k - 1) continue;
        if (i - k >= 0 && vowels.has(s[i-k])) vowel--;
        max = Math.max(max, vowel);
    }
    return max;
};
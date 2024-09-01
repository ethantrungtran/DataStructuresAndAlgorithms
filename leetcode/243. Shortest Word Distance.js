function shortestDistance(wordsDict, word1, word2) {
    // O(n)
    let i1 = -1, i2 = -1;
    let min = Infinity;
    for (let i = 0; i < wordsDict.length; i++) {
        if (wordsDict[i] == word1) i1 = i;
        if (wordsDict[i] == word2) i2 = i;
        if (i1 != -1 && i2 != -1) min = Math.min(min, Math.abs(i2 - i1));
    }
    return min;
};
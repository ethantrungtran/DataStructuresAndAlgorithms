
function lexicalOrder(n) {
    // Time O(n), Space: O(1) (max of n is 5 * 10^4 -> max length of n is 4)
    const res = [];
    const dfs = (start) => {
        if (start > n) return;
        res.push(start);
        for (let i = 0; i <= 9; i++) {
            if (start * 10 + i > n) break;
            dfs(start * 10 + i);
        }
    }
    for (let i = 1; i <= 9; i++) {
        dfs(i);
    }
    return res;
};
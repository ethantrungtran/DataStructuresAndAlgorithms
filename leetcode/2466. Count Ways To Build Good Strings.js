function countGoodStrings(low, high, zero, one) {
    // Time: O(hight)
    const mod = 10 ** 9 + 7;
    const dp = Array(high + 1).fill(0);
    dp[0] = 1;
    for (let i = 0; i <= high; i++) {
        if (i >= zero) dp[i] = ((dp[i] + dp[i - zero]) % mod);
        if (i >= one) dp[i] = ((dp[i] + dp[i - one]) % mod);
    }

    let count = 0;
    for (let i = low; i <= high; i++) count = ((count + dp[i]) % mod);
    return count;
}

function countGoodStrings2(low, high, zero, one) {
    // Time: O(hight)
    const mod = 10 ** 9 + 7;
    const map = {};
    const dfs = (size) => {
        if (size > high) return 0;
        if (map[size] != null) return map[size];

        let res = 0;
        if (low <= size && size <= high) res++;
        res += (dfs(size + zero) % mod);
        res += (dfs(size + one)  % mod);
        map[size] = res % mod;
        return map[size];
    }

    return dfs(0);
};
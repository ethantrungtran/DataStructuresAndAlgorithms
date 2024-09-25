function diffWaysToCompute(expression) {
    // Time O(2^n) Space O(2^n) with 1 <= expression.length <= 20 -> n <= 10
    const map = {};
    const dfs = (str) => {
        if (map[str]) return map[str];
        const res = [];
        for (let i = 0; i < str.length; i++) {
            if (str[i] != '+' && str[i] != '-' && str[i] != '*') continue;
            const left = dfs(str.substring(0, i));
            const right = dfs(str.substring(i+1));
            for (let leftVal of left) {
                for (let rightVal of right) {
                    if (str[i] == '+') res.push(leftVal + rightVal);
                    else if (str[i] == '-') res.push(leftVal - rightVal);
                    else if (str[i] == '*') res.push(leftVal * rightVal);
                }
            }
        }
        if (res.length == 0) res.push(+str);
        map[str] = res;
        return res;
    }
    return dfs(expression);
};
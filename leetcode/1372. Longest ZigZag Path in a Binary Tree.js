function longestZigZag(root) {
    // O(n)
    let res = 0;
    const dfs = (node) => {
        if (node == null) return [0, 0];
        const [_, maxRight] = dfs(node.left);
        const [maxLeft] = dfs(node.right);
        res = Math.max(res, 1+maxRight, 1+maxLeft);
        return [1+maxRight, 1+maxLeft];
    }
    dfs(root);
    return res - 1;
};
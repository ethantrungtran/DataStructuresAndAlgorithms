
function getVerticalOrder(root) {
    // O(n)
    const cols = {};
    let start = Infinity, end = -Infinity;
    const dfs = (node, col) => {
        if (node == null) return;
        if (cols[col] == null) cols[col] = [];
        cols[col].push(node.val);
        start = Math.min(start, col), end = Math.max(end, col);
        dfs(node.left, col - 1);
        dfs(node.right, col + 1);
    }
    dfs(root, 0);
    const res = [];
    for (let i = start; i <= end; i++) {
        if (cols[i]) res.push(cols[i]);
    }
    console.log("🚀 ~ getVerticalOrder ~ res:", res);
    return res;
}

// [[9], [3,15], [20], [7]]
getVerticalOrder(
    {
        val: 3,
        left: {
            val: 9,
        },
        right: {
            val: 20,
            left: {
                val: 15,
            },
            right: {
                val: 7,
            }
        }
    }
)

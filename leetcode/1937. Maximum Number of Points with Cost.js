function maxPoints(points) {
    // Time O(m*n)
    const rows = points.length, cols = points[0].length;
    const calLeft = (arr) => {
        const left = Array(cols).fill(0);
        left[0] = arr[0];
        for (let i = 1; i < cols; i++) {
            left[i] = Math.max(left[i-1] - 1,arr[i]);
        }
        return left;
    }
    const calRight = (arr) => {
        const right = Array(cols).fill(0);
        right[cols - 1] = arr[cols - 1];
        for (let i = cols - 2; i>= 0; i--) {
            right[i] = Math.max(right[i+1] - 1,arr[i]);
        }
        return right;
    }

    let pre = points[0];
    for (let i = 1; i < rows; i++) {
        const left = calLeft(pre);
        const right = calRight(pre);
        const curr = [];
        for (let j = 0; j < cols; j++) {
            curr.push(points[i][j] + Math.max(left[j], right[j]));
        }
        pre = curr;
    }
    return Math.max(...pre);
}

function maxPoints2(points) {
    // Time: O(m*n)
    const rows = points.length, cols = points[0].length;
    const map = {};
    const dfs = (row, col) => {
        if (row >= rows) return 0;
        const key = row + ',' + col;
        if (map[key] != null) return map[key];

        let res = -Infinity;
        for (let i = 0; i < cols; i++) {
            res = Math.max(
                res, 
                dfs(row + 1, i) + points[row][i] - (col != null ? Math.abs(col - i) : 0)
            );
        }
        map[key] = res;
        return res;
    }
    return dfs(0, null);
};
class UnionFind {
    parent;
    constructor(n) {
        this.parent = Array(n).fill(-1);
    }
    find(x) {
        if (this.parent[x] == -1) return x;
        this.parent[x] = this.find(this.parent[x]);
        return this.parent[x];
    }
    union(x, y) {
        const parentX = this.find(x);
        const parentY = this.find(y);
        if (parentX == parentY) return;
        this.parent[parentX] = parentY;
    }
    isConnected(x, y) {
        return this.find(x) == this.find(y);
    }
}
function numIslands2(m, n, positions) {
    const grid = Array(m).fill([]).map((v) => Array(n).fill(0));
    const dir = [[0, -1], [0, 1], [-1, 0], [1, 0]];
    let res = [];
    const unionFind = new UnionFind(m * n);
    let count = 0;
    for (let [r, c] of positions) {
        if (grid[r][c] == 1) {
            res.push(count);
            continue;
        }
        grid[r][c] = 1;
        const curr = c + r * n;
        count += 1;
        for (const [dr, dc] of dir) {
            const [nr, nc] = [r+dr, c+dc];
            const nei = nc + nr * n;
            if (
                nr < 0 || nc < 0 || nr == m || nc == n 
                || grid[nr][nc] == 0 
                || unionFind.isConnected(curr, nei)
            ) continue;
            unionFind.union(curr, nei);
            count--;
        }
        res.push(count);
    }
    return res;
};
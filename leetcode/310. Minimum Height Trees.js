function findMinHeightTrees(n, edges) {
    // O(n)
    if (n == 1) return [0];
    const graph = {};
    for (let i = 0; i < n; i++) graph[i] = new Set();
    for (let [from, to] of edges) {
        graph[from].add(to);
        graph[to].add(from);
    }

    let leaves = [];
    for (let i = 0; i < n; i++) {
        if (graph[i].size == 1) leaves.push(i);
    }

    let count = leaves.length;
    while (count < n) {
        let newLeaves = [];
        for (let leave of leaves) {
            let [from] = graph[leave];
            graph[from].delete(leave);
            if (graph[from].size == 1) newLeaves.push(from);
        }
        leaves = newLeaves;
        count += leaves.length;
    }
    return leaves;
}

function findMinHeightTrees2(n, edges) {
    // O(n^2)
    const graph = {};
    for (let [from, to] of edges) {
        if (!graph[from]) graph[from] = [];
        if (!graph[to]) graph[to] = [];
        graph[from].push(to);
        graph[to].push(from);
    }

    const getHeight = (node) => {
        let height = 0;
        const queue = [node];
        const visit = new Set();
        visit.add(node);
        while (queue.length > 0) {
            height++;
            let len = queue.length;
            for (let i = 0; i < len; i++) {
                const curr = queue.shift();
                if (!graph[curr]) continue;
                for (let next of graph[curr]) {
                    if (visit.has(next)) continue;
                    visit.add(next);
                    queue.push(next);
                }
            }
        }
        return height;
    }
    const heights = [];
    let minHeight = n;
    for (let i = 0; i < n; i++) {
        const currHeight = getHeight(i);
        heights.push(currHeight);
        minHeight = Math.min(minHeight, currHeight);
    }
    const res = [];
    for (let i = 0; i < n; i++) if (heights[i] == minHeight) res.push(i);
    return res;
};
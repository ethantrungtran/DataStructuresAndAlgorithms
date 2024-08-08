function canVisitAllRooms(rooms) {
    const graph = {};
    rooms.forEach((keys, index) => {
        graph[index] = keys;
    });
    const visit = new Set();
    const dfs = (curr) => {
        if (visit.has(curr) || graph[curr] == null) return;
        visit.add(curr);
        for (let next of graph[curr]) {
            dfs(next);
        }
    }
    dfs(0);
    return visit.size == rooms.length;
};
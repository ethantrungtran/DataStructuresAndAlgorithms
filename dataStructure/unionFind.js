class UnionFind {
    parent;
    rank;
    constructor(n) {
        this.parent = Array(n).fill(0).map((v, i) => i);
        this.rank = Array(n).fill(0);
    }
    find(p) {
        if (this.parent[p] == p) return p;
        this.parent[p] = this.find(this.parent[p]);
        return this.parent[p];
    }
    union(p, q) {
        let rootP = this.find(p);
        let rootQ = this.find(q);
        if (rootP == rootQ) return;
        if (this.rank[rootP] < this.rank[rootQ]) {
            this.parent[rootP] = rootQ;
            this.rank[rootQ]++;
        } else {
            this.parent[rootQ] = rootP;
            this.rank[rootP]++;
        }
    }
    isConnected(p, q) {
        return this.find(p) == this.find(q);
    }
    reset(p) {
        this.parent[p] = p;
        this.rank[p] = 0;
    }
}
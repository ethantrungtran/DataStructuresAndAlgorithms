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
        // while (this.parent[p] != p) {
        //     p = this.parent[this.parent[p]];
        // }
        // return p;
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

function findAllPeople(n, meetings, firstPerson) {
    meetings.sort((a, b) => a[2] - b[2]);

    const uf = new UnionFind(n);
    uf.union(0, firstPerson);

    // for every time we have a pool of people that talk to each other
    // if someone knows a secret proir to this meeting - all pool will too
    // if not - reset unions from this pool
    let i = 0;
    while (i < meetings.length) {
        let curTime = meetings[i][2];
        let pool = [];
        while (i < meetings.length && curTime == meetings[i][2]) {
            let currMeeting = meetings[i];
            uf.union(currMeeting[0], currMeeting[1]);
            pool.push(currMeeting[0], currMeeting[1]);
            i++
        }

        // meeting that took place now should't affect future
		// meetings if people don't know the secret
        for (let j of pool) {
            if (!uf.isConnected(0, j)) uf.reset(j);
        }
    }

    // if the person is conneted to 0 - they know a secret
    const res = [];
    for (let i = 0; i < n; i++) {
        if (uf.isConnected(0, i)) res.push(i);
    }
    return res;
};
function eliminateMaximum(dist, speed) {
    // O(n)
    const n = dist.length;
    const monsterArrivalTime = Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        let time = Math.ceil(dist[i] / speed[i]);
        if (time < n) monsterArrivalTime[time]++;
    }
    let monsters = 0;
    for (let min = 0; min < n; min++) {
        if (monsters + monsterArrivalTime[min] > min) return min;
        monsters += monsterArrivalTime[min];
    }
    return n;
}

function eliminateMaximum2(dist, speed) {
    // O(nlogn)
    const n = dist.length;
    // [time, dist, speed]
    const minHeap = new PriorityQueue({compare: (a, b) => a[0] - b[0]});
    for (let i = 0; i < n; i++) {
        minHeap.enqueue([dist[i] / speed[i], dist[i], speed[i]]);
    }

    let min = 0;
    while (minHeap.size() > 0) {
        const [_, currDist, currSpeed]= minHeap.dequeue();
        if (currDist - (currSpeed * min) <= 0) return min;
        min++;
    }
    return min;
};
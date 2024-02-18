function furthestBuilding(heights, bricks, ladders) {
    // O(nlogn)
    const maxHeap = new PriorityQueue({compare: (a, b) => b - a});
    let i = 0;
    for (; i < heights.length - 1; i++) {
        const diff = heights[i+1] - heights[i];
        if (diff <= 0) continue;

        maxHeap.enqueue(diff);
        bricks -= diff;
        if (bricks < 0) {
            bricks += maxHeap.dequeue();
            ladders--;
        }
        if (ladders < 0) break;
    }
    return i;
}

function furthestBuilding2(heights, bricks, ladders) {
    // O(2^n)
    const n = heights.length;
    let res = 0;
    const helper = (i, b, l) => {
        res = Math.max(res, i);
        if (i >= n - 1) return;
        if (heights[i] >= heights[i+1]) helper(i+1, b, l);
        else {
            if (l > 0) helper(i+1, b, l-1);
            if (b >= heights[i+1] - heights[i]) helper(i+1, b - (heights[i+1] - heights[i]), l);
        }
    }
    helper(0, bricks, ladders);
    return res;
};

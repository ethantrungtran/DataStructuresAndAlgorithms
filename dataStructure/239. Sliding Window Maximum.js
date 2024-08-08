class MaxQueue {
    entryQueue;
    candidateQueue;
    constructor() {
        this.entryQueue = [];
        this.candidateQueue = [];
    }
    enqueue(num) {
        this.entryQueue.push(num);
        while (this.candidateQueue.length > 0 && this.candidateQueue[this.candidateQueue.length - 1] < num) {
            this.candidateQueue.pop();
        }
        this.candidateQueue.push(num);
    }
    dequeue() {
        const removedVal = this.entryQueue.shift();
        if (removedVal == this.candidateQueue[0]) this.candidateQueue.shift();
        return removedVal;
    }
    getMax() {
        return this.candidateQueue[0];
    }
}
function maxSlidingWindow(nums, k) {
    const maxQueue = new MaxQueue();
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        maxQueue.enqueue(nums[i]);
        if (i >= k) maxQueue.dequeue();
        if (i >= k - 1) res.push(maxQueue.getMax());
    }
    return res;
}



function maxSlidingWindow2(nums, k) {
    const queue = [];
    const res = [];
    let l = 0, r = 0;
    while (r < nums.length) {
        while (queue.length > 0 && queue[queue.length - 1] < nums[r]) queue.pop();
        queue.push(nums[r]);
        
        if (r >= k - 1) {
            if (r >= k) {
                if (nums[l] == queue[0]) queue.shift();
                l++
            }
            res.push(queue[0]);
        }
        r++;
    }
    return res;
};
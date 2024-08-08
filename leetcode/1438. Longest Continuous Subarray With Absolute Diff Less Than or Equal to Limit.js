function longestSubarray(nums, limit) {
    // O(n)
    const ascQueue = []; // to keep track min val
    const descQueue = []; // to keep track max val
    let res = 0, l = 0;
    for (let i = 0; i < nums.length; i++) {
        while (ascQueue.length && nums[ascQueue[ascQueue.length - 1]] > nums[i]) ascQueue.pop();
        ascQueue.push(i);
        while (descQueue.length && nums[descQueue[descQueue.length - 1]] < nums[i]) descQueue.pop();
        descQueue.push(i);

        while (nums[descQueue[0]] - nums[ascQueue[0]] > limit) {
            l++;
            if (descQueue[0] < l) descQueue.shift();
            if (ascQueue[0] < l) ascQueue.shift();
        }
        res = Math.max(res, i - l + 1);
    }
    return res;
}


function longestSubarray4(nums, limit) {
    // O(n*logn)
    const minHeap = new PriorityQueue({compare: (x1, x2) => x1[0] - x2[0]});
    const maxHeap = new PriorityQueue({compare: (x1, x2) => x2[0] - x1[0]});
    let l = 0, r = 0, res = 0;
    while (r < nums.length) {
        minHeap.enqueue([nums[r], r]);
        maxHeap.enqueue([nums[r], r]);
        while (l < r && (maxHeap.front()[0] - minHeap.front()[0]) > limit) {
            l++;
            while (minHeap.front()[1] < l) minHeap.dequeue();
            while (maxHeap.front()[1] < l) maxHeap.dequeue();
        }
        res = Math.max(res, r - l + 1);
        r++;
    }
    return res;
}

function longestSubarray3(nums, limit) {
    // O(n^2)
    const n = nums.length;
    let maxLen = 1;
    for (let i = 0; i < n; i++) {
        let max = nums[i], min = nums[i];
        for (let j = i + 1; j < n; j++) {
            max = Math.max(max, nums[j]);
            min = Math.min(min, nums[j]);

            if (Math.abs(max - min) > limit) break;
            maxLen = Math.max(maxLen, j - i + 1);
        }
    }
    return maxLen;
}

function longestSubarray2(nums, limit) {
    // O(n^3)
    const n = nums.length;
    let max = 1;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let maxDiff = 0;
            for (let k = i; k <= j; k++) maxDiff = Math.max(maxDiff, Math.abs(nums[j] - nums[k]));
            if (maxDiff > limit) break;
            max = Math.max(max, j - i + 1);
        }
    }
    return max;
};
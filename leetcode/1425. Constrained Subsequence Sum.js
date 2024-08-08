function constrainedSubsetSum(nums, k) {
    // queue (a decreasing queue) is the maximum result in the last element of result
    const dp = Array(nums.length).fill(0);
    const queue = []; // contains index in nums, is a decreasing queue by value of that index in nums
    let res = nums[0];
    for (let i = 0; i < nums.length; i++) {
        // make sure queue in range [i-k, i]
        if (queue.length && i - queue[0] > k) queue.shift();
        // calculate dp[i]
        dp[i] = nums[i] + (queue.length ? dp[queue[0]] : 0);
        // delete val less than dp[i] in the right
        while (queue.length && dp[queue[queue.length - 1]] < dp[i]) queue.pop();
        if (dp[i] > 0) queue.push(i);
        res = Math.max(res, dp[i]);
    }
    return res;
};

function constrainedSubsetSum2(nums, k) {
    // O(n*logn)
    // maxHeap: [value, index]
    const maxHeap = new PriorityQueue({compare: (x1, x2) => x2[0] - x1[0]});
    let res = nums[0];
    for (let i = 0; i < nums.length; i++) {
        while (maxHeap.size() && i - maxHeap.front()[1] > k) maxHeap.dequeue();
        let currSum = nums[i];
        if (maxHeap.size() && maxHeap.front()[0] > 0) currSum += maxHeap.front()[0];

        res = Math.max(res, currSum);
        maxHeap.enqueue([currSum, i]);
    }
    return res;
}


function constrainedSubsetSum3(nums, k) {
    // brute force: O(n * k)
    const n = nums.length;
    const dp = Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        let max = 0;
        for (let j = Math.max(0, i - k); j <= i - 1; j++) {
            max = Math.max(max, dp[j]);
        }
        dp[i] = max + nums[i];
    }
    return Math.max(...dp);
}



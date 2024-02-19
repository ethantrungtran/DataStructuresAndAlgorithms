function maxSubarraySumCircular(nums) {
    // O(n)
    let currMax = 0, currMin = 0;
    let globalMax = nums[0], globalMin = nums[0];
    let total = 0;
    for (let num of nums) {
        // get max sum in the middle
        currMax = Math.max(num, currMax + num);
        globalMax = Math.max(globalMax, currMax);

        // get min sum in the middle
        currMin = Math.min(num, currMin + num);
        globalMin = Math.min(globalMin, currMin);

        total += num;
    }

    if (globalMax < 0) return globalMax;
    return Math.max(globalMax, total - globalMin);
};

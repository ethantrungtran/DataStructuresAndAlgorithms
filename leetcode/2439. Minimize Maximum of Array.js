function minimizeArrayValue(nums) {
    // O(n)
    let res = nums[0];
    let prefixSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        prefixSum += nums[i];
        res = Math.max(res, Math.ceil(prefixSum / (i + 1)));
    }
    return res;
};
function increasingTriplet2(nums) {
    const n = nums.length;
    let minLeft = Array(n).fill(nums[0]), maxRight = Array(n).fill(nums[n-1]);
    for (let i = 1; i < n; i++) minLeft[i] = Math.min(nums[i], minLeft[i-1]);
    for (let i = n - 2; i >= 0; i--) maxRight[i] = Math.max(nums[i], maxRight[i+1]);
    for (let i = 1; i < n-1; i++) {
        if (minLeft[i] < nums[i] && nums[i] < maxRight[i]) return true;
    }
    return false;
};

function increasingTriplet(nums) {
    let first = Infinity, second = Infinity;
    for (let num of nums) {
        // num is the third
        if (num <= first) first = num;
        else if (num <= second) second = num;
        else return true;
    }
    return false;
};
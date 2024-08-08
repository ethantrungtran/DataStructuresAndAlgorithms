//https://leetcode.com/problems/maximum-product-difference-between-two-pairs/
function maxProductDifference(nums) {
    let firstHigh = -Infinity, secondHigh = -Infinity;
    let firstLow = Infinity, secondLow = Infinity;
    for (let i = 0; i < nums.length; i++) {
        // find low
        if (nums[i] <= firstLow) {
            secondLow = firstLow;
            firstLow = nums[i];
        } else if (nums[i] < secondLow) secondLow = nums[i];
        // find high
        if (nums[i] >= firstHigh) {
            secondHigh = firstHigh;
            firstHigh = nums[i];
        } else if (nums[i] > secondHigh) secondHigh = nums[i];
    }
    return firstHigh * secondHigh - firstLow * secondLow;
}

function maxProductDifference2(nums) {
    const n = nums.length;
    nums.sort((a,b) => a-b);
    return nums[n-1] * nums[n-2] - nums[0] * nums[1];
};
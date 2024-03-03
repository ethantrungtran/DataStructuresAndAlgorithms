function longestSubarray(nums) {
    // O(n)
    let k = 1;
    let l = 0, r = 0;
    let res = 0;
    while (r < nums.length) {
        if (nums[r] == 0) {
            k--;
            while (l <= r && k < 0) {
                if (nums[l] == 0) k++;
                l++;
            }
        }
        r++;
        res = Math.max(res, r - l - 1); // -1 because we always need to delete a element
    }
    return res;
};
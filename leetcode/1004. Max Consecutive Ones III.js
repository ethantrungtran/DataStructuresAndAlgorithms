function longestOnes(nums, k) {
    // O(n)
    let l = 0, r = 0;
    let res = 0;
    while (r < nums.length) {
        // if right == 0 then decrease k
        if (nums[r] == 0) {
            // decrease k
            k--;
            // k < 0 then move left
            while (l <= r && k < 0) {
                if (nums[l] == 0) k++;
                l++;
            }
        }
        r++;
        res = Math.max(res, r - l);
    }
    return res;
};
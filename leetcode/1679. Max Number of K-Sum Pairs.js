function maxOperations(nums, k) {
    // O(nlogn)
    nums.sort((x, y) => x-y); // ascending
    let l = 0, r = nums.length - 1;
    let operations = 0;
    while (l < r) {
        const sum = nums[l] + nums[r];
        if (sum == k) {
            operations++;
            l++; r--;
        } else if (sum > k) r--;
        else l++;
    }
    return operations;
};
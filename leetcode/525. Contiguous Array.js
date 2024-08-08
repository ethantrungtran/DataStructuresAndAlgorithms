function findMaxLength(nums) {
    // O(n)
    let max = 0;
    let count = 0;
    const map = {0: -1};
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) count++;
        else count--;

        if (map[count] != null) max = Math.max(max, i - map[count]);
        else map[count] = i;
    }
    return max;
};
function findMaxLength2(nums) {
    // O(n^2)
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        let one = 0;
        for (let j = i; j < nums.length; j++) {
            one += nums[j];
            if (2 * one == j - i + 1) res = Math.max(res, j - i + 1);
        }
    }
    return res;
};

/**
 Do not return anything, modify nums in-place instead.
 */

 function moveZeroes(nums) {
    const swap = (i1, i2) => {
        let tmp = nums[i1];
        nums[i1] = nums[i2];
        nums[i2] = tmp;
    }
    let zeroIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) continue;
        // move nonZero to the left
        swap(zeroIndex, i);
        zeroIndex++;
    }
}

function moveZeroes2(nums) {
    const n = nums.length;
    let zeroIndex = 0, nonZeroIndex = 0;
    const swap = (i1, i2) => {
        let tmp = nums[i1];
        nums[i1] = nums[i2];
        nums[i2] = tmp;
    }

    while (zeroIndex < n && nums[zeroIndex] != 0) zeroIndex++;
    while (nonZeroIndex < n) {
        while (zeroIndex < n && nums[nonZeroIndex] == 0) {
            swap(nonZeroIndex, zeroIndex);
            zeroIndex++;
        }
        nonZeroIndex++;
    }
};
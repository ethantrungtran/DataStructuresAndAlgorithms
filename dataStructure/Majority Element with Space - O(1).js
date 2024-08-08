// https://leetcode.com/problems/majority-element/
function majorityElement(nums) {
    let val = 0, count = 0;
    for (let num of nums) {
        if (num == val) count++;
        else if (count == 0) {
            val = num;
            count++;
        } else {
            count--;
        }
    }
    return val;
};

// https://leetcode.com/problems/majority-element-ii/description/
function majorityElement(nums) {
    let x = -1, cx = 0;
    let y = -1, cy = 0;
    for (let num of nums) {
        if (num == x) cx++;
        else if (num == y) cy++;
        else if (cx == 0) { x = num; cx++ }
        else if (cy == 0) { y = num; cy++ }
        else { cx--; cy--; }
    }
    cx = 0, cy = 0;
    for (let num of nums) {
        if (num == x) cx++;
        else if (num == y) cy++;
    }
    const res = [];
    if (cx > nums.length / 3) res.push(x);
    if (cy > nums.length / 3) res.push(y);
    return res;
}
function maxArea(height) {
    // O(n)
    let res = 0;
    let l = 0, r = height.length - 1;
    while (l < r) {
        res = Math.max(res, (r - l) * Math.min(height[l], height[r]));
        if (height[l] < height[r]) l++;
        else r--;
    }
    return res;
};
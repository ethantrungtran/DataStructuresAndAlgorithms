function trap3(height) {
    // Time O(n) | Space O(1)
    let leftMax = 0, rightMax = 0;
    let left = 0, right = height.length - 1;
    let res = 0;
    while (left <= right) {
        if (height[left] < height[right]) {
            if (height[left] > leftMax) leftMax = height[left];
            else res += leftMax - height[left];
            left++;
        } else {
            if (height[right] > rightMax) rightMax = height[right];
            else res += rightMax - height[right];
            right--;
        }
    }
    return res;
}

function trap2(height) {
    const n = height.length;
    const leftMax = [...height];
    for (let i = 1; i < n; i++) leftMax[i] = Math.max(height[i], leftMax[i - 1]);

    const rightMax = [...height];
    for (let i = n-2; i >= 0; i--) rightMax[i] = Math.max(height[i], rightMax[i + 1])

    let water = 0;
    for (let i = 0; i < n; i++) {
        water += Math.min(leftMax[i], rightMax[i]) - height[i];
    }
    return water;
};

function trap4(height) {
    const n = height.length;
    const maxLeft = Array(n).fill(0);
    let curr = height[0];
    for (let i = 1; i < n; i++) {
        maxLeft[i] = curr;
        curr = Math.max(curr, height[i]);
    }

    const maxRight = Array(n).fill(0);
    curr = height[n-1];
    for (let i = n - 2; i >= 0; i--) {
        maxRight[i] = curr;
        curr = Math.max(curr, height[i]);
    }

    let water = 0;
    for (let i = 1; i < n - 1; i++) {
        let min = Math.min(maxLeft[i], maxRight[i]);
        if (min - height[i] > 0) water += min - height[i];
    }
    return water;
}
function trap(height) {
    // Time O(n) | Space O(1)
    let leftMax = 0, rightMax = 0;
    let leftIdx = 0, rightIdx = height.length - 1;
    let water = 0;
    while (leftIdx <= rightIdx) {
        if (height[leftIdx] < height[rightIdx]) {
            if (leftMax < height[leftIdx]) leftMax = height[leftIdx];
            else water += leftMax - height[leftIdx];
            leftIdx++;
        } else {
            if (rightMax < height[rightIdx]) rightMax = height[rightIdx];
            else water += rightMax - height[rightIdx];
            rightIdx--;
        }
    }
    return water;
}
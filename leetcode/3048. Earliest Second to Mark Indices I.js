function earliestSecondToMarkIndices(nums, changeIndices) {
    const n = nums.length;
    changeIndices = changeIndices.map(val => val - 1);
    // isPossible method is called to check if it's possible to mark all indices in s seconds while delaying marking as much as possible.
    const isPossible = (s) => {
        const last = Array(n).fill(-1);
        // Latest Point to Mark an Index
        for (let i = 0; i <= s; i++) last[changeIndices[i]] = i;
        console.log("🚀 ~ isPossible ~ last:", s, last)
        let marked = 0, operations = 0;
        // Store Decrement Operations
        for (let i = 0; i <= s; i++) {
            if (i == last[changeIndices[i]]) { // marking
                if (nums[changeIndices[i]] > operations) return false;
                operations -= nums[changeIndices[i]];
                marked++;
            } else { // decreasing
                operations++;
            }
        }
        return marked == n;
    }

    let low = 0, high = changeIndices.length - 1;
    while (low < high) {
        let mid = Math.floor((low+high) / 2);
        if (isPossible(mid)) high = mid;
        else low = mid + 1;
    }
    // Delay Marking as Much as Possible
    return isPossible(low) ? low + 1 : -1;
};

earliestSecondToMarkIndices([2,2,0], [2,2,2,2,3,2,2,1]);
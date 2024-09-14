class Solution {
    public int longestSubarray(int[] nums) {
        // Time O(n), Space O(1)
        int max = nums[0];
        for (int num : nums) max = Math.max(max, num);

        int longest = 0;
        int currLen = 0;
        for (int num : nums) {
            if (num != max) {
                currLen = 0;
            } else {
                longest = Math.max(longest, ++currLen);
            }
        }
        return longest;
    }

    public int longestSubarray2(int[] nums) {
        int max = nums[0];
        for (int num : nums) max = Math.max(max, num);

        int longest = 0;
        int left = 0, right = 0;
        while (right < nums.length) {
            while (left < right && nums[left] != max) {
                left++;
            }
            if (nums[right] != max) left = right + 1;
            longest = Math.max(longest, right - left + 1);
            right++;
        }
        return longest;
    }
}
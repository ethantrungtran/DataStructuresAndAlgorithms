class Solution:
    def maxWidthRamp(self, nums: List[int]) -> int:
        # Time O(n)
        stack = [] # increasing stack
        n = len(nums)
        for i in range(n - 1, -1, -1):
            if len(stack) == 0 or nums[stack[-1]] < nums[i]:
                stack.append(i)

        res = 0
        for i in range(n):
            j = i
            while len(stack) > 0 and nums[i] <= nums[stack[-1]]:
                j = stack.pop()
            res = max(res, j - i)
        return res

    def maxWidthRamp3(self, nums: List[int]) -> int:
        # Time O(n)
        stack = [] # decresing stack
        res = 0
        n = len(nums)
        for i in range(n):
            if len(stack) == 0 or nums[stack[-1]] > nums[i]:
                stack.append(i)
        
        for i in range(n - 1, -1, -1):
            while len(stack) > 0 and nums[stack[-1]] <= nums[i]:
                res = max(res, i - stack.pop())
        return res

    def maxWidthRamp2(self, nums: List[int]) -> int:
        # Time O(nlogn)
        stack = [] # decresing stack
        res = 0
        for i in range(len(nums)):
            if len(stack) == 0 or nums[i] < nums[stack[-1]]:
                stack.append(i)
            else:
                # find the first number in stack that less than or equal to nums[i]
                left, right = 0, len(stack) - 1
                ans = 0
                while left <= right:
                    mid = (right + left) // 2
                    if nums[stack[mid]] <= nums[i]:
                        ans = mid
                        right = mid - 1
                    else:
                        left = mid + 1
                res = max(res, i - stack[ans])
        return res
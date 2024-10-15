class Solution:
    def minimumSteps(self, s: str) -> int:
        # 000110101
        # Time O(n); Space O(1)
        res, countOne = 0, 0
        for i in range(len(s)):
            if s[i] == "1":
                countOne += 1
            else:
                res += countOne
        return res
class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        # Time: O(n)
        remain = 0
        for i in range(len(digits) - 1, -1, -1):
            digits[i] += remain
            if (i == len(digits) - 1):
                digits[i] += 1

            if digits[i] >= 10:
                digits[i] = 0
                remain = 1
            else:
                remain = 0

        if remain == 1:
            digits.insert(0, 1)

        return digits

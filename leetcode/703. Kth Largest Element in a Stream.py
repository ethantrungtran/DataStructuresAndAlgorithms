class KthLargest:

    def __init__(self, k: int, nums: List[int]):
        # Time O(nlog(k))
        self.k = k
        self.minHeap = []
        for val in nums:
            heapq.heappush(self.minHeap, val)
            if len(self.minHeap) > k:
                heapq.heappop(self.minHeap)

    def add(self, val: int) -> int:
        # Time O(log(k))
        heapq.heappush(self.minHeap, val)
        if len(self.minHeap) > self.k:
            heapq.heappop(self.minHeap)
        return self.minHeap[0]



# Your KthLargest object will be instantiated and called as such:
# obj = KthLargest(k, nums)
# param_1 = obj.add(val)
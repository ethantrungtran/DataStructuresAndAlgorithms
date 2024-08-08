LeetCode
https://github.com/datastructures-js/priority-queue

PriorityQueue in this repo is implemented as 3 types:

- `PriorityQueue` that accepts a custom comparator between elements.
- `MinPriorityQueue` which considers an element with smaller priority number as higher in priority.
- `MaxPriorityQueue` which cosiders an element with bigger priority number as higher in priority.

.enqueue(element) adds an element based on its comparison with other elements in the queue. O(log(n))
.dequeue()  removes and returns the element with highest priority in the queue. O(log(n))
.size()     O(1)
.front()    returns the element with highest priority in the queue. O(1)
.back()     returns an element with a lowest priority in the queue. O(1)
.isEmpty()  checks if the queue is empty. O(1)
.toArray()  returns a sorted array of elements by their priorities from highest to lowest. O(n*log(n))
.clear()

```javascript
// empty queue with comparator
const employeesQueue = new PriorityQueue({
  compare: (e1, e2) => {
    if (e1.salary > e2.salary) return -1; // do not swap
    if (e1.salary < e2.salary) return 1; // swap
    // salaries are the same, compare rank
    return e1.rank < e2.rank ? 1 : -1;
  }
});
const minHeap = new PriorityQueue({ compare: (x, y) => (x - y) });
const maxHeap = new PriorityQueue({ compare: (x, y) => (y - x) });

// empty queue, will provide priority in .enqueue
const patientsQueue = new MinPriorityQueue();

// empty queue with priority returned from a prop of the queued object
const biddersQueue = new MaxPriorityQueue({ priority: (bid) => bid.value });
```

# MinPriorityQueue/MaxPriorityQueue: numbersQueue.front().element
```javascript
// PriorityQueue
console.log(employeesQueue.dequeue()); // { name: 'employee 3', salary: 4000, rank: 4 }

// MinPriorityQueue/MaxPriorityQueue
// numbersQueue.front().element
console.log(numbersQueue.dequeue()); // { priority: -17, element: -17 }
console.log(numbersQueue.front()); // { priority: -7, element: -7 }

console.log(patientsQueue.dequeue()); // { priority: 1, element: 'patient y' }
console.log(patientsQueue.front()); // { priority: 2, element: 'patient x' }

console.log(biddersQueue.dequeue(), biddersQueue.dequeue().element); // { priority: 3500, element: { name: 'bidder z', value: 3500 } }
console.log(biddersQueue.front()); // { priority: 3000, element: { name: 'bidder x', value: 3000 } }
```



# Log: https://math.stackexchange.com/questions/3693149/isnt-square-root-a-bit-like-log
The number log7(23) answers the question 7^?=23

Some further points:

When we write log, this is short for log10
So the number log23 answers the question 10^?=23



Example:
```javascript
// https://leetcode.com/problems/constrained-subsequence-sum/
function constrainedSubsetSum(nums, k) {
    // O(n*logn)
    // maxHeap: [value, index]
    const maxHeap = new PriorityQueue({compare: (x1, x2) => x2[0] - x1[0]});
    let res = nums[0];
    for (let i = 0; i < nums.length; i++) {
        while (maxHeap.size() && i - maxHeap.front()[1] > k) maxHeap.dequeue();
        let currSum = nums[i];
        if (maxHeap.size() && maxHeap.front()[0] > 0) currSum += maxHeap.front()[0];
        res = Math.max(res, currSum);
        maxHeap.enqueue([currSum, i]);
    }
    return res;
}
```
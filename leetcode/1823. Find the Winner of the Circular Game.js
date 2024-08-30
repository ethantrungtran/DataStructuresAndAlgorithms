
function findTheWinner(n, k) {
    // Josephus Problem
    // O(n)
    // the formula: F(n) = (F(n-1) + k) % n
    // base case: F(1) = 0
    const helper = (n) => {
        if (n == 1) return 0;
        return (helper(n - 1) + k) % n;
    }
    return helper(n) + 1;
}

function findTheWinner2(n, k) {
    // O(n*k)
    const queue = Array(n).fill(0).map((_, i) => i);
    while (queue.length > 1) {
        for (let i = 1; i <= k-1; i++) queue.push(queue.shift());
        queue.shift();
    }
    return queue[0] + 1;
};
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function maxLevelSum(root) {
    if (root == null) return 0;
    const queue = [root];
    let level = 1;
    let smallestLevel = 1, maxSum = root.val;
    while (queue.length > 0) {
        const len = queue.length;
        let currSum = 0;
        for (let i = 0; i < len; i++) {
            const curr = queue.shift();
            currSum += curr.val;
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }
        if (maxSum < currSum) {
            maxSum = currSum;
            smallestLevel = level;
        }
        level++;
    }
    return smallestLevel;
};

maxLevelSum({
    val: 989,
    right: {
        val: 10250,
        left: {
            val: 98693
        },
        right: {
            val: -89388,
            right: {
                val: -3
            }
        }
    }
})
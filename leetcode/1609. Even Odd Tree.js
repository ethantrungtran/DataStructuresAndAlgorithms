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

function isEvenOddTree(root) {
    const queue = [root];
    let level = 0;
    while (queue.length > 0) {
        const len = queue.length;
        if (level % 2 == 0) {
            let prev = -Infinity;
            for (let i = 0; i < len; i++) {
                const curr = queue.shift();
                if (curr.val % 2 == 0 || prev >= curr.val) return false;
                prev = curr.val;
                if (curr.left) queue.push(curr.left);
                if (curr.right) queue.push(curr.right);
            }
        } else {
            let prev = Infinity;
            for (let i = 0; i < len; i++) {
                const curr = queue.shift();
                if (curr.val % 2 != 0 || prev <= curr.val) return false;
                prev = curr.val;
                if (curr.left) queue.push(curr.left);
                if (curr.right) queue.push(curr.right);
            }
        }
        level++;
    }
    return true;
};
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

function diameterOfBinaryTree(root) {
    if (root == null) return 0;
    let res = 0;
    const helper = (node) => {
        if (node == null) return -1;
        let maxLeft = 1 + helper(node.left);
        let maxRight = 1 + helper(node.right);
        res = Math.max(res, maxLeft + maxRight);
        return Math.max(maxLeft, maxRight);
    }
    const helper2 = (node) => {
        let maxLeft = 0;
        if (node.left) maxLeft = 1 + helper2(node.left);
        let maxRight = 0;
        if (node.right) maxRight = 1 + helper2(node.right);
        res = Math.max(res, maxLeft + maxRight);
        return Math.max(maxLeft, maxRight);
    }
    helper2(root);
    return res;
};
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

function lowestCommonAncestor(root, p, q) {
    const dfs = (node) => {
        if (node == null) return node;
        if (node.val == p.val || node.val == q.val) return node;
        const ancesterLeft = dfs(node.left);
        const ancesterRight = dfs(node.right);
        if (ancesterLeft == null) return ancesterRight;
        else if (ancesterRight == null) return ancesterLeft;
        return node;
    }
    return dfs(root);
};
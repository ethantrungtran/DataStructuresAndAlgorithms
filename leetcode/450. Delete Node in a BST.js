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

function deleteNode(root, key) {
    if (root == null) return null;
    if (key < root.val) {
        root.left = deleteNode(root.left, key);
    } else if (key > root.val) {
        root.right = deleteNode(root.right, key);
    } else {
        if (root.left == null) return root.right;
        if (root.right == null) return root.left;
        let curr = root.right;
        while (curr.left != null) curr = curr.left;
        root.val = curr.val;
        root.right = deleteNode(root.right, root.val);
    }
    return root;
}

function deleteNode2(root, key) {
    const dfs = (node) => {
        if (node == null) return null;
        if (node.val < key) {
            node.right = dfs(node.right);
        } else if (node.val > key) {
            node.left = dfs(node.left);
        } else {
            if (node.left == null) return node.right;
            if (node.right == null) return node.left;
            let curr = node.right;
            while (curr.left != null) curr = curr.left;
            curr.left = node.left;
            return node.right;
        }
        return node;
    }
    return dfs(root);
};
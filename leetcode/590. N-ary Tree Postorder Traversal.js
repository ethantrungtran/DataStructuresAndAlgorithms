/**
 * Definition for node.
 * class _Node {
 *     val: number
 *     children: _Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function postorder(root) {
    const postorder = [];
    const dfs = (node) => {
        if (!node) return;
        for (let child of node.children) {
            dfs(child);
        }
        postorder.push(node.val);
    }
    dfs(root);
    return postorder;
};
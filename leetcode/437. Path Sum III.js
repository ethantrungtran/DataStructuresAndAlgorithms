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

function pathSum2(root, targetSum) {
    let count = 0;
    const dfs = (node) => {
        if (node == null) return [];
        const resLeft = dfs(node.left);
        const resRight = dfs(node.right);

        let resNode = [node.val];
        if (node.val == targetSum) count++;
        for (let num of resLeft) {
            resNode.push(num + node.val);
            if (num + node.val == targetSum) count++;
        }
        for (let num of resRight) {
            resNode.push(num + node.val);
            if (num + node.val == targetSum) count++;
        }
        return resNode;
    }
    dfs(root);
    return count;
};

function pathSum(root, targetSum) {
    let count = 0;
    let paths = new Map(); // item format - {pathSum, count of occurences}

    function findPaths(node, currSum, targetSum) {
        if(node == null) return;

        let newSum = currSum + node.val;
        
        if (newSum == targetSum) count++;
        if (paths.has(newSum - targetSum)) {
            count += paths.get(newSum-targetSum);
        }

        if(paths.has(newSum)) {
            // console.log("putting "+newSum);
            paths.set(newSum, paths.get(newSum) + 1)
        } else {
            // console.log("putting x "+newSum)
            paths.set(newSum, 1);
        }

        // keep going left & right
        findPaths(node.left, currSum + node.val, targetSum)
        findPaths(node.right, currSum + node.val, targetSum)

        // remove newSum from map
        paths.set(newSum, paths.get(newSum)-1);
    }
    
    findPaths(root, 0, targetSum);
    return count;
};
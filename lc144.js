let ans = [];
function dfs(node) {
    ans.push(node.val);
    if(node.left != null){
        dfs(node.left);
    };
    if(node.right != null){
        dfs(node.right);
    };
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    ans = [];
    if(root == null){
        return ans;
    } else {
        dfs(root);
        return ans;
    };
};
let node2 = {
    left: undefined,
    right: undefined,
    val: 2,
};
let node3 = {
    left: undefined,
    right: undefined,
    val: 3,
};
let node1 = {
    left: node3,
    right: node2,
    val: 1,
};
console.log(preorderTraversal(node1));

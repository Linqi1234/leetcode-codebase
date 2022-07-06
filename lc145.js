let ans = [];
function dfs(node) {
    if(node.left != null){
        dfs(node.left);
    }
    if(node.right != null){
        dfs(node.right);
    }
    ans.push(node.val);
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
var postorderTraversal = function(root) {
    ans = [];
    if(root == null){
        return ans;
    } else {
        dfs(root);
        return ans;
    };
};

let node4 = {
    left: undefined,
    right: undefined,
    val: 4,
};
let node2 = {
    left: undefined,
    right: node4,
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
console.log(postorderTraversal(node1));

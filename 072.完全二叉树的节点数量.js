function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
    const getNodeCount = (cur) => {
        if (!cur) return 0;
        return 1 + getNodeCount(cur.left) + getNodeCount(cur.right)
    }
    return getNodeCount(root)
};
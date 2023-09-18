/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    const getHeight = (root) => {
        if (!root) return 0;
        let left = getHeight(root.left);

        if (left == -1) return -1
        let right = getHeight(root.right);
        if (right == -1) return -1
        return Math.abs(left - right) > 1 ? -1 : 1 + Math.max(left, right)
    }
    return getHeight(root) === -1 ? false : true
};
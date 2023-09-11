/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 递归解法
var isSymmetric = function (root) {
    if (!root) return true;
    const dfs = (left, right) => {
        if (!left && !right) return true
        if (!left || !right) return false
        if (left.val == right.val) return true
        return dfs(left.left, right.right) && dfs(left.right, right.left)
    }
    dfs(root.left, root.right)

};

var isSymmetric = function (root) {
    if (!root) return true;
    const stack = [root.left, root.right];
    while (stack.length) {
        let left = stack.pop()
        let right = stack.pop()
        if (!left && !right) {
            continue
        }
        if ((!left || !right) || (left.val !== right.val)) {
            return false
        }
        stack.push(right.right)
        stack.push(left.left)
        stack.push(right.left)
        stack.push(left.right)
    }
    return true
}
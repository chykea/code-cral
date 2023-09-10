/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return [];
    const res = []
    const stack = [root]
    while (stack.length) {
        let size = stack.length;
        let list = []
        while (size > 0) {
            let node = stack.shift()
            list.push(node.val)
            node.left && stack.push(node.left)
            node.right && stack.push(node.right)
            size--;
        }
        res.push(list)
        list = null
    }
    return res
};
var levelOrderBottom = function (root) {
    if (!root) return [];
    const res = []
    const stack = [root]
    while (stack.length) {
        let size = stack.length;
        let list = []
        while (size > 0) {
            let node = stack.shift()
            list.push(node.val)
            node.left && stack.push(node.left)
            node.right && stack.push(node.right)
            size--;
        }
        res.push(list)
        list = null
    }
    res.reverse()
    return res
};
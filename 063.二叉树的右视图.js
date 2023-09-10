
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
    if (!root) return [];
    const stack = [root]
    const res = [];
    while (stack.length) {
        let size = stack.length;
        for (let i = 0; i < size; i++) {
            let node = stack.shift();
            if (i == size - 1) {
                res.push(node.val)
            }
            node.left && stack.push(node.left)
            node.right && stack.push(node.right)
        }
    }
    return res
};
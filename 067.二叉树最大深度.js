

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (!root) return [];
    const stack = [root]
    let depth = 0;
    while (stack.length) {
        let size = stack.length;
        depth++;
        while (size > 0) {
            let node = stack.shift()
            node.left && stack.push(node.left)
            node.right && stack.push(node.right)
            size--;
        }
    }
    return depth
};
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
    if (!root) return 0;
    let depth = 0;
    const stack = [root];
    while (stack.length) {
        let size = stack.length;
        depth++;
        while (size > 0) {
            let node = stack.shift();
            node.left && stack.push(node.left)
            node.right && stack.push(node.right)
            if (!node.left && !node.right) {
                return depth;
            }
            size--;
        }

    }
    return depth
};
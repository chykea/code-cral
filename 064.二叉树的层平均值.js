/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
    if (!root) return [];
    const res = []
    const stack = [root]
    while (stack.length) {
        let size = stack.length, count = stack.length;
        let sum = 0;
        while (size > 0) {
            let node = stack.shift()
            sum += node.val
            node.left && stack.push(node.left)
            node.right && stack.push(node.right)
            size--;
        }

        res.push(sum / count)
    }
    return res
};
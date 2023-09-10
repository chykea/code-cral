/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (root) {
    if (!root) return [];
    const res = []
    const stack = [root]
    while (stack.length) {
        let size = stack.length;
        let list = []
        while (size > 0) {
            let node = stack.shift()
            list.push(node)
            node.left && stack.push(node.left)
            node.right && stack.push(node.right)
            size--;
        }

        for (let i = 0; i < list.length; i++) {
            if (i == list.length - 1) {
                list[i] = null
            }
            list[i].right = list[i + 1]
        }
        res.push(list)
        list = null
    }
    return res
};
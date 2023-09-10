/**
 * @param {Node|null} root
 * @return {number[][]}
 */

function Node(val, children) {
    this.val = val;
    this.children = children;
};
var levelOrder = function (root) {
    if (!root) return [];
    const res = [];
    const stack = [root];
    while (stack.length) {
        let size = stack.length;
        let list = [];
        while (size > 0) {
            let node = stack.shift();
            list.push(node.val);
            node.children && stack.push(...node.children)
            size--
        }
        res.push(list)
        list = null
    }
    return res
};
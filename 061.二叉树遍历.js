/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 前序遍历(递归)
var preorderTraversal = function (root) {
    const pre = [];
    const dfs = (node) => {
        if (node == null) return;
        pre.push(node.val);
        dfs(node.left)
        dfs(node.right)
    }
    dfs(root)
    return pre
};
// 前序遍历(迭代)
var preorderTraversal = function (root) {
    if (!root) return []
    const arr = [];
    const st = [root];
    while (st.length) {
        let node = st.pop();
        arr.push(node.val);
        node.left && st.push(node.left)
        node.right && st.push(node.right)
    }
    return arr
};
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 后序遍历(递归)
var postorderTraversal = function (root) {
    const post = [];
    const dfs = (node) => {
        if (node == null) return;
        dfs(node.left)
        dfs(node.right)
        post.push(node.val);
    }
    dfs(root)
    return post
};

// 后序遍历(递归)
var postorderTraversal = function (root) {
    const post = [];
    const stack = [root];
    while (stack.length) {
        let node = stack.pop();
        post.push(node.val);
        node.left && stack.push(node.left);
        node.right && stack.push(node.right);
    }

    post.reverse()
    return post
};

// 中序遍历(迭代)
var inorderTraversal = function (root) {
    if (root == null) return []
    const inorder = [];
    const stack = [];
    let cur = root
    while (cur != null || stack.length) {
        if (cur != null) {
            stack.push(cur)
            cur = cur.left
        }
        else {
            cur = stack.pop();
            inorder.push(cur.val);
            cur = cur.right
        }
    }
    return inorder
};


/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 中序遍历(递归)
var inorderTraversal = function (root) {
    const inorder = [];
    const dfs = (node) => {
        if (node == null) return;
        dfs(node.left)
        inorder.push(node.val);
        dfs(node.right)

    }
    dfs(root)
    return inorder
};


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

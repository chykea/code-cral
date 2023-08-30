/*
 * @Author: chykea
 * @Date: 2023-08-24 09:46:51
 * @LastEditors: chykea
 * @LastEditTime: 2023-08-24 18:06:08
 * @Description: 请填写简介
 */
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    if (s.length === 0) return []
    const res = [];
    const path = [];
    const dfs = (n) => {
        if (n === s.length) {
            res.push([...path]);
            return
        }
        for (let i = n; i < s.length; i++) {
            if (!judge(n, i)) {
                continue
            }
            path.push(s.slice(n, i + 1));
            dfs(i + 1)
            path.pop();
        }
    }
    const judge = (start, end) => {
        for (let i = start, j = end; i < j; i++, j--) {
            if (s[i] !== s[j]) return false;
        }
        return true;
    }
    dfs(0);
    return res;
};
partition('')

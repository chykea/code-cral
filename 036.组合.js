/*
 * @Author: chykea
 * @Date: 2023-08-23 15:47:38
 * @LastEditors: chykea
 * @LastEditTime: 2023-08-30 15:39:53
 * @Description: 请填写简介
 */
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    const res = [];
    const path = [];
    const dfs = (c) => {
        if (path.length === k) {
            res.push([...path])
            return;
        }
        for (let i = c; i <= n; i++) {
            path.push(i)
            dfs(i + 1)
            path.pop()
        }
    }
    dfs(1)
    return res
};

combine(4, 2)
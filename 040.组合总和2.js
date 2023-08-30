/*
 * @Author: chykea
 * @Date: 2023-08-23 17:23:58
 * @LastEditors: chykea
 * @LastEditTime: 2023-08-23 17:33:22
 * @Description: 请填写简介
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    if (candidates.length === 0) return [];
    const res = [];
    const path = [];
    candidates.sort((a, b) => a - b);
    const dfs = (sum, i) => {
        if (sum > target) return
        if (sum === target) {
            res.push([...path]);
            return
        }
        for (let j = i; j < candidates.length; j++) {
            if (j > i && candidates[j] === candidates[j - 1]) continue;
            path.push(candidates[j]);
            sum += candidates[j];
            dfs(sum, j + 1);
            sum -= candidates[j];
            path.pop();
        }
    }
    dfs(0, 0);
    return res
};
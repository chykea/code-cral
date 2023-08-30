/*
 * @Author: chykea
 * @Date: 2023-08-23 16:56:13
 * @LastEditors: chykea
 * @LastEditTime: 2023-08-23 17:44:06
 * @Description: 请填写简介
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// 需要对二维数组去重
var combinationSum = function (candidates, target) {
    if (candidates.length == 1 && (candidates[0] > target || candidates[0] < target)) return [];
    const res = []
    const path = []
    let sum = 0;
    candidates.sort((a, b) => a - b)
    const dfs = (sum) => {
        if (sum > target) return;
        if (sum == target) {
            res.push([...path])
            return
        }
        for (let i = 0; i < candidates.length; i++) {
            path.push(candidates[i])
            sum += candidates[i];
            dfs(sum);
            sum -= candidates[i];
            path.pop();
        }
    }
    dfs(sum);
    // return res
    return duplicate(res)
};

var duplicate = function (arr) {
    let res = {}
    arr.forEach(item => {
        item.sort((a, b) => a - b);
        res[item] = item;
    });
    return Object.values(res)
}

var combinationSum = function (candidates, target) {
    if (candidates.length == 1 && (candidates[0] > target || candidates[0] < target)) return [];
    const res = []
    const path = []
    let sum = 0;
    candidates.sort((a, b) => a - b)
    const dfs = (sum, j) => {
        if (sum > target) return;
        if (sum == target) {
            res.push([...path])
            return
        }
        for (let i = j; i < candidates.length; i++) {
            path.push(candidates[i])
            sum += candidates[i];
            dfs(sum, i);
            sum -= candidates[i];
            path.pop();
        }
    }
    dfs(sum, 0)
    return res
}

console.log(combinationSum([2, 3, 6, 7], 7));
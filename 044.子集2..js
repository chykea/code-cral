/*
 * @Author: chykea
 * @Date: 2023-08-28 10:37:51
 * @LastEditors: chykea
 * @LastEditTime: 2023-08-28 11:27:19
 * @Description: 请填写简介
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    const res = [];
    const path = [];
    nums.sort((a, b) => a - b)
    const dfs = (n) => {
        res.push([...path]);
        for (let i = n; i < nums.length; i++) {
            if (i > n && nums[i] == nums[i - 1]) continue // 同一层,前后如果相同,就减去(剪枝去重)
            path.push(nums[i])
            dfs(i + 1);
            path.pop()
        }
    }
    dfs(0)
    console.log(res);
    return res
};

var subsetsWithDup = function (nums) {
    const res = [];
    const path = [];
    nums.sort((a, b) => a - b)
    const dfs = (n) => {
        res.push([...path]);
        const used = []
        for (let i = n; i < nums.length; i++) {
            if (used[nums[i] + 100]) continue
            used[nums[i] + 100] = true
            path.push(nums[i])
            dfs(i + 1);
            path.pop()
        }
    }
    dfs(0)
    return res
};

subsetsWithDup([4, 4, 4, 1, 4])
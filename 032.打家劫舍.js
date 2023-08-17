/*
 * @Author: chykea
 * @Date: 2023-08-17 16:06:27
 * @LastEditors: chykea
 * @LastEditTime: 2023-08-17 16:26:13
 * @Description: 请填写简介
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length <= 1) return nums[0]
    const dp = [];

    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]); // 如果只有两家，偷到的最大金额肯定是钱最多的那一家
    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
    }
    return dp[nums.length - 1]
};

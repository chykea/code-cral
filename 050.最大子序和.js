/**
 * @param {number[]} nums
 * @return {number}
 */
// 贪心算法解法
var maxSubArray = function (nums) {
    let sum = Number.MIN_SAFE_INTEGER;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        count += nums[i]
        if (count > sum) {
            sum = count;
        } if (count <= 0) {
            count = 0;
        }
    }
    return sum
};
// 动态规划解法
var maxSubArray = (nums) => {
    const dp = [nums[0]];
    let sum = dp[0];
    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
        if (dp[i] > sum) sum = dp[i];
    }
    return sum
}
maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])
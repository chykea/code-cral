/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    const dp = Array(nums.length).fill(1);
    let res = 1
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
        res = Math.max(res, dp[i]);
    }
    return res
};
lengthOfLIS([0, 1, 0, 3, 2, 3])
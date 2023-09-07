/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
    const dp = Array(nums.length).fill(1)
    let res = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            dp[i] = dp[i - 1] + 1
        }
        res = Math.max(res, dp[i])
    }
    return res
};
findLengthOfLCIS([1, 3, 5, 4, 7])
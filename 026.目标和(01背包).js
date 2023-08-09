/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
    const dp = Array(10001).fill(0)
    let sum = 0;
    nums.forEach(i => sum += i)

    const left = (sum + target) / 2

    if ((target + sum) % 2 !== 0 || Math.abs(target) > sum) return 0
    dp[0] = 1;
    for (let i = 0; i < nums.length; i++) {
        for (let j = left; j >= nums[i]; j--) {
            dp[j] += dp[j - nums[i]]
        }
    }
    return dp[left]
};
findTargetSumWays([1, 1, 1, 1, 1], 3)
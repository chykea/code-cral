/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];


    function helper(start, end, nums) {
        if (start == end) return nums[start];
        const dp = [];
        dp[start] = nums[start];
        dp[start + 1] = Math.max(dp[start], nums[start + 1]);
        for (let i = start + 2; i < end; i++) {
            dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
        }
        return dp[end];
    }
    return Math.max(helper(0, nums.length - 2, nums), helper(1, nums.length - 1, nums))
};
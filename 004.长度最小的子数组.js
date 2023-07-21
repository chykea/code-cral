/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let start = 0;
    let sum = 0;
    let res = Infinity;
    for (let end = 0; end < nums.length; end++) {
        sum += nums[end]
        while (sum >= target) {
            res = Math.min(res, end - start + 1);
            sum -= nums[start++]
        }
    }
    return res == Infinity ? 0 : res
};
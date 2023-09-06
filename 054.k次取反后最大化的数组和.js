/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
    nums.sort((a, b) => Math.abs(b) - Math.abs(a))
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= 0 && k > 0) {
            nums[i] *= -1;
            k--;
        }
        if (k <= 0) break;
    }
    if (k > 0) {
        while (k > 0) {
            nums[nums.length - 1] *= -1
            k--
        }

    }
    return sum(nums)

};
function sum(arr) {
    var s = 0;
    arr.forEach(function (val, idx, arr) {
        s += val;
    }, 0);

    return s;
};
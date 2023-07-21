/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let left = 0, right = cur = nums.length - 1;
    let res = []

    while (left < right) {
        if (Math.pow(nums[left], 2) > Math.pow(nums[right], 2)) {
            res[cur--] = Math.pow(nums[left++], 2)
        } else {
            res[cur--] = Math.pow(nums[right--], 2)
        }
    }
    return res

};
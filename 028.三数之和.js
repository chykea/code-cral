/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b)
    if (nums[0] > 0) return []
    const res = [];
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] + nums[i + 1] + nums[i + 2] > 0) break;
        if (i != 0 && nums[i] == nums[i - 1]) continue
        let target = 0 - nums[i];
        let j = i + 1, k = nums.length - 1;
        while (j < k) {
            let sum = nums[j] + nums[k];
            if (sum === target) {
                res.push([nums[i], nums[j], nums[k]]);
                k--;
                while (j < k && nums[k] == nums[k + 1])
                    k--;

                j++;
                while (j < k && nums[j] == nums[j - 1])
                    j++;
            } else if (sum > target) {
                k--
            } else {
                j++
            }
        }
    }
    return res
};
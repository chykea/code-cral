/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
    const map = new Map();
    let len = nums1.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            let sum = nums1[i] + nums2[j]
            map.set(sum, (map.get(nums1[i] + nums2[j]) || 0) + 1)
        }
    }
    let count = 0;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            let sum = nums3[i] + nums4[j]
            count += (map.get(0 - sum) || 0)
        }
    }
    return count
};
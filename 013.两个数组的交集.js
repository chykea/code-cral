/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let set1 = new Set(nums1)
    let set2 = new Set(nums2)
    let res = new Set();
    for (let i = 0; i < nums1.length; i++) {
        if (set1.has(nums1[i]) && set2.has(nums1[i])) {
            res.add((nums1[i]))
        }
    }
    return Array.from(res);
};
intersection([1, 2, 2, 1], [2, 1])
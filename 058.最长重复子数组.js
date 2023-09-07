/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {

    const len1 = nums1.length, len2 = nums2.length;
    const dp = Array(len1).fill().map(() => Array(len2).fill(0));
    for (let i = 0; i < len1; i++) {
        if (nums1[i] == nums2[0]) dp[i][0] = 1;
    }
    for (let j = 0; j < len2; j++) {
        if (nums2[j] == nums1[0]) dp[0][j] = 1;
    }
    let res = 0

    for (let i = 0; i < len1; i++) {
        for (let j = 0; j < len2; j++) {
            if (nums1[i] == nums2[j] && i > 0 && j > 0) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            }
            if (res < dp[i][j]) res = dp[i][j];
        }
    }
    return res
};

findLength([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])
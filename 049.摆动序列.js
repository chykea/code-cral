/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
    let count = 1;
    let preDiff = 0;
    let curDiff = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        curDiff = nums[i + 1] - nums[i];
        if ((preDiff >= 0 && curDiff < 0) || (preDiff <= 0 & curDiff > 0)) {
            count++;
            preDiff = curDiff;

        }
    }
    return count;
};

wiggleMaxLength([1, 17, 5, 10, 13, 15, 10, 5, 16, 8])
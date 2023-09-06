/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    if (nums.length <= 1) return 0;
    let res = 0;
    let cover = 0;
    let next = 0;
    for (let i = 0; i <= cover; i++) {
        next = Math.max(i + nums[i], next)
        if (i == cover) {
            if (cover <= nums.length - 1) {
                res++;
                cover = next;
                if (cover >= nums.size() - 1) break;  //到达终点结束
            }
            else break;

        }

    }
    return res;
};

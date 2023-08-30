/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    nums.sort((a, b) => a - b)
    const res = [];
    const path = [];
    const used = Array(nums.length).fill(false)
    const dfs = (n) => {
        if (path.length == nums.length) {
            res.push([...path])
            return
        }
        for (let i = 0; i < nums.length; i++) {
            // 去重
            if (i != 0 && nums[i] == nums[i - 1] && !used[i - 1]) continue
            if (!used[i]) {
                used[i] = true;
                path.push(nums[i]);
                dfs(n + 1);
                path.pop()
                used[i] = false
            }
        }
    }
    dfs(0)
    // console.log(res);
    return res
};
permuteUnique([1, 1, 2])
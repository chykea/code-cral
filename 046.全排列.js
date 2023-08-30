/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const res = [];
    const path = [];
    const used = Array(nums.length).fill(false)
    const dfs = (n) => {
        if (n === nums.length) {
            res.push([...path]);
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if (!used[i]) {
                used[i] = true
                path.push(nums[i])
                dfs(n + 1);
                path.pop()
                used[i] = false
            }
        }
    }
    dfs(0)
    // console.log(res);
    return res;
};
permute([1, 2, 3])
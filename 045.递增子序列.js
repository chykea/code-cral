/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
    const res = [];
    const path = [];
    const dfs = (n) => {
        if (path.length >= 2) {
            res.push([...path])
        }
        if (n > nums.length) return
        const used = []; // 同一层中,记录哪些元素已被使用
        for (let i = n; i < nums.length; i++) {
            if (path.length > 0 && path[path.length - 1] > nums[i] || used[nums[i] + 100])
                continue;
            used[nums[i] + 100] = true // 只需要记录是否被使用,不用再变回false
            path.push(nums[i]);
            dfs(i + 1);
            path.pop()
        }
    }
    dfs(0);
    // console.log(res);
    return res

};
findSubsequences([4, 6, 7, 7])
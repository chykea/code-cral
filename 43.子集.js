/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/* var subsets = function (nums) {
    const res = [[]];
    const path = [];
    const dfs = (n) => {
        res.push([...path])
        for (let i = n; i < nums.length; i++) {
            path.push(nums[i])
            dfs(i + 1);
            path.pop()
        }
    }
    dfs(0)
    return res
}; */

var subsets = function (nums) {
    const res = [];
    const path = [];
    const dfs = (n) => {
        res.push([...path])
        for (let i = n; i < nums.length; i++) {
            path.push(nums[i]);
            dfs(i + 1);
            path.pop()
        }
    }
    dfs(0)
    // console.log(res);
    return res
}
console.log(subsets([1, 2, 3]));
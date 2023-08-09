/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 回溯(超时)
var canPartition = function (nums) {
    let sum = 0;
    nums.forEach(item => sum += item)
    if (sum % 2 !== 0) return false
    const target = ~~(sum / 2);

    function dfs(curSum, i) {
        if (i === nums.length || curSum > target) {
            return false
        }
        if (curSum === target) return true
        return dfs(curSum + nums[i], i + 1) || dfs(curSum, i + 1);
    }
    return dfs(0, 0)
};
// 回溯记忆化
var canPartition = (nums) => {
    let sum = 0;
    nums.forEach(item => sum += item)
    if (sum % 2 !== 0) return false
    const target = ~~(sum / 2);
    const map = new Map()
    function dfs(curSum, n) {
        if (curSum > target || n > nums.length) return false
        if (curSum == target) return true
        const key = curSum + '&' + n;
        if (map.has(key)) {
            return map.get(key)
        }
        const res = dfs(curSum + nums[n], n + 1) || dfs(curSum, n + 1)
        map.set(key, res)
        return res
    }
    return dfs(0, 0)
}


var canPartition = (nums) => {
    const dp = Array(10001).fill(0);
    let sum = 0;
    nums.forEach(item => sum += item)
    if (sum % 2 !== 0) return false
    // 取一半，只要数组中能够得到目标值，另一半一定也是目标值
    // 所以只要计算数组中是否能够计算出目标值
    const target = ~~(sum / 2);
    for (let i = 1; i <= nums.length; i++) {
        for (let j = target; j >= nums[i - 1]; j--) {
            dp[j] = Math.max(dp[j], dp[j - nums[i - 1]] + nums[i - 1])
        }
    }
    return dp[target] === target

}
console.log(canPartition([1, 5, 11, 5]));
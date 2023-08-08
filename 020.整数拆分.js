/**
 * @param {number} n
 * @return {number}
 */
// 递归解法
// var integerBreak = function (n) {
//     if (n == 2) return 1
//     let res = 0;
//     for (let i = 1; i <= n; i++) {
//         res = Math.max(res, Math.max(i * (n - i), i * integerBreak(n - i)))
//     }
//     return res
// };

// 动态规划解法
var integerBreak = function (n) {
    const dp = Array(n + 1).fill(0);
    dp[2] = 1;
    for (let i = 3; i <= n; i++) {
        for (let j = 1; j <= ~~(i / 2); j++) {
            dp[i] = Math.max(Math.max(j * (i - j), j * dp[i - j]), dp[i])
        }
    }
    return dp[n]
}
console.log(integerBreak(10));

// console.log(~~(5 / 2));
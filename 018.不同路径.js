/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// 回溯解法(超时)
// var uniquePaths = function (m, n) {
//     let count = 0;
//     function dfs(r, c) {
//         if (r == m - 1 && c == n - 1) {
//             count++;
//             return
//         }
//         dfs(r + 1, c)
//         dfs(r, c + 1)
//     }
//     dfs(0, 0)
//     console.log(count);
//     return count
// };

var uniquePaths = function (m, n) {
    const dp = new Array(m).fill(0).map(v => new Array(n).fill(0));
    for (let i = 0; i < m; i++) {
        dp[i][0] = 1
    }
    for (let i = 0; i < n; i++) {
        dp[0][i] = 1
    }
    for (let i = 1; i < dp.length; i++) {
        for (let j = 1; j < dp[0].length; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }
    console.log(dp);
    return dp[m - 1][n - 1]
}
console.log(uniquePaths(23, 12));

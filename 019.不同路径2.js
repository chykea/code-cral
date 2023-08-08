/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    let m = obstacleGrid.length, n = obstacleGrid[0].length;
    const dp = new Array(m).fill(0).map(v => new Array(n).fill(0));
    for (let i = 0; i < m; i++) {
        if (obstacleGrid[i][0] === 1) {
            for (let j = i; j < m; j++) dp[j][0] = 0;
            break;
        }
        dp[i][0] = 1
    }

    for (let i = 0; i < n; i++) {
        if (obstacleGrid[0][i] === 1) {
            for (let j = i; j < n; j++) dp[0][j] = 0;
            break;
        }
        dp[0][i] = 1
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = obstacleGrid[i][j] === 1 ? 0 : dp[i - 1][j] + dp[i][j - 1]
        }
    }
    return dp[m - 1][n - 1]

};
const r = [[1, 0]]
uniquePathsWithObstacles(r)
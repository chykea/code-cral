/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
    const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
    for (let s in strs) {
        let zeroNum = 0;
        let oneNum = 0;
        for (let i = 0; i < strs[s].length; i++) {
            if (strs[s][i] === "0") {
                zeroNum++;
            } else {
                oneNum++;
            }
        }

        for (let i = m; i >= zeroNum; i--) {
            for (let j = n; j >= oneNum; j--) {
                dp[i][j] = Math.max(dp[i][j], dp[i - zeroNum][j - oneNum] + 1);
            }
        }

    }
    return dp[m][n];
};
findMaxForm(["10", "0001", "111001", "1", "0"], m = 5, n = 3)
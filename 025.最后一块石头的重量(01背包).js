/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function (stones) {
    const dp = Array(1501).fill(0);
    let sum = 0;
    stones.forEach(i => sum += i)
    const target = ~~(sum / 2)
    for (let i = 1; i <= stones.length; i++) {
        for (let j = target; j >= stones[i - 1]; j--) {
            dp[j] = Math.max(dp[j], dp[j - stones[i - 1]] + stones[i - 1])
        }
    }
    console.log(sum - dp[target] - dp[target]);
    return sum - dp[target] - dp[target]
};
lastStoneWeightII([2, 7, 4, 1, 8, 1])
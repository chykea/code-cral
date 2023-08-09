/**
 * 
 * @param {Array} weight 所有物品各自的重量 
 * @param {Array} value  所有物品所对应的价值 
 * @param {Number} size  背包的最大容量
 * @returns {Number} 背包的最大价值
 */
function testWeightBagProblem(weight, value, size) {
    // 定义 dp 数组
    const len = weight.length,
        dp = Array(len).fill().map(() => Array(size + 1).fill(0));

    // 初始化
    for (let j = weight[0]; j <= size; j++) {
        dp[0][j] = value[0];
    }

    // weight 数组的长度len 就是物品个数
    for (let i = 1; i < len; i++) { // 遍历物品
        for (let j = 0; j <= size; j++) { // 遍历背包容量
            if (j < weight[i]) {
                // 表示当前背包的最大容量放不下当前物品，所以当前背包的最大价值是之前物品的最大价值
                dp[i][j] = dp[i - 1][j];
            }
            else {
                // 当前背包的最大容量能容纳当前物品，此时需要比较
                // j - weight[i] 表示当前背包的容量 减去 当前物品的重量后，背包剩余的容量
                // dp[i-1][j-weight[i]] 表示当前背包剩余容量的最大价值，再加上当前物品的价值，就是此时背包容量容纳的最大价值
                // 与而这里的dp[i-1][j]就是不放入当前物品的背包最大价值
                dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i]);
            }
        }
    }

    console.table(dp)

    return dp[len - 1][size];
}

function test() {
    console.log(testWeightBagProblem([1, 3, 4], [15, 20, 30], 4));
}

test();

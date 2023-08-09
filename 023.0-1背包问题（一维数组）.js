function testWeightBagProblem(weight, value, size) {
    // 定义 dp 数组
    const len = weight.length;

    const dp = Array(size + 1).fill(0)

    // weight 数组的长度len 就是物品个数
    for (let i = 1; i <= len; i++) { // 遍历物品
        for (let j = size; j >= weight[i - 1]; j--) { // 遍历背包容量
            dp[j] = Math.max(dp[j], dp[j - weight[i - 1]] + value[i - 1])
        }
    }

    console.table(dp)

    return dp[size];
}

function test() {
    console.log(testWeightBagProblem([1, 3, 4], [15, 20, 30], 4));
}

test();

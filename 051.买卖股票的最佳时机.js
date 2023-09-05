/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let sum = 0;
    for (let i = 1; i < prices.length; i++) {
        let day = prices[i] - prices[i - 1]
        if (day > 0) {
            sum += day
        }
    }
    return sum
};
maxProfit([7, 6, 4, 3, 1])
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
// 找出k个数,他们的和为n
// 条件1 只能使用1到9
// 条件2 每个数字只能使用一次
var combinationSum3 = function (k, n) {
    if (k >= n) return []
    const res = [];
    const path = [];
    const dfs = (target) => {
        if (path.length === k) {
            if (target === 0) {
                res.push([...path])
            }
            return
        }
        for (let i = 1; i <= 9; i++) {
            if (!path.includes(i)) {
                path.push(i);
                dfs(target - i);
                path.pop();
            }
        }
    }
    dfs(n)
    return duplicate(res);
}


var duplicate = function (arr) {
    let res = {}
    arr.forEach(item => {
        item.sort((a, b) => a - b);
        res[item] = item;
    });
    return Object.values(res)
}

console.log(combinationSum3(3, 9));
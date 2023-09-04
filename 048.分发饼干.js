/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    if (s.length === 0 || g.length === 0) return 0
    g.sort((a, b) => a - b)
    s.sort((a, b) => a - b)
    let sum = 0
    let index = s.length - 1;
    for (let i = g.length - 1; i >= 0; i--) {
        if (index >= 0 && g[i] <= s[index]) {
            sum++;
            index--;
        }
    }
    return sum
};
findContentChildren(g = [1, 2, 3], s = [1, 1])
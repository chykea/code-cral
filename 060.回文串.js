/**
 * @param {string} s
 * @return {number}
 */
// 暴力解法
var countSubstrings = function (s) {
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            if (helper(i, j)) {
                res++;
            }
        }
    }
    function helper(left, right) {
        let i = left, j = right;
        while (i <= j) {
            if (s[i] !== s[j]) {
                return false
            }
            i++, j--;
        }
        return true
    }
    return res
};

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (digits.length <= 0) return [];
    const map = [
        '',
        '',
        'abc',
        'def',
        'ghi',
        'jkl',
        'mno',
        'pqrs',
        'tuv',
        'wxyz'
    ];
    const res = [];
    const path = [''];
    const dfs = (n) => {
        if (n === digits.length) {
            res.push(...path)
            return
        };
        const str = map[digits[n]];
        let size = path.length;
        while (size > 0) {
            let s = path.shift()
            for (let i = 0; i < str.length; i++) {
                const c = str[i]
                path.push(s + c)
            }
            size--;
        }
        dfs(n + 1)
    }
    dfs(0)
    return res
};
letterCombinations('23')
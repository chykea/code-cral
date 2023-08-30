/**
 * @param {string} s
 * @return {string[]}
 */
/* var restoreIpAddresses = function (s) {
    if (s.length < 4 || s.length > 12) return [];
    const res = [];
    const path = [];
    const dfs = (n) => {
        if (n === s.length && path.length === 4) {
            res.push(path.join('.'));
            return;
        }
        if (path.length === 4) return;
        for (let i = 1; i <= 3; i++) {
            if (n + i > s.length) return;
            const num = s.substring(n, n + i);
            if (i !== 1 && num[0] === '0') return;
            if (parseInt(num) > 255) return;
            path.push(num);
            dfs(n + i);
            path.pop();
        }
    }

    dfs(0)
    return res
}; */

var restoreIpAddresses = function (s) {
    if (s.length < 4 || s.length > 12) return [];
    const res = [];
    const path = [];
    const dfs = (i) => {
        if (i == s.length && path.length == 4) {
            res.push(path.join('.'))
            return
        }
        if (path.length == 4) {
            return
        }
        for (let j = 1; j <= 3; j++) {
            const num = s.substring(i, i + j);
            if (j != 1 && num[0] == '0') {
                continue;
            }
            if (parseInt(num) > 255) {
                break;
            }
            path.push(num);
            dfs(i + j);
            path.pop();
        }
    }
    dfs(0)
    // console.log(res);
    return res
}

restoreIpAddresses("101023")

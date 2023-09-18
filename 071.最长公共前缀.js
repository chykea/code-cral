/**
 * @param {string[]} strs
 * @return {string}
 */
// 横向搜索
var longestCommonPrefix = function (strs) {
    strs.sort((a, b) => a.length - b.length)
    let common = strs[0];
    for (let i = 1; i < strs.length; i++) {
        let s = strs[i];
        for (let j = 0; j < s.length; j++) {
            if (s.charAt(j) !== common.charAt(j)) {
                common = common.substring(0, k)
                break
            }
        }
    }
    return common
};
// 二分法
var longestCommonPrefix = function (strs) {
    if (!strs.length) return '';
    let minLength = Number.MAX_SAFE_INTEGER
    const helper = (strs, length) => {
        let str0 = strs[0].substring(0, length);
        let count = strs.length;
        for (let i = 1; i < count; i++) {
            let str = strs[i];
            for (let j = 0; j < length; j++) {
                if (str0.charAt(j) != str.charAt(j)) {
                    return false;
                }
            }
        }
        return true;
    }
    for (let i = 0; i < strs.length; i++) {
        if (strs[i].length < minLength) {
            minLength = strs[i].length
        }
    }
    let low = 0, high = minLength;
    while (low < high) {
        let mid = ~~((high - low + 1) / 2) + low;
        if (helper(strs, mid)) {
            low = mid
        } else {
            high = mid - 1;
        }
    }
    return strs[0].substring(0, low)
}
longestCommonPrefix(["flower", "flow", "flight"])
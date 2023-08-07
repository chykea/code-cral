/**
 * @param {number} n
 * @return {boolean}
 */
let set = [4, 16, 37, 58, 89, 145, 42, 20];
var isHappy = function (n) {

    if (n !== 1 && set.indexOf(n) !== -1) return false
    if (n == 1) return true
    let str = n + "";
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        let num = parseInt(str.charAt(i));

        sum = sum + Math.pow(num, 2)

    }
    // console.log(sum);
    return isHappy(sum)
};
isHappy(3)
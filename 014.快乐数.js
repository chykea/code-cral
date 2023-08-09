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

var isHappy = (n) => {
    if (n == 1) return true
    const map = new Map();
    const getSum = (n) => {
        let sum = 0;
        while (n) {
            sum += (n % 10) ** 2;
            n = ~~(n / 10);
        }
        return sum
    }
    while (true) {
        if (map.has(n)) return false
        if (n === 1) return true
        map.set(n, 1)
        n = getSum(n)
    }

}
console.log(isHappy(19));
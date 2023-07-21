/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    let matrix = new Array(n).fill(0).map(() => new Array(n).fill(0))
    let top = 0, bottom = n - 1, left = 0, right = n - 1
    let loop = ~~(n / 2)
    let count = 1
    while (loop--) {
        for (let i = left; i < right; i++) {
            matrix[top][i] = count++
        }
        for (let i = top; i < bottom; i++) {
            matrix[i][right] = count++
        }
        for (let i = right; i > left; i--) {
            matrix[bottom][i] = count++
        }
        for (let i = bottom; i > top; i--) {
            matrix[i][left] = count++;
        }
        top++;
        left++;
        right--;
        bottom--;
    }

    if (n % 2 == 1) matrix[~~(n / 2)][~~(n / 2)] = count
    console.log(matrix);
    return matrix
};
generateMatrix(3)
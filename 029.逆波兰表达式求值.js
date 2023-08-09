/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let operation = ['+', '-', '*', '/'];
    let stack = [];

    for (let i = 0; i < tokens.length; i++) {
        if (operation.includes(tokens[i])) {
            let num1 = stack.pop()
            let num2 = stack.pop()
            let sum = 0;
            if (tokens[i] == '+') {
                sum = num2 + num1;
            }
            else if (tokens[i] == '-') {
                sum = num2 - num1;
            }
            else if (tokens[i] == '*') {
                sum = num2 * num1;
            }
            else {
                sum = ~~(num2 / num1);
            }
            stack.push(sum)
        } else
            stack.push(parseInt(tokens[i]))
    }
    return stack.pop()
};
evalRPN(["2", "1", "+", "3", "*"])
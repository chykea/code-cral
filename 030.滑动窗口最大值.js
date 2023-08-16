/*
 * @Author: chykea
 * @Date: 2023-08-11 15:01:47
 * @LastEditors: chykea
 * @LastEditTime: 2023-08-11 15:37:15
 * @Description: 滑动窗口最大值
 */


var maxSlidingWindow = function (nums, k) {
    class Queue {
        constructor() {
            this.queue = [];
        }
        enqueue(value) {
            let back = this.queue[this.queue.length - 1]
            while (back && back < value) {
                this.queue.pop();
                back = this.queue[this.queue.length - 1]
            }
            this.queue.push(value)
        }
        dequeue(value) {
            let front = this.front();
            if (front === value) {
                this.queue.shift();
            }
        }
        front() {
            return this.queue[0]
        }
    }
    let q = new Queue();
    let i = j = 0;
    let res = []
    while (j < k) {
        q.enqueue(nums[j++])
    }
    res.push(q.front())
    while (j < nums.length) {
        q.enqueue(nums[j])
        q.dequeue(nums[i])
        res.push(q.front())
        j++, i++
    }
    return res

};
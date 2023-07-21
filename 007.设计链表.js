class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

var MyLinkedList = function () {
    this.head = null;
    this.last = null;
    this.size = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (index < 0 || index >= this.size) return -1;
    let cur = this.head;
    console.log(index);
    for (let i = 0; i < index; i++) {
        cur = cur.next
    }
    console.log(cur);
    return cur.val
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    const node = new ListNode(val)
    node.next = this.head;
    this.head = node;
    this.size++;
    if (!this.last) {
        this.last = node
    }
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    const node = new ListNode(val);
    this.size++;
    if (this.last) {
        this.last.next = node
        this.last = node;
        return
    }
    this.last = node;
    this.head = node;

};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index > this.size) return;
    if (index <= 0) {
        this.addAtHead(val)
        return
    }
    if (index == this.size) {
        this.addAtTail(val)
        return
    }
    const node = new ListNode(val)
    let cur = this.head;
    for (let i = 0; i < index - 1; i++) {
        cur = cur.next
    }
    node.next = cur.next;
    cur.next = node;
    this.size++;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index >= this.size) return
    if (index == 0) {
        this.head = this.head.next;
        if (index == this.size - 1) {
            this.last = this.head;
        }
        this.size--;
        return
    }
    let cur = this.head;
    for (let i = 0; i < index - 1; i++) {
        cur = cur.next;
    }
    cur.next = cur.next.next;
    if (index == this.size - 1) this.last = cur
    this.size--
};

let linklisted = new MyLinkedList()
linklisted.addAtTail(1)
console.log(linklisted.get(0));
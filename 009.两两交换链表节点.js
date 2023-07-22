/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    if (!head) return null
    let dummy = new ListNode(0, head)
    let cur = dummy, next = null, nnnext = null;
    while (cur.next != null && cur.next.next != null) {
        next = cur.next;
        nnnext = cur.next.next.next;

        cur.next = cur.next.next;
        cur.next.next = next;
        cur.next.next.next = nnnext;

        cur = cur.next.next;
    }
    return dummy.next
};


function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
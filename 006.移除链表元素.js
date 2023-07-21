/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    if (!head) return null
    let cur = head;
    while (cur != null && cur.next != null) {
        if (cur.next.val == val) {
            cur.next = cur.next.next;
            continue
        }
        cur = cur.next
    }
    return head.val == val ? head.next : head

};


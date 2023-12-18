/**
 * 删除链表的倒数第N个节点
 */

import { ListNode, createLink } from "./types";

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    // 首先判断当前链表有多少节点
    let len = 0
    const dummyNode = new ListNode(-1, head)
    let cur = dummyNode
    while (cur.next !== null && cur) {
        cur = cur.next
        len++
    }
    len = len - n
    cur = dummyNode
    while (len > 0) {
        len--
        cur = cur.next
    }
    cur.next = cur.next.next
    return dummyNode.next
};

const head = createLink([1])
removeNthFromEnd(head, 1)
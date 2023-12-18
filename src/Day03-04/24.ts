/**
 * 两两交换链表中的节点
 */

import { ListNode } from "./types";

function swapPairs(head: ListNode | null): ListNode | null {
    const dummyNode = new ListNode(-1,head)
    let cur = dummyNode
    while(cur.next !== null && cur.next.next !== null){
        let temp1 = cur.next
        let temp2 = cur.next.next.next
        // 开始交换
        cur.next = cur.next.next
        cur.next.next = temp1
        temp1.next = temp2
        cur = cur.next.next
    }
    return dummyNode.next
};


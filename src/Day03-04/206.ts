/**
 * 206 反转链表
 */

import { ListNode, createLink, printLink } from "./types"

function reverseList(head: ListNode | null): ListNode | null {
    // 设置三个指针
    let cur = head
    let pre = null
    if(cur === null){
        return null
    }
    while(cur){
        let next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    return pre
};

const head = createLink([1,2,3,4,5])
reverseList(head)
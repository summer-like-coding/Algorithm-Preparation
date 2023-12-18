/**
 * 203 移除链表元素
 */

import { ListNode, createLink, printLink } from "./types";

function removeElements(head: ListNode | null, val: number): ListNode | null {
    // 设置一个虚拟头节点
    const tail = new ListNode(-1,head)
    let cur = head // 为什么设置cur = head？会WA？
    while(cur && cur.next){
        if(cur.next.val === val){
            cur.next = cur.next.next
            continue // 为什么要加continue？ 因为如果不加，那么cur.next = cur.next.next之后，cur就不会再往后移动了，而是会停留在原地，这样就会导致有些元素没有被删除
        }
        cur = cur.next
    } 
    console.log(printLink(tail))
    return tail
};

const head = createLink([7,7,7,7])
removeElements(head,7)
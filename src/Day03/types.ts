export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

/**
 * 按照数组打印链表
 */

export function printLink(head:ListNode | null):number[]{
    let cur = head
    const res = []
    if(cur === null){
        return[]
    }
    while(cur){
        res.push(cur.val)
        cur = cur.next
    }
    return res
}

/**
 * 将数组变为一个链表
 */

export function createLink(arr:number[]):ListNode | null{
    const tail = new ListNode(-1,null)
    let head = tail
    arr.forEach((item)=>{
        let node = new ListNode(item)
        head.next = node
        head = node
    })
    return tail.next
}

/**
 * 面试题 02.07 链表相交
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let p1 = headA
    let p2 = headB
    while(p1.next !== null || p2.next !== null){
       if(p1.val === p2.val){
        return p1.val
       } 
       if(p1.next === null){
        p1 = headA
        continue
       }
       if(p2.next === null){
        p2 = headB
        continue
       }
       if(p1.next === null && p2.next === null){
        return null
       }
       p1 = p1.next
       p2 = p2.next
    }
    return null
};
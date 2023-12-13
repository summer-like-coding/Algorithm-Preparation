/**
 * 69 x 的平方根
 * 思路： 
 * 1. 二分查找，找到最后一个平方小于等于x的数
 */
// WA
function mySqrt(x: number): number {
    // 特殊情况
    if(x === 0){
        return x
    }
    const arr = Array.from({ length: x }).map((_item, index) => ++index)
    let left = 0
    let right = x - 1
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (arr[mid] ** 2 === x) {
            return arr[mid]
        } else if (arr[mid] ** 2 < x) {
            left = mid + 1
        } else if (arr[mid] ** 2 > x) {
            right = mid - 1
        }
    }
    return arr[right]
};
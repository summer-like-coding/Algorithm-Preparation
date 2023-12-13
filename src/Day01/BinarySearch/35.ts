/**
 * 35. 搜索插入位置
 * 思路：
 * 1. 首先是找到这个数，如果找到了，就返回这个数的下标
 * 2. 如果找不到，就返回这个数应该插入的位置
 */

function searchInsert(nums: number[], target: number): number {
    // 找这个值，找不到就插入
    let left = 0
    let right = nums.length - 1
    let mid = 0
    while (left <= right) {
        mid = Math.floor((left + right) / 2)
        if (nums[mid] == target) {
            return mid
        } else if (nums[mid] < target) {
            left = mid + 1
        } else if (nums[mid] > target) {
            right = mid - 1
        }
    }
    return left // 因为当循环结束时，left一定大于right，所以返回left
};

console.log(searchInsert([1, 3, 5, 6], 5))
console.log(searchInsert([1, 3, 5, 6], 2)) 
console.log(searchInsert([1, 3, 5, 6], 7))
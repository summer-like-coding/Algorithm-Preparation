/**
 * 704. 二分查找
 */


/**
 * [a,b)区间
 */

function search(nums: number[], target: number): number {
    // [a,b)区间
    let left = 0
    let right = nums.length
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2)
        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] < target) {
            left = mid + 1 // 需要注意，因为左边是闭区间，nums[mid]已经比较过了，所以下一次取值，就是mid+1
        } else if (nums[mid] > target) {
            right = mid // 需要注意，因为右边是开区间，nums[mid]还没比较过，所以下一次取值，就是mid
        }
    }
    return -1
};

// console.log(search([-1, 0, 3, 5, 9, 12], 9))
console.log(search([-1, 0, 3, 5, 9, 12], 2))
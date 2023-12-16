/**
 * 26 删除排序数组中的重复项
 */

// 双指针
function removeDuplicates(nums: number[]): number {
    let fast = 0
    let slow = 0
    while (fast < nums.length) {
        if (nums[fast] !== nums[slow]) {
            slow++
            nums[slow] = nums[fast]
        }
        fast++
    }
    return slow + 1 // +1是因为slow是索引，索引从0开始
};
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))
console.log(removeDuplicates([1, 1, 2]))
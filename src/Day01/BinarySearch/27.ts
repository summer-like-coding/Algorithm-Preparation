/**
 * 27. 移除元素
 */

// 双指针写法
function removeElement(nums: number[], val: number): number {
    let fast = 0 // 用于遍历数组
    let slow = 0 // 用于记录不等于val的元素
    while (fast < nums.length) {
        if (nums[fast] !== val) {
            nums[slow] = nums[fast]
            slow++
        }
        fast++
    }
    return slow
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2))
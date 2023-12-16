/**
 * 283. 移动零
 */

function moveZeroes(nums: number[]): void {
    let fast = 0
    let slow = 0
    while (fast < nums.length) {
        if (nums[fast] !== 0) {
            nums[slow] = nums[fast]
            slow++
        }
        fast++
    }
    // 补上后面的0
    while (slow < nums.length) {
        nums[slow] = 0
        slow++
    }
};
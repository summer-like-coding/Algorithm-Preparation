/**
 * 977. 有序数组的平方
 */


/**
 * 题目表达：给你一个按 非递减顺序 排序的整数数组 nums
 * 题目思路：维护两个指针，分别指向数组的头和尾，比较两个指针指向的元素的绝对值，将较大的那个元素的平方，放入结果数组的尾部
 * @param nums 
 * @returns 
 */
function sortedSquares(nums: number[]): number[] {
    const res = []
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        if (Math.abs(nums[left]) <= Math.abs(nums[right])) {
            res.unshift(nums[right] ** 2)
            right--
        } else {
            res.unshift(nums[left] ** 2)
            left++
        }
    }
    return res
};
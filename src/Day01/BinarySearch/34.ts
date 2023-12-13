/**
 * 34. 在排序数组中查找元素的第一个和最后一个位置
 */

function searchRange(nums: number[], target: number): number[] {
    // 首先还是查找，因为非递减，但是会重复，我们只要在匹配到以后，去前后找一下，是否有相同的值就好了
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] === target) {
            let leftIndex = mid - 1 
            let rightIndex = mid + 1
            while (nums[leftIndex] === target) {
                leftIndex--
            }
            while (nums[rightIndex] === target) {
                rightIndex++
            }
            return [leftIndex + 1, rightIndex - 1]  // 这边要注意，因为上面的循环，会多减一次，多加一次，所以要加回来?

        } else if (nums[mid] < target) {
            left = mid + 1
        } else if (nums[mid] > target) {
            right = mid - 1
        }
    }
    return [-1, -1]
};
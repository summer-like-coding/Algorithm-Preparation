/**
 * 209. 长度最小的子数组
 */

/**
 * 典型的滑动窗口题目
 */


export function minSubArrayLen(target: number, nums: number[]): number {
    // 快慢指针问题
    let fast = 0
    let slow = 0
    let sum = 0
    let len = Number.MAX_SAFE_INTEGER
    while (fast < nums.length) {
        sum += nums[fast]
        fast++
        // while (sum < target && fast < nums.length - 1) {
        //     fast++
        //     sum += nums[fast]
        // }
        // if (sum >= target) len = Math.min(len, fast - slow + 1)
        // 开始收缩窗口
        while (sum >= target && slow <= fast) {
            len = Math.min(len, fast - slow + 1)
            sum -= nums[slow]
            slow++
        }
    }
    return len === Number.MAX_SAFE_INTEGER ? 0 : len
};

// console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
// console.log(minSubArrayLen(4, [1, 4, 4]));
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]));

/**
 * 344 反转字符串
 */

function reverseString(s: string[]): string[] {
    // 采用双指针，直接修改
    let left = 0
    let right = s.length-1
    while(left<right){
        [s[left],s[right]] = [s[right],s[left]] // 为什么可以这样写，因为这是数组，数组是引用类型，所以可以直接修改
        left++
        right--
    }
    return s
};

console.log(reverseString(["h","e","l","l","o"]));



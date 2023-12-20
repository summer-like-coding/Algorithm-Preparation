/**
 * 151. 翻转字符串里的单词
 */

/**
 * API 解法
 * @param s 
 */
function reverseWords1(s: string): string {
    let arr = s.split(' ')
    // 去除空字符串
    arr = arr.filter(item => item !== '')
    arr.reverse()
    return arr.join(' ')
};

function reverseWords(s: string): string {
    // 首先变成数组
    let arr = s.split(' ').filter(item => item !== '')
    let left = 0
    let right = arr.length-1
    while(left<right){
        [arr[left],arr[right]] = [arr[right],arr[left]]
        left++
        right--
    }
    return arr.join(' ')
};

console.log(reverseWords("the sky is blue"));
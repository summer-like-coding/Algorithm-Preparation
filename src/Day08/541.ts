/**
 * 541 - 反转字符串 II
 */

function reverseStr(s: string, k: number): string {
    let arr = s.split('')
    let newArr:string[][] = []
    for(let i=0;i<arr.length;i+=k){
        newArr.push(arr.slice(i,i+k)) // 每k个一组
    }
    for(let i=0;i<newArr.length;i+=2){
        newArr[i].reverse()
    }
    return newArr.flat().join('')
};
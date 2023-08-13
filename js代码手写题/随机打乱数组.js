let arr = [1,2,3,4,5,6,7,8,9]
for(let i = 0, len = arr.length; i<len; i++){
    let idx = Math.floor(Math.random()*(len-i))+i;
    [arr[i], arr[idx]] = [arr[idx], arr[i]]
}
console.log(arr)
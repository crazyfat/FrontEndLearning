//好元素
function func(len, k){
    let res = new Array(len).fill(0)
    let begin = len-k+1, idx = 1
    for(let i = 0; i<k; i++){

        res[i*2] = begin
        begin++
    }
    for(let i = 0; i<k; i++){
        if(i*2+1<len){
            res[i*2+1] = idx
            idx++
        }
    }
    for(let i = 2*k; i<len; i++){
        res[i] = idx
        idx++
    }
    return res
}
console.log(func(120,6))
function flatten(arr){
    let res = []
    for(let i = 0, len = arr.length; i<len; i++){
        if(Array.isArray(arr[i])){
            res.concat(flatten(arr[i]))
        }else
            res.push(arr[i])
    }
    return res
}
const func = function(nums, k){
    nums.sort((a,b)=>a-b)
    let map = new Map(), record = [], sum = 0
    for(let i = 0, len = nums.length; i<len; i++){
        map.set(nums[i], (map.get(nums[i])||0)+1)
    }
    for(let item of map){
        sum += item[1]
        record.push(item[0])
        if(sum>k){
            while(record.length>0 && sum>k){
                let key = record.shift()
                sum -= map.get(key)
            }
        }else if(sum==k){
            console.log(record[0]+' '+record[record.length-1])
            return
        }
    }
    console.log('-1')
}
let arr = [10,2,10,2]
func(arr,2)

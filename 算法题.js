function func(nums){
    let arr = new Array(nums.length+1).fill(0)
    let zeros = new Array(nums.length+1).fill(0)
    for(let i = arr.length-2, cnt = 0, cntZeros; i>=0; i--){
        if(nums[i]<0){
            cnt++
        }
        if(nums[i]==0)
            zeros++
        arr[i] = cnt
        zeros[i] = zeros
    }
    let b = 0, w = 0
    for(let i = 0; i<nums.length; i++){
        for(let j = i; j<nums.length; j++){
            let tmp1 = arr[i]-arr[j+1]
            let tmp2 = zeros[i]-zeros[j+1]
            if(tmp2>0){
                b ++
                continue
            }
            if(tmp1%2==0)
                w++
            else
                b++

        }
    }
    console.log(b,w)
}
function f2(nums){
    let len = nums.length
    let white = new Array(len).fill(0)
    if(nums[0]){
        white[0] = 1
    }else{
        black[0] = 1
    }
    for(let i = 1; i<len; i++){
        if(nums[i]){

        }
    }

}
let nums = [5,-2,2,-1,1]
func(nums)
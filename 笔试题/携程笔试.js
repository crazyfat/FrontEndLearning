//阶乘
let arr = []
let i = 1, num = 1
while(num<1000000000){
    arr.push(num-1)
    i++
    num = num*i
}
const func = function(n){
    let min = 1000000005, minX = -1, minY = -1
    for(let i = 0; i<arr.length; i++){
        if(arr[i]>n) break
        if(i==1) continue
        if(i==0){
            min = Math.abs(n)
            minX = 1
            minY = 1
        }
        if(n%arr[i]==0){
            console.log((i+1)+' '+n/arr[i])
            return
        }else{
            let y1 = Math.floor(n/arr[i]), y2 = Math.ceil(n/arr[i])
            let div1 = Math.abs(n-arr[i]*y1), div2 = Math.abs(n-arr[i]*y2)
            if(div1<min){
                min = div1
                minX = i+1
                minY = y1
            }
            if(div2<min){
                min = div2
                minX = i+1
                minY = y2
            }
        }
    }
    console.log(minX+' '+minY)
}
console.log(arr)
func(25)
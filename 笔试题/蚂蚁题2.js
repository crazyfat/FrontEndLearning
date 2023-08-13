function search(arr, color){
    let map = new Map()
    arr.forEach(item=>{
        if(map.has(item[0])){
            let old = map.get(item[0])
            old.push(item[1])
            map.set(item[0], old)
        }
        else
            map.set(item[0], [item[1]])
    })
    let que = [],red = 0, need_red = false
    //第一个为红
    if(color[0]=='W'){
        red++
    }
    que.push(...map.get(1))
    while(que.length>0){
        let len = que.length
        while(len>0){
            let tmp = que.shift()
            if(color[tmp-1]=='W' && need_red){
                red++
            }
            if(color[tmp-1]=='R' && !need_red){
                red++
            }
            //console.log(map.get(tmp))
            if(map.has(tmp))
                que.push(...map.get(tmp))
            len--
        }
       need_red = !need_red
    }
    let white = 0, need_white = false
    que = []
    //第一个为白
    if(color[0]=='R'){
        white++
    }
    que.push(...map.get(1))
    while(que.length>0){
        let len = que.length
        while(len>0){
            let tmp = que.shift()
            if(color[tmp-1]=='R' && need_white){
                white++
            }
            if(color[tmp-1]=='W' && !need_white){
                white++
            }
            //console.log(map.get(tmp))
            if(map.has(tmp))
                que.push(...map.get(tmp))
            len--
        }
        need_white = !need_white
    }
    return Math.min(white, red)
}
let arr = [[1,2],[2,3],[2,4]]
let color = 'RWWW'
console.log(search(arr, color))
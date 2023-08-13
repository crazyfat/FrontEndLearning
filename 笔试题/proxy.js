//直接收字符串的数组
let arr = []
let arr2 = new Proxy(arr,{
    get(target, p) {
        return target[p]
    },
    set(target, p, value){
        if(typeof value == 'string') target[p] = value
        else delete target[p]
        return true
    },
    deleteProperty(target, p) {
        delete target[p]
    }
})
// Array.prototype.oldPush = Array.prototype.push
// Array.prototype.push = function (...args){
//     for(let val of args){
//         this.oldPush(val)
//     }
// }
arr2.push('5',9, 7,'', '88',{},'99')
console.log(arr2.join(','))

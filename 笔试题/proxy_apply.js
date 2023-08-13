const proxyPush = new Proxy(Array.prototype.push, {
    apply(target, thisArg, argArray) {
        console.log('start')
        const filterArgs = argArray.filter(item=>typeof item==='string')
        console.log(target, thisArg)
        return target.apply(thisArg, filterArgs)
    }
})
let arr = []
Array.prototype.push = proxyPush
arr.push('1',3,'4')
console.log(arr)


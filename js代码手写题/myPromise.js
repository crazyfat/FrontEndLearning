function myPromise(fn){
    var self = this
    this.state = 'PENDING'
    this.value = null
    this.resolvedCallbacks = []
    this.rejectedCallbacks = []
    function resolve(value){
        if(value instanceof myPromise) return value.then(resolve, reject)
        setTimeout(()=>{
            if(self.state=='PENDING'){
                self.state = 'RESOLVED'
                self.value = value
                self.resolvedCallbacks.forEach(callback=>{
                    callback(value)
                })
            }
        })
    }
    function reject(value){
        setTimeout(()=>{
            if(self.state=='PENDING'){
                self.state = 'REJECTED'
                self.value = value
                self.rejectedCallbacks.forEach(callback=>{
                    callback(value)
                })
            }
        })
    }
    try{
        fn(resolve, reject)
    }catch (e){
        reject(e)
    }
    myPromise.prototype.then = function (onResolved, onRejected){
        return new myPromise((resolve, reject)=>{
            let resolved = ()=>{
                try{
                    let res = onResolved(this.value)
                    return res instanceof myPromise? res.then(resolve, reject):resolve(res)
                }catch (e){
                    return reject(e)
                }
            }
            let rejected = ()=>{
                try{
                    let res = onRejected(this.value)
                    return res instanceof myPromise? res.then(resolve, reject):reject(res)
                }catch (e){
                    reject(e)
                }
            }
            if(this.state=='PENDING'){
                this.resolvedCallbacks.push(resolved)
                this.rejectedCallbacks.push(rejected)
            }else if(this.state=='RESOLVED') resolved()
            else rejected()
        })
    }
    function all(promises) {
        return new myPromise((resolve, reject)=>{
            let cnt = 0, num = promises.length, res = []
            for(let i = 0; i<num; i++){
                myPromise.resolve(promises[i]).then(value => {
                    cnt++
                    res[i] = value
                    if(cnt==num) resolve(res)
                },reason => {
                    reject(reason)
                })
            }
        })
    }
    function race(promises){
        return new myPromise((resolve, reject)=>{
            promises.forEach(p=>{
                //此处最好将p用Promise.resolve包裹一下，因为p不一定是promise
                p.then(resolve, reject)
            })
        })
    }
}
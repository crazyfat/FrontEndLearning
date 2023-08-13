function myPromise(executor){
    const self = this
    this.value = null
    this.state = 'PENDING'
    this.resolvedCallbacks = []
    this.rejectedCallbacks = []
    function resolve(value){
        if(value instanceof myPromise){
            value.then(resolve, reject)
        }else{
            if(self.state=='PENDING')
                setTimeout(()=>{
                    self.state = 'RESOLVED'
                    self.value = value
                    self.resolvedCallbacks.forEach(cb=>{
                        cb(value)
                    })
                })
        }
    }
    function reject(value){
        if(self.state=='PENDING')
            setTimeout(()=>{
                self.state = 'REJECTED'
                self.value = value
                self.rejectedCallbacks.forEach(cb=>{
                    cb(value)
                })
            })
    }
    try{
        executor(resolve, reject)
    }catch (e){
        reject(e)
    }
    myPromise.prototype.then = function(onResolved, onRejected){
        return new Promise((resolve, reject)=>{
            let resolved = ()=>{
                try{
                    let res = onResolved(this.value)
                    return res instanceof myPromise? res.then(resolve, reject):resolve(res)
                }catch (e){
                    reject(e)
                }
            }
            let rejected = ()=>{
                try{
                    let res = onRejected(this.value)
                    return res instanceof myPromise? res.then(resolve, reject):rejected(res)
                }catch (e){
                    reject(e)
                }
            }
            if(this.state == 'PENDING'){
                this.rejectedCallbacks.push(resolved)
                this.rejectedCallbacks.push(rejected)
            }else if(this.state == 'RESOLVED') resolved()
            else rejected()
        })
    }
    myPromise.prototype.all = function(promises){
        return new Promise((resolve, reject)=>{
            let cnt = 0, len = promises.length, res = new Array(len)
            for(let i = 0; i<len; i++){
                let p = Promise.resolve(promises[i])
                p.then(value=>{
                    res[i] = value
                    cnt++
                    if(cnt==len) return resolve(res)
                }, reason => reject(reason))
            }
        })
    }
    myPromise.prototype.race = function(promises){
        return new Promise((resolve, reject)=>{
            promises.forEach(p=>{
                Promise.resolve(p).then(resolve, reject)
            })
        })
    }
}

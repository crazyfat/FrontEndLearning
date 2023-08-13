function myCreate(proto){
    function f(){}
    f.prototype = proto
    return new f()
}

function myInstanceof(a,b){
    let proto = Object.getPrototypeOf(a)
    let prototype = Object.getPrototypeOf(b)
    while(1){
        if(!proto) return false
        if(proto==prototype) return true
        proto = Object.getPrototypeOf(proto)
    }
}

function myNew(f, args){
    let obj = {}
    Object.setPrototypeOf(obj, f.prototype)
    let res = f.apply(obj, [...args])
    if(typeof res ==='object'||typeof res==='function') return res
    return obj
}

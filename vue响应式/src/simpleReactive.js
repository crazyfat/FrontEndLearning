function defineReactive(data, key, value = data[key]) {
    console.log('defineReactive:', key)
    observe(value)
    Object.defineProperty(data, key, {
        configurable:true,
         enumerable:true,
        //数据劫持
        get(){
            console.log('read :',key)
            return value
        },
        set(newVal){
            console.log('write :',key)
            if(newVal == value) return
            value = newVal
            observe(newVal)
        }
    })
}

function observe(data){
    if(typeof data !== 'object') return
    new Observer(data)
}

class Observer{
    constructor(value) {
        this.value = value
        this.walk()
    }
    walk(){
        Object.keys(this.value).forEach(key=>{
            defineReactive(this.value, key)
        })
    }
}
let same = {
    j:9
}

let obj = {
    a:{
        m:{
            n:same
        }
    },
    b:[11,23,76]
}
observe(obj)
obj.b.push(44)

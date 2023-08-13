import {observe} from "./observe.js";
import Dep from "./Dep.js";

export default function defineReactive(data, key, value){//构建了一个闭包环境
    const dep = new Dep()
    console.log('definReactive', key)
    if(arguments.length==2)
        value = data[key]

    let childOB = observe(value)
    Object.defineProperty(data, key, {
        enumerable:true,
        configurable:true,
        get(){
            console.log('正在读取'+key+'属性，值为：')
            console.log(value)
            return value
        },
        set(v){
            console.log('正在修改'+key+"属性，修改的值为：")
            console.log(v)
            if(v===value)
                return
            // 当设置了新值，那么新的值也要被observe
            value = v
            childOB = observe(v)

            dep.notify()
        }
    })
}
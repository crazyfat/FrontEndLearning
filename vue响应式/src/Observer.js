import {def} from "./utils.js";
import defineReactive from "./defineReactive.js";
import arrayMethods from "./array.js";
import {observe} from "./observe.js";
import Dep from "./Dep.js";

export default class Observer{
    constructor(value) {
        this.dep = new Dep()
        // 把ob实例this添加到value的__ob__属性上
        def(value, '__ob__', this, false)
        // console.log('observer构造器', value)
        if(Array.isArray(value)){
            //如果是数组，将其隐式原型改为我们封装的arrayMethods，同时让数组变得observe
            Object.setPrototypeOf(value, arrayMethods)
            this.observeArray(value)
        }else
            this.walk(value)
    }
    // observer类的目的：将一个正常的OBJ转换为每个层级的属性都是响应式的
    walk(value){
        for(let k in value){
            defineReactive(value, k)
        }
    }

    observeArray(arr){
        for(let i = 0, len = arr.length; i<len; i++ ){
            //逐项遍历observe
            observe(arr[i])
        }
    }

}
import {def} from "./utils.js";

const arrayPrototype = Array.prototype
const arrayMethods = Object.create(arrayPrototype)
const methodsNeedChange = [
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'sort',
    'reverse'
]
methodsNeedChange.forEach(methodName=>{
    const original = arrayPrototype[methodName]

    def(arrayMethods, methodName, function(...args){

        const res = original.apply(this, args)

        // 把数组身上的__ob__取出来，__ob__已经被添加了，因为数组肯定不是最高层
        const ob = this.__ob__

        // 有三种方法push\unshift\splice能插入新项，所以新项目也要成为observe
        //original() 函数直接执行，上下文是window对象

        let inserted = []
        switch (methodName) {
            case 'push':
            case 'unshift':
                inserted = args
                break
            case 'splice':
                inserted = args.slice(2)
                break
        }
        if(inserted){
            // console.log(inserted)
            // console.log(ob)
            ob.observeArray(inserted)
        }
        console.log('修改了数组，方法为：'+methodName)
        ob.dep.notify()
        return res
    }, false)

})
export default arrayMethods
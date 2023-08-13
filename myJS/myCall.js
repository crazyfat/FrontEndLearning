Function.prototype.myCall = function(...args){
    //判断类型
    if(typeof this != 'function')
        console.error('type error')
    // call的参数为：[this, arg1, arg2...]
    let context = args.shift()
    context = context || window
    // 把function添加到this里
    context.fn = this
    // 通过this调用function
    let res = context.fn(...args)
    delete context.fn
    return res
}

function myDelete(num1, num2){
    while(num1>0){
        this.data++
        num1--
    }
    this.data *= num2
}
obj = {
    data:40
}
myDelete.myCall(obj, 29, 2)
console.log(obj.data)

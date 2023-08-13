// let func = myDelete.bind(this) return is a function
Function.prototype.bind = function (context){
    // if(typeof this !== 'function'){
    //     throw Error('type error')
    // }
    //context = context || window
    //console.log(context)
    //console.log(this)
    let fn = this

    return function (...args){
        return fn.apply(context, ...args)
    }
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
let del = myDelete.bind(obj)
del(1, 2)
console.log(obj.data)
del(2, 2)
console.log(obj.data)
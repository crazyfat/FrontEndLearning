Function.prototype.myApply = function(context, args){
    if(typeof this !== 'function'){
        throw Error('type error')
    }
    context = context || window
    context.fn = this
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
myDelete.myApply(obj, [29, 2])
console.log(obj.data)
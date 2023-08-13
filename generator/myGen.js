//首先gen返回一个对象 这个对象有next方法 next方法返回一个具有value和done的对象
function gen$v2(context) {
    while (1) {
        switch (context.prev = context.next) {
            case 0:
                context.next = 1
                return 'res1'
            case 1:
                context.next = 2
                return 'res2'
            case 2:
                context.stop()
                return undefined

        }
    }
}
var context = {
    prev:0,
    next:0,
    done:false,
    stop(){
        this.done = true
    }
}
let myGen = function(){
    return {
        next(){
            let value = gen$v2(context)
            let done = context.done
            return {
                value,
                done
            }
        }
    }
}
let gen = myGen(context)
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
//但是还有一个问题
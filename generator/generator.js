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
class Context{
    constructor() {
        this.prev = 0
        this.cur = 0
        this.done = false
    }
    stop(){ //这里直接定义在原型里 让所有的实例都共享
        this.done = true
    }
}
function generator(){
    var cxt = new Context()
    return {
        next(){
            let value = gen$v2(cxt)
            let done = cxt.done
            return {
                value,
                done
            }
        }
    }
}
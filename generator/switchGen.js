function gen$v1(){ //闭包+switch
    var step = 0
    return function(){
        while(1){
            switch (step){
                case 0:
                    step = 1
                    return 'res1'
                case 1:
                    step = 2
                    return 'res2'
                case 2:
                    return undefined
            }
        }
    }
}
let context = {
    prev:0,
    next:0
}
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
                return undefined

        }
    }
}
console.log(gen$v2(context))
console.log(gen$v2(context))
console.log(gen$v2(context))
console.log(gen$v2(context))

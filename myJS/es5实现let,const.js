(function(){
    var a = 10
    console.log(a)
})()
let b = 'const value'
Object.defineProperty(window, 'b',{
    set(v) {
        throw new Error('const 变量无法被修改')
    },
    get() {
        return b
    }
})
console.log(window.b)
function*g(){
    let a = 1
    yield a++;
    yield a++
    console.log('ffff')
    yield 5;
    console.log('返回5之后停住了')
    console.log('888')
    return a++
    console.log('4444')
}
let sta = g()
console.log(sta.next())
console.log(sta.next())
console.log(sta.next())
console.log(sta.next())
console.log(sta.next())

function add(){
    let a = 1
    return a++
}
console.log(add())
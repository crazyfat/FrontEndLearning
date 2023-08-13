// async function f1(){
//     await new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(1)
//             console.log(1)
//         }, 1000)
//     })
//     await new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(2)
//             console.log(2)
//         }, 1000)
//     })
//     await new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(3)
//             console.log(3)
//         }, 1000)
//     })
//     return 'hello'
// }
// console.log(f1)
// f1().then((value)=>{console.log(value)})
function * f2(){
    yield new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(1)
            console.log(1)
        }, 1000)
    })
    yield new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(2)
            console.log(2)
        }, 1000)
    })
    yield new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(3)
            console.log(3)
        }, 1000)
    })
    return 'hello'
}
function co(fn){
    let obj = fn.next()
    if(obj.done) return
    obj.value.then(()=>co(fn))
}
let fn = f2()
co(fn)
// // f1()
// //每隔一秒打印一个
// //下面是用generator实现
// function * f2(){
//     yield new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(1)
//             console.log(1)
//         }, 1000)
//     })
//     yield new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(2)
//             console.log(2)
//         }, 500)
//     })
//     yield new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(3)
//             console.log(3)
//         }, 100)
//     })
// }
// let gen = f2()
// function co(g){
//     let nextObj = g.next()
//     if(nextObj.done) return
//     nextObj.value.then(()=>{co(g)})
// }
// co(gen)
//
// function myCreate(proto){
//     function F(){}
//     F.prototype = proto
//     return new F()
// }



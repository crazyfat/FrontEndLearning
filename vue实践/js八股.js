// console.log(void 0)
// let a = new String('ccc')
// console.log(ToPrimitive(a, string))
// var tmp = 'hello world';
//
// for (var i = 0; i < tmp.length; i++) {
//     console.log(tmp[i]);
// }
//
// console.log(i); // 11
// for (var i = 1; i <= 5; i++) {
//     ;(function(i){
//         setTimeout(function timer() {
//             console.log(i)
//         }, i * 10)
//     })(i)
// }
// const p = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log('111')
//         resolve()
//     })
// })
// p.then(
//     value=>{
//         console.log('222')
//     }
// )
// p.then(
//     value => {
//         console.log('333')
//     }
// )
Promise.resolve(1)
    .then(2)
    .then(Promise.resolve(3))
    .then(console.log)
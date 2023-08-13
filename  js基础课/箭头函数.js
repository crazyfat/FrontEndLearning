// const obj = {
//     f1(){
//         console.log(this);
//     },
//     f2:()=>{
//         console.log(this);
//     }
// }
// obj.f1();
// obj.f2();
// const arr = ['1','2','3','4'];
// let p = arr.map(v=>+v);
// console.log(p);
// let num = 45678;
// const arr = num.toString().split('').map(v=>+v);
// console.log(num.toString().split(''));
// console.log(arr);
//
// const list = ['1', '2', '3'];
// console.log(list.map(v=>+v));
// let a = 'Hello World!';
// function first() {
//     console.log('Inside first function');
//     second();
//     console.log('Again inside first function');
// }
// function second() {
//     console.log('Inside second function');
// }
// first();
// //执行顺序
// //先执行second(),在执行first()
// let p1 = new Promise((resolve, reject) => {
//     resolve("fulfilled");
// })
//     .then(
//         value => {
//             return {
//                 then(resolve,reject){
//                     reject("aaa")
//                 }
//             }
//
//         },
//         reason => {}
//     )
//     .then(
//         value => {
//             console.log(value);
//         },
//         reason => {
//             console.log("失败"+reason);
//         }
//     );
// let p1 = new Promise((resolve, reject) => {
//     resolve("fulfilled");
// })
//     .then(
//         value => {
//             return new Promise((resolve, reject) => {//只要return了，后面的then针对的就是这个return的新promise
//                 reject("处理失败");
//             })
//         },
//         reason => console.log(reason)
//     )
//     .then(//此时的then是对上面的then的处理
//         value => {
//             console.log("成功:" + value);
//         },
//         reason => console.log("error" + reason)
//     );
// console.log('script start')
// let promise1 = new Promise(function (resolve) {
//     console.log('promise1')
//     setTimeout(()=>{
//         resolve()
//     },1000)
//     console.log('promise1 end')
// }).then(function () {
//     console.log('promise2')
// })
// setTimeout(function(){
//     console.log('settimeout')
// })
// console.log('script end')
// // 输出顺序: script start->promise1->promise1 end->script end->promise2->settimeout
const p = Promise.resolve(1)
console.log(p)


// function currying(fn) {
//     let length = fn.length;
//     let args = [].slice.call(arguments,1);
//     return function () {
//         let _args = args.concat([...arguments]);  // 合并参数
//         if(_args.length < length) {  // 未接收完参数
//             return currying.call(this,fn,..._args);
//         } else {  // 接受完所有参数，直接执行
//             return fn.apply(this,_args);
//         }
//     }
// }
// let sum = currying(function(a,b,c){
//     return a+b+c
// })
// console.log(sum(1,2,3,4,5))
// console.log(sum(1)(2)(3)(5))

function add(m){
    let temp = function(n){
        return add(m+n)
    }
    temp.toString = function(){
        return m
    }
    return temp
}
console.log(+add(1)(2)(3)(5))
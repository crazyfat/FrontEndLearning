// import {observe} from "./src/observe.js";
//
// const obj = {
//     arr: [
//         {
//             a: 1
//         }
//     ]
// }
// observe(obj)
// obj.arr.splice(1,1,[99,8])
// console.dir(obj)

// defineReactive(obj, 'a')
// console.log(obj.a.m.n)
// function myCreate(proto){
//     function F(){}
//     F.prototype = proto
//     return new F()
// }
var  a = 3
function Parent1(name){
    this.name = name
    return { a }
}
function Parent2(name){
    this.name = name
    return func
}
console.log(new Parent1())
console.log(new Parent2())
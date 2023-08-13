// let a,b,arr = [5,6];
// [a,b] = [...arr]
// console.log(a, b)

let str = '1 2 3'
let a, b, c;
[a,b,c] = [...str.split(' ').map(v=>+v)]
console.log(a,b,c)
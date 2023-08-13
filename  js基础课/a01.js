// let obj1 = {a:1};
// let obj2 = {b:2,c:3};
// Object.setPrototypeOf(obj1,obj2);
// console.log(Object.getPrototypeOf(obj1));
// let arr = [3, 2, 14];
// console.log(arr.sort());
// console.log(arr.sort((a, b)=>(a-b)));
// let arr2 = new Array(3, 2, 14);
// console.log(arr2.sort());
// console.log(arr2.sort((a, b)=>(a-b)));
// let arr = [1,2,3];
// let nums = [...arr];
// nums[1] = 4;
// console.log(arr);
// console.log(nums);
const [first, ...rest] = [1, 2, 3, 4, 5];
let str = 'kkk';
const log =1 ;
console.log();
const func = (a=1, b=2) =>{
    console.log(Array.prototype.slice.call(arguments));
}

function func(){
    console.log();
}
//下面两种是匿名函数写法
const func1 = function (){
    console.log();
}
const func2 = () =>{
    console.log();
}
var obj = {
    func3(){
        console.log("func3");
    },
    func4:function (){
        console.log("func4");

    },
    func5:()=>{
        console.log("func5");
    }
}
obj.func3();
obj.func4();
obj.func5();
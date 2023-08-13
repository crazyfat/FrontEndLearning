//原型继承 父类实例是子类原型

function Father(){
    this.name = 'father'
    this.x = '44'
}
Father.prototype.say = function(){
    console.log(`i am ${this.name}`)
}
// function Son(){
//     this.name='son'
// }
Son.prototype = new Father()
Son.prototype.constructor = Son
Son.prototype.cry = function(){
    console.log('wuwuwuw')
}
let s1 = new Son()
let s2 = new Son()
console.log(s1.x+' '+s2.x)
Object.getPrototypeOf(s2).x='88'
console.log(s1.x+' '+s2.x)

//借用构造函数
function Son(){
    Father.call(this)
}
let s = new Son()
s.cry()
s.say()
console.log(s.x)


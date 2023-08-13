function Father(){
    this.name = 'father'
    this.age = 8989
    this.cry = function(){
        console.log('wuwuwu')
    }
}
Father.prototype.say = function (){
    console.log('i am father')
}
function Son(){
    this.name = 'son'
}
Son.prototype = new Father()
Son.prototype.constructor = Son
let son = new Son()
console.log(son.age)
son.cry()
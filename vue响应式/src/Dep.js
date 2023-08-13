var uid = 0
export default class Dep{
    constructor() {
        //发布者订阅者模式 用数组存储自己的订阅者 dep--dependence subs--subscribes
        //放的是watcher实例
        this.id = uid++
        this.subs = []
    }
    addSub(sub){
        this.subs.push(sub)
    }
    notify(){
        console.log('触发notify')
        // 克隆为了数据安全
        const subs = this.subs.slice()
        for(let i = 0, len = subs.length; i<len; i++){
            subs[i].update()
        }
    }
}
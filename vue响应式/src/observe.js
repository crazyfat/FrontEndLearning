import Observer from "./Observer.js";

export const observe = function observe(value){
    if(typeof value !== 'object')
        return
    //定义ob
    var ob
    if(typeof value.__ob__ !== 'undefined'){
        ob = value.__ob__
    }else{
        ob = new Observer(value)
    }
    return ob
}

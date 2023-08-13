function f(num){
    return num<=2? 1:f(num-1)+f(num-2)
}
console.log('分线程this:'+'\n'+this)
var onmessage = function(event){
    console.log('分线程回调:'+'\n'+this)
    console.log(event)
    //console.log('分线程接收到数据'+event.data)
    let res = f(event.data.value)
    postMessage(res)
    event.data.window.alert('jjjj')
    //console.log('分线程发送数据'+res)
}
function Axios(config){
    this.config = config
}
Axios.prototype.request = function (config) {
    let chains = [dispatchRequest, undefined]
    let promise = Promise.resolve(config) //1、一个成功的promise value为config
    let res = promise.then(chains[0], chains[1]) //2、调用then 因为本身就是成功的 所以执行chains[0](value) promise的回调参数为promise对象的值
    return res

}
function dispatchRequest(config){
    return xhrAdapter(config).then( //4、返回一个promise对象，其状态根据③的状态，因此返回一个成功的promise 其value等于③promise中的value值
        value => { return value },
        reason => { throw reason }
    )
}
function xhrAdapter(config){
    return new Promise((resolve, reject)=>{ //3、返回一个成功的promise对象，其value为xhr返回结果封装后的对象
        let xhr = new XMLHttpRequest()
        xhr.open(config.method, config.url)
        xhr.send()
        xhr.onreadystatechange = function (){
            if(xhr.readyState == 4){
                if(xhr.status>=200 && xhr.status<300){
                    resolve({
                        config:config,
                        data:xhr.response,
                        headers:xhr.getAllResponseHeaders(),
                        request:xhr,
                        status:xhr.status,
                        statusText:xhr.statusText
                    })
                }else{
                    reject(new Error('请求失败 失败状态码为：'+xhr.status))
                }
            }
        }
    })

}
let axios = Axios.prototype.request.bind(null)
config = {
    method:'get',
    url:'http://localhost:3000/posts'
}
let p = axios(config)
p.then(
    value => {
        console.log(value)
    }
)

function Axios(config){
    this.default = config
    this.interceptors = {
        request:{},
        response:{}
    }
}
Axios.prototype.request = function (config) {
    console.log('进行request请求：'+config.method)
}
Axios.prototype.get = function (config){
    this.request({method:'get'})
}
Axios.prototype.post = function (config) {
    this.request({method: 'post'})
}

function createInstance(config){
    let context = new Axios(config) //context是一个Axios对象，可以用.request,.get等方法
    let instance = Axios.prototype.request.bind(context) //instance是一个函数，可以instance()这么使用，但是还没有defult等属性
    // 可以通过构造函数的原型或者实例的隐式原型遍历
    Object.keys(Axios.prototype).forEach(key=>{
        instance[key] = Axios.prototype[key].bind(context)
    })
    // Axios构造函数还未传入配置项，所以这里要遍历context
    Object.keys(context).forEach(key=>{
        instance[key] = context[key]
    })
    return instance
}
let ins = createInstance({timeout:10})
console.dir(ins)
ins.post()
ins.request({method:'get'})

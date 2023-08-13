data = {
    a:1,
    b:2
}
const obs = new Observer(data)
function Observer(obj){
    const keys = Object.keys(obj)
    console.log(keys)
    keys.forEach(key=>{
        Object.defineProperty(this, key, {
            get(){
                return obj[key]
            },
            set(val){
                obj[key] = val
            }
        })
    })

}
console.dir(obs.a)
obs.a = 9
console.log(obs.a)

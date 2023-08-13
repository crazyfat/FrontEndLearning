let p = new Promise((resolve, reject)=>{
    resolve(console.log('执行成功'))
    console.log('同步代码1')
}).then(
    value => {
        console.log('成功的回调')
    }
)
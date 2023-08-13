function f(){
    console.log('fff')
}
const thenable = {
    then(resolve, reject){
        console.log('then')
        resolve('data')
    }
}
new Promise(resolve=>{
    console.log('promise')
    resolve(thenable)
}).then(value => console.log(value))
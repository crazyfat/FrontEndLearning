const task = function(light, timer){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(light=='r') console.log('red')
            if(light=='y') console.log('yellow')
            if(light=='g') console.log('green')
            resolve()
        }, timer)
    })
}
const step = ()=>{
    task('r', 1000)
        .then(()=>task('y', 1500))
        .then(()=>task('g', 2000))
        .then(step)
}
//step()

async function taskRunner(){
    await task('r', 1000)
    await task('y', 1500)
    await task('g', 2000)
    taskRunner()
}
taskRunner()
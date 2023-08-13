function debounce(f, time){
    let timer = null
    return function (){
        clearTimeout(timer)
        timer = setTimeout(()=>{
            f()
        }, time)
    }
}

function throttle(f, time){
    let able = true
    return function () {
        if(!able) return
        able = false
        setTimeout(()=>{
            f()
            able = true
        }, time)
    }
}
function debounce(fn, time){
    let timeout = null
    return function(){
        clearTimeout(timeout)
        timeout = setTimeout(()=>{
            fn()
        }, time)
    }
}
function throttle(fn, time){
    let able = true
    return function(){
        if(!able)
            return
        else{
            able = false
            setTimeout(()=>{
                fn()
                able = true
            }, 1000)
        }
    }
}
export const debounce = debounce
export const throttle = throttle



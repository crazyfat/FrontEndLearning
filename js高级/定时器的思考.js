function f(value){
    return value<=2? 1:f(value-1)+f(value-2)
}
console.log(f(20))
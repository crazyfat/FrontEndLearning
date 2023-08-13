function*fibonacci(){
    let [prev,cur] = [0,1]
    for(;;){
        [cur, prev] = [cur+prev, cur]
        yield cur
    }
}
for(let v of fibonacci()){
    if(v>100) break
    console.log(v)
}
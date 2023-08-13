function dataFormat(dataInput, format){
    let day = dataInput.getDate()
    let month = dataInput.getMonth()+1
    let year = dataInput.getFullYear()
    format = format.replace(/yyyy/,year)
    format = format.replace(/MM/, month)
    format = format.replace(/dd/,day)
    return format
}


// let data = new Date('2023-04-11')
// console.log(dataFormat(data, 'yyyy年MM月dd日'))

function repeat(s,n){
    //很巧妙，5个数字就是4个间隔，每个间隔替换为s
    return (new Array(n+1)).join(s)
}
console.log(repeat('123',4))
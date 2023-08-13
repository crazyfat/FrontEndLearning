let format = n=>{
    let num = n.toString()
    if(num.indexOf('.')>-1){
        let integer = num.split('.')[0], deci = num.split('.')[1]
        let len = integer.length
        if(len<=3) return num
        else {
            let remainder = len % 3
            if(remainder>0)
                return num.slice(0, remainder) + ',' + num.slice(remainder, len).match(/\d{3}/g).join(',')+'.'+deci
            else
                return num.slice(0, len).match(/\d{3}/g).join(',')+'.'+deci
        }
    }else{
        let len = num.length
        if(len<=3) return num
        else{
            let remainder = len % 3
            if(remainder>0) return num.slice(0, remainder) + ',' + num.slice(remainder,len).match(/\d{3}/g).join(',')
            else return num.slice(0,len).match(/\d{3}/g).join(',')
        }
    }

    }
console.log(format(4312486758632432))
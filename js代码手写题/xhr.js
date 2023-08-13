const URL = ''
let xhr = new XMLHttpRequest()
xhr.open('GET', URL)
xhr.onreadystatechange = function(){
    if(this.readyState!=4) return
    if(this.status >=200 && this.status<300){
        console.log()
    }
}
xhr.onerror = function(){

}
xhr.responseType = 'json'
xhr.setRequestHeader('Accept','Application/json')
xhr.send()
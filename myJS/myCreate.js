function myCreate(proto){
    function F(){}
    F.prototype = proto
    return new F()
}
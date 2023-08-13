
function* g() {
    var o = 1;
    var a = yield o++;
    console.log('a = ' + a);
    var b = yield o++;
}
var gen = g();

console.log(gen.next());
console.log('------');
console.log(gen.next(11));
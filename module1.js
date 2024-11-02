var counter = function (arr) {
    return "Thera are " +arr.length +' elements in this array'
}
var add = function (a,b) {
    return a+b
}
var sub = function (a,b) {
    return a-b
}
module.exports={
    counter: counter,
    add: add,
    sub:sub,
}
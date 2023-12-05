Array.prototype.myEach = function(callback){
    this.forEach(el => {console.log(callback(el))})
}
// console.log([1,2,3].myEach(el => {
//     return (el * 2)
// }))
// 
Array.prototype.myMap = function(callback){
    let arr= []
    this.myEach(el => {
        arr.push(callback(el))
    })
    return arr
}
// console.log([1,2,3].myMap(el => el * 2))

Array.prototype.myReduce= function(callback, initialValue = this[0]){
    let sum = initialValue 
    this.forEach(el =>
        sum = callback(sum, el))
        if (initialValue === this[0])
            {sum -= this[0]}
        
    return sum 
}
// console.log([1, 2, 3].myReduce(function(acc, el) {
//     return acc + el;
//   }, 25))
//   console.log([1, 2, 3].myReduce(function(acc, el) {
//     return acc + el;
//   }))
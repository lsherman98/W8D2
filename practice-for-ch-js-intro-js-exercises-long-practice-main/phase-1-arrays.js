Array.prototype.uniq = function() {
    let unique = []
    this.forEach(el => {
        if (!unique.includes(el)){
            unique.push(el)
        }
    })
    return unique
}


Array.prototype.twoSum = function() {
    let arr = [] 
    for (let i = 0; i < this.length; i++) {
         for (let j = i + 1; j < this.length; j++){
            if (this[i] + this[j] === 0 ){
                arr.push([i, j])
            }
        }
    }
    return arr
}
Array.prototype.transpose = function(){
    let transpose = [[0, 1, 2], [3, 4, 5], [6, 7, 8]]
    for (let row = 0; row < this.length; row++){
        for(let col = 0; col < this.length; col++){
            transpose[row][col] = this[col][row]
         }
    }
    return transpose
}
console.log([[0, 1, 2], [3, 4, 5], [6, 7, 8]].transpose())
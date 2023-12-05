// Your code here
function range(start, end){
    let arr = [start]
   if (start === end)
   { return arr }
    return arr.concat(range(start + 1, end))
}

function sumRecc(arr){
    if (arr.length === 1) 
        {return arr[0]}
    return arr[0] + sumRecc(arr.slice(1))
}
function exponent(base, exp){
    if (exp === 0 ){
        return 1
    }
    return base * exponent(base, exp - 1)
}
function exponent2(base, exp){
    if (exp === 0 ){
        return 1
    }
    else if (exp === 1){
        return base
    }

    if (base % 2 === 0){
        return exponent(base, exp/2) ** 2
    } else {
        return b * (exponent(base, (exp - 1) / 2) **2)
    }
}
//[0, 1,1,2,3,5,8]
function fibonacci(n){
    if (n === 0){
        return []
    }else if (n === 1){
        return [0]
    }else if (n === 2){
        return [0, 1]
    }
    let seq = fibonacci(n - 1)
    seq.push(seq[seq.length - 1] + seq[seq.length - 2])
    return seq
}

function deepDup(arr){
    let dup = []
    for(let i = 0; i < arr.length; i++){
        if (arr[i] instanceof Array){
           dup.push(deepDup(arr[i]))
        }else{
            dup.push(arr[i])
        }
    }
    return dup
}    

function bsearch(arr,target){
    if (arr.length === 0){
        return - 1
    }
    mid = arr.length / 2 
    if (arr[mid] === target){
        return mid
    }
    if(arr[mid] > target){
        let left = arr.slice(0, mid)
        return bsearch(left,target)
    }else{
       let right = arr.slice(mid + 1) 
       let res = bsearch(right, target)
        if (res === null){
            return null
        }else{
            return res + 1 + mid
        }
    }
}

console.log(bsearch([1,2,3,4,5,6], 1))
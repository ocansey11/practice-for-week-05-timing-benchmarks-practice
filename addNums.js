function addNums(n){

    let sum = 0
    for(let i = 0; i <= n; i++){
        sum += i
    }
    return sum
}

function addManyNums(n){
    let sum = 0
    for(let i = 0; i <= n; i++){
        sum += addNums(i)
    }
    return sum
}

module.exports = {
    addNums, addManyNums
}

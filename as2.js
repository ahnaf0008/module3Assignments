function findMaxNumber(arr){
    if(arr.length === 0){
        return null
    }else{
        return Math.max(...arr);
    }
}

const numbers1 = [10,20,5,30,25];
console.log(findMaxNumber(numbers1))

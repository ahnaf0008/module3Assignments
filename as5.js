function doubleNumbers(arr){


   const map = new Map;
   for(let i in arr){
       map.set(i,2*arr[i])
   }
    return Array.from(map.values());
   //console.log(map)
}


const numbers = [1,2,3,4,5];
console.log(doubleNumbers(numbers))

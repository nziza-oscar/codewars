function filterArray(array, testCallback) {
   
    return testCallback(array)
}


const result = filterArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10],(n)=>n.filter((eve)=>eve % 2 == 0))
console.log(result)
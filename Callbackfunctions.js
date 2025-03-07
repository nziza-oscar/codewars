function countWithDelay(callback) {
    let count = 0;
    function counterHelper(){
        count+=1;
        callback(count)
        if(count < 5){
            setTimeout(counterHelper,1000)
        }
    }
     
   counterHelper()
}


countWithDelay(displayResult);

function displayResult(result){
    console.log(result)
}
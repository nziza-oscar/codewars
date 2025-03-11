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

function formatName(firstName, lastName, callback) {
    return callback(firstName,lastName)
}

const fullName = (fname,lname)=>console.log(`${fname} ${lname}`);
const upperCased = (fname,lname)=> console.log(`${String(lname).toUpperCase()} ${fname}`);
const initials = (fname,lname)=> console.log(`${String(lname).charAt(0).toUpperCase()}. ${fname}`)
formatName("John", "Doe", fullName);
formatName("John", "Doe", upperCased);
formatName("John", "Doe", initials);



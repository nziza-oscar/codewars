const randomPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
    Math.random() > 0.5 ? resolve("Succes!") : reject("Failure!")
    },1000);
})

randomPromise.then((message)=>console.log(message))
                .catch((error)=>console.log(error))

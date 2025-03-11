function transformString(text, callback1, callback2) {
    const res = callback1(text)

    return callback2(res)
}

// Input: "hello world"
// Expected output with uppercase and reverse callbacks:
// "DLROW OLLEH"

function reverseString(n){
     let newString = "";
    for(let i=n.length; i>0;i--){
        newString+=n[i]
    }
    return newString
}
const result = transformString("hello world",(n)=>String(n).toUpperCase(),reverseString(n))

console.log(result)
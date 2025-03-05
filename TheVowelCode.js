function encode(string) {
    const encoders = ["a","e","i","o","u"]; // 1,2,3,4,5
    const extraction = string.split("").map((letter)=>(encoders.indexOf(letter) >= 0) ? encoders.indexOf(letter)+1: letter).join("")
    // console.log(extraction)
    return extraction;
  }
  
  function decode(string) {
    const vowels = ["a","e","i","o","u"]; 
    const decoded = string.split("").map((letter)=> !isNaN(Number(letter)) ? vowels[Number(letter)-1] : (letter == undefined ?" ":letter) ).join("")
    
    // console.log(decoded)
    return decoded;
}

const encoded = encode("nziza oscar");
const decoded = decode(encoded);


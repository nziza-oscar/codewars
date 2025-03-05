function encode(string) {
    const encoders = ["a","e","i","o","u"]; // 1,2,3,4,5
    const extraction = string.split("").map((letter)=>(encoders.indexOf(letter) >= 0) ? encoders.indexOf(letter)+1: letter).join("")
    // console.log(extraction)
    return extraction;
  }
  


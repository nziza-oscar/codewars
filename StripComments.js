function solution(text, markers) {

    const from = text.indexOf(markers[0])
    return text
    const to = text.indexOf("\n")
    const slices = String(text).slice (from,to)
    const replaced = String(text).replace(new RegExp(slices,"g"),"")
    const total =  text.indexOf("!")
    const sliceRest = String(text).slice(total,text.length)
    const finalResult = replaced.replace(new RegExp(sliceRest,"g"),"")

    return finalResult

    
  }

  var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"
console.log(result)
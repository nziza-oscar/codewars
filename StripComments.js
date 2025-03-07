function solution(text, markers) {
    if(markers.length == 0) return text;
    const from = text.indexOf(markers[0])
    const to = text.indexOf("\n")
    
    const slices = String(text).slice (from,to)
 
    const escapedSlices = slices.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const replaced = String(text).replace(new RegExp(escapedSlices,"g"),"")
    const total =  text.indexOf("!")
    if (total === -1) return replaced

    const extractMarker2 = String(text).slice(total)
    const escapedSlices2 = extractMarker2.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const finalResult = replaced.replace(new RegExp(escapedSlices2,"g"),"")

    return finalResult

    
  }

//   var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
const text = "aa bb cc  ", markers = [];
const result = solution(text,markers)
// result should == "apples, pears\ngrapes\nbananas"
console.log(result)







// function solution(text, markers) {
//     if (!markers.length) return text; // If no markers, return original text

//     const from = text.indexOf(markers[0]);
//     const to = text.indexOf("\n");

//     if (from === -1) return text; // If marker not found, return original text

//     const slices = text.slice(from, to !== -1 ? to : text.length);

//     // Escape special characters in slices before using in RegExp
//     const escapedSlices = slices.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');

//     const replaced = text.replace(new RegExp(escapedSlices, "g"), "");
//     const total = text.indexOf("!");

//     if (total === -1) return replaced; // If "!" not found, return replaced text

//     const sliceRest = text.slice(total);
//     const escapedSliceRest = sliceRest.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');

//     const finalResult = replaced.replace(new RegExp(escapedSliceRest, "g"), "");

//     return finalResult;
// }

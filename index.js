function goodVsEvil(good, evil){
    let goodSide = [1,2,3,3,4,10]
    let evilSide = [1,2,2,2,3,5,10]
    const sumGood = good.split(" ").map((d,i)=>Number(d) * goodSide[i]).reduce((acc,c)=>acc+c,0)
    const sumEvil = evil.split(" ").map((d,i)=>Number(d) * evilSide[i]).reduce((acc,c)=>acc+c,0)
   if(sumGood > sumEvil){
     return "Battle Result: Good triumphs over Evil"
   }
   else if(sumGood  < sumEvil){
     return "Battle Result: Evil eradicates all trace of Good"
   }
   else{
     return "Battle Result: No victor on this battle field";
   }
 }
 
const Good='1 0 0 0 1 0', Evil='0 0 0 0 0 1 0'
 const result = goodVsEvil(Good,Evil)
 console.log(result)
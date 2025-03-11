// Create a calculator function that takes two numbers and a callback. The callback should perform the mathematical operation.
function calculate(num1, num2, operationCallback) {
    
    return operationCallback(num1,num2)
}


let Addition  = calculate(23,20,(x,y)=>x+y);
let Multiplication = calculate(20,45,(x,y)=>x*y);
let Division = calculate(100,50,(x,y)=>x/y);
let sub = calculate(100,30,(x,y)=>x-y)
let mod = calculate(4,3,(x,y)=>x%y)

const result = {Addition,Multiplication,Division,sub,mod}
console.log(result)
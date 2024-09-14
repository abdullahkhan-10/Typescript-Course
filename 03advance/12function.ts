//  --------------------------- Return Type ---------------------
// The type of the value returned by the function can be explicitly/mean we should  defined.

// Return number
function multiplyTwo(num: number): number {
    return num * 5
    // return "Hey there"       // Error, Because we have explicitly define that function will return number.
}
multiplyTwo(10)

// Return string
function greeting(numm: number): string{
    return " Assalam o Alaikum"
    // return num1 + 10           // Error, because we have explicitly define that function will return string.
}
greeting(50)

// Two return, here we will use union type
function getValue(val: number): boolean | string{
    if(val > 5){
        return true
    }
    return "200 OK"
}

// Return with Arrow function
const getName = (name: string):string =>{
    return "Abdullah khan"
}

// Return with callback function.
const birds = ["Eagle", "pigeon", "parrot", "peaCock"]

// If no return type is defined, TypeScript will attempt to infer it through the types of the variables or expressions returned.
// birds.map( bird =>{
//     return `My birds are: ${bird}`
// })

birds.map( (bird):string =>{
    return `My birds are: ${bird}`
})


// ------------------- Void Return Type -------------------
// The type void can be used to indicate a function doesn't return any value.
function errorMessage(err: string): void{
    console.log(err);
}

// ----------------- never retrun type -----------------
// The function never return anything
function handleError(errMsg: string): never{
    throw new Error(errMsg)
}


// ----------------- Rest Parameters -----------------
// Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays.
function addNumber(num1: number, num2: number, ...num3: number[]){
    return num1 + num2 + num3.reduce( (a, b) => a + b, 0)
}

addNumber(10,10,10,10,10)
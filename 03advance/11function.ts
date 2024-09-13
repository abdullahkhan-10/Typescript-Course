// ------------------------------------ Typescript Functions ------------------------------------------
// TypeScript has a specific syntax for typing function parameters and return values.

// ----------- Parameters -------------
// Function parameters are typed with a similar syntax as variable declarations.
// parameter with type number
function addTwo(num: number){
    return num + 5
}
addTwo(10)

// parameter with type string
function getUpper(value: string){
    return value.toUpperCase()
}
getUpper("khan")


// ----------- Default Parameters -------------
// For parameters with default values, the default value goes after the type annotation:
function loginUser(name: string, email: string, isPaid: boolean = false){}

loginUser("Abdullah", "khan@gmail.com")

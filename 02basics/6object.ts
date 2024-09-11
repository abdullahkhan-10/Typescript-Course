//  -------------------------------------------- TypeScript Object Types ------------------------------------------
// TypeScript has a specific syntax for typing objects.

// -------------- Example ---------------
let user: {name:string, email:string, isPaid: boolean} = {name: "Khan", email: "khan@gmail.com", isPaid: true}


// -------------- Type Inference ---------------
// TypeScript can infer the types of properties based on their values.
let user1 = {
    name: "Abdullah"
}
user1.name = "khan"       // No Error
// user1.name = 2         // Error, Because, type 'number' is not assignable to type 'string'

// -------------- With Function ---------------
// In real world application we will actually dealing object with function, mean we will pass data in object to function as arguments and will accept as parameter

function createUser({name: string, isPaid: boolean}){}

//passed the object as argument to function according to defined types
createUser({name:"Abdullah", isPaid: true})


// when function return an object
function createCourse():{name: string, price: number}{
    return {name: "Typescript", price: 25000}
}
createCourse()


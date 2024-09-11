// ------------------------------------------------ TypeScript Tuples -----------------------------------------
// A tuple is a typed array with a pre-defined length and types for each index.
// Tuples are great because they allow each element in the array to be a known type of value.
// To define a tuple, specify the type of each element in the array:

// ----------------- Example -------------------
// Define the tuple 
let myTuple: [number, string, boolean] 

// Initialize correctly
myTuple = [21, "Abdullah", false]

// As you can see we have a number, boolean and a string. But what happens if we try to set them in the wrong order:
// myTuple = ["khan", 21, fale]     // Error

// Note. in tuple the order of the types (number, string, boolean) matter


// ----------------- Readonly Tuple -------------------
// A good practice is to make your tuple readonly.
// Tuples only have strongly defined types for the initial values:
// Example
let myTuple1: [number, boolean, string] 
myTuple1 = [11, true, "khan"]

// We have no type safety in our tuple for indexes, mean we can push/add anything to tuple at any index.
myTuple1.push( "Afridi")

// To avoid this and do not allow someone to add value to tuple at any index, we need to use (readonly) keyword before the defined types.
let myTuple2: readonly[number, boolean, string] = [11, true, "Abdullah"]

// myTuple2.push("Khan")         //Error

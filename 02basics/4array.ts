// ------------------------------------------------ Arrays ------------------------------------------
// TypeScript has a specific syntax for typing arrays.

// ---------- string array ---------------
const names: string[] = []
names.push["Abdullah khan"]    // No Error
// names.push(10)              Error, because we can not assign number value in string array.

// ---------- number array ---------------
const ids: number[] = []
ids.push(1)          // No Error
// ids.push("jan")   // Error

// ---------------- Type inference --------------
// TypeScript can infer the type of an array if it has values.
// Because typescript is smart enough that it automatically guess/infer and identify that it is the array of string or array of numbers.

const birds = ["Eagle", "Pigeon", "dov", "parrot"]
birds.push("peacock")      // No Error
// birds.push(10)          // Error

// when we hover over the const (age) it show that it is the array of numbers.
const age = [20, 30, 15, 25]
age.push(50)       // NO Error
// age.push("khan")   //Error 


// ------------- Readonly keyword ----------------
// The readonly keyword can prevent arrays from being changed.

const names1: readonly string[] = []
// names1.push("Afridi")      

// Error: Because Property 'push' does not exist on type 'readonly string[]'
// try removing the readonly modifier and see if it works?
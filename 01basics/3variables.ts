// --------------------------------------------- Special Types --------------------------------------------
// TypeScript has special types that may not refer to any specific type of data.

// ---------------- 1. Type: any ----------------
// any is a type that disables type checking and effectively allows all types to be used.
let name: any;
name = "khan"      // no error as it can be "any" type
name = 10          // no error as it can be "any" type

let myName;
// we can assign any type value to this variable, because it has type "any"
myName = "Abdullah"
myName = true

// ---------------- 2. Type: unknown ----------------
// unknown is a similar, but safer alternative to any.
// we are not sure what will be the value
let name1: unknown;
name1 = "khan"
name1 = 20

// unknown is best used when you don't know the type of data being typed. To add a type later, you'll need to cast it.

// ---------------- 3. Type: Never ----------------
// never effectively throws an error whenever it is defined.
// It mean that the function will not return anything ever
function consoleError(errMsg: string): never{
    throw new Error(errMsg)
}
consoleError("An Error occured")

// ---------------- 4. Type: Void ----------------
// It mean that the function does not return anything.
function greeting(): void{
    console.log("Hey");
}
greeting()


export {};

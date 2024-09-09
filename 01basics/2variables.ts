// -------------------------------------------- Simple Type --------------------------------------------------
// TypeScript supports some simple types (primitives) you may know.
// There are three main primitives in JavaScript and TypeScript
// boolean, number, string, bigint and symbol.

// -------------------------- Type Assignment ---------------------------
// When creating a variable, there are two main ways TypeScript assigns a type:

// ------- 1 Explicit type. --------
// when we declare a variable, we write the type as well , mean which type of data can be assign to this variable, for example if we have writen the type string, then we can only assign string data to this variabble. and same for other types as well, like number and boolean etc.

// String
let firstName: string = "Abdullah"
// now we can not assign number and bolean to it.
// firstName = 2
// firstname = true

// When writing the dot, we will get all the methods that can be apply on string.
firstName.toUpperCase()

// Number
let myAge: number = 22
// myAge = "22"
// myAge.toExponential()
console.log(myAge);

// boolean 
let isLoggedIn: boolean = false;

// ------- 2 Implicit Type. --------
// when we do not write type, then the typescript will guess the type based on the assigned value.
// The process is also called "type inference"
let lastName = "khan"
// lastName = 2              // Not allowed

// number
let userId = 21


// Note: Having TypeScript "guess" the type of a value is called infer

// ----------- Unable to Infer -------------
// TypeScript may not always properly infer/guess what the type of a variable may be. In such cases, it will set the type to any which disables type checking.
// we don't have to do this.
let fullName;
function getFullName(){
    return "Abdullah khan"
}

fullName = getFullName()

// the better way is to infered the type at the beginning.
let hero: string;
function getHero(){
    return "jacky Chain"
}
hero = getHero()

// to avoid the block scope variable error tempoprarily
export {}
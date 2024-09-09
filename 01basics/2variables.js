"use strict";
// -------------------------------------------- Simple Type --------------------------------------------------
// TypeScript supports some simple types (primitives) you may know.
// There are three main primitives in JavaScript and TypeScript
// boolean, number, string, bigint and symbol.
Object.defineProperty(exports, "__esModule", { value: true });
// -------------------------- Type Assignment ---------------------------
// When creating a variable, there are two main ways TypeScript assigns a type:
// ------- 1 Explicit type. --------
// when we declare a variable, we write the type as well , mean which type of data can be assign to this variable, foe example if we have write the type string, then we can only assign string data to this variabble. and sam efor other types as well, like number and boolean etc.
// String
var firstName = "Abdullah";
// now we can not assign number and bolean to it.
// firstName = 2
// When writing the dot, we will get all the methods that can be apply on string.
firstName.toUpperCase();
// Number
var myAge = 22;
// myAge = "22"
// myAge.toExponential()
console.log(myAge);
// boolean 
var isLoggedIn = false;
// ------- 2 Implicit Type. --------
// when we do not write type, then the typescript will guess the type based on the assigned value.
// The process is also called "type inference"
var lastName = "khan";
// lastName = 2              // Not allowed
// number
var userId = 21;
// Note: Having TypeScript "guess" the type of a value is called infer
// ----------- Unable to Infer -------------
// TypeScript may not always properly infer/guess what the type of a variable may be. In such cases, it will set the type to any which disables type checking.
// we don't have to do this.
var fullName;
function getFullName() {
    return "Abdullah khan";
}
fullName = getFullName();

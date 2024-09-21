// -------------------------------------- TypeScript Utility Types ---------------------------------------------
// TypeScript comes with a large number of types that can help with some common type manipulation, usually referred to as utility types.

// ------------- 1.Partial -----------------
// It changes all the properties in an object to be optional.
interface Boy{
    name: string,
    age: number
}
let myBoy: Partial<Boy> = {};              // `Partial` allows name and age to be optional



// ------------- 2.Required -----------------
// It changes all the properties in an object to be required.
interface Car{
    name: string,
    model: string,
    price?: number
}

let myCar: Required<Car> ={
    name: "Civic",
    model: "focus",
    price: 3200000
}


// ------------- 3.Record -----------------
// Record is a shortcut to defining an object type with a specific key type and value type.
const ourAges: Record<string, number> = {
    "abdullah": 22,
    "khan": 20,
    "ali": 18
}


// ------------- 4.Omit -----------------
// Omit removes keys from an object type.
interface Person{
    name: string,
    age: number,
    location: string
}

// `Omit` has removed age and location from the type and they can't be defined here
const Khan: Omit<Person, "age" | "location"> = {
    name: "khan",
    // age: 22            // Error, property does not exist, because we have omit it.
}


// ------------- 5.Pick -----------------
// Take the specific key and remove the rest of the keys.
interface Person1{
    name: string,
    age: number,
    location: string
}

const ali: Pick<Person1, "name"> = {
    name: "Ali",
    // age: 25         // Error, because we pick only one property and the rest are remove.
}


// ------------- 6.Exclude -----------------
// Exclude removes types from a union.

type primitiveType = string | number | boolean

// we can assign number and boolean.
const value: Exclude<primitiveType, string> = 10
const value1: Exclude<primitiveType, string> = true

// Type '"khan"' is not assignable to type 'number | boolean'. because we have excluded string.
// const value2: Exclude<primitiveType, string> = "khan"


// ------------- 7.ReturnType -----------------
// ReturnType extracts the return type of a function type.

type getValue = () => {val1: number, val2: number}

const values: ReturnType<getValue> = {
    val1: 10,
    val2: 20
}


// ------------- 8.Parameter -----------------
// Parameters extracts the parameter types of a function type as an array.
type getValue1 = ( param: {val1: number, val2: number}) => void

const values1: Parameters<getValue1>[0] = {
    val1: 50,
    val2: 70
}


// ------------- 9.Readonly -----------------
// Readonly is used to create a new type where all properties are readonly, meaning they cannot be modified once assigned a value.
interface Person2{
    name: string,
    age: number
}

const myPerson: Readonly<Person2> = {
    name: "Abdullah",
    age: 22
}

// Cannot assign to 'name' because it is a read-only property
// myPerson.name = "khan"             //Error
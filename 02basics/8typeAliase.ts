// ----------------------------------------- Type Aliases ---------------------------------------
// TypeScript allows types to be defined separately from the variables that use them.
// Type Aliases allow defining types with a custom name (an Alias).
// Type Aliases can be used for primitives like string or more complex types such as objects and arrays:
// With type aliases we can create our own custom type.

// we have created our own type , and when ever we want to use this, its properties will accept the following type mention in the type (Car).
type Car = {
    name: string,
    year: number,
    model: string,
}

// now we have created const myCar, and we want to set the type (Car) to (myCar). So we restrict the (myCar) const that it will only accept those property types that are mention in type (Car). 
const myCar: Car = {
    name: "Toyota",
    year: 2020,
    model: "Corolla"
}

// We can also set the type (Car) in function as well.
function getCar(newCar: Car): Car{
    return {name: "", year: 2021, model: ""}
}

getCar({name: "", year: 2021, model: ""})

// 1. In parameter newCar we set the type (Car), and in type (Car) we have the type of each property, so the parameter (newCar) will only accept that object whose properties are define according to the properties of type (Car)
// 2. The function aslo return the type (Car) thats why we mention the type for function as well.

// --------------- readonly keyword ---------------
type User = {
    readonly _id: number,
    name: string,
    email: string,
    isActive: boolean,
}

let myUser: User = {
    _id: 21,
    name: "Abdullah",
    email: "khan@gmail.com",
    isActive: true
}
// To update the prperty
myUser.email = "Abdullah@gmail.com"     // No Error
// myUser._id = 11    //Error: Can not assign to (_id) because it is a read-only property.

// --------------- Optional (?) ---------------
type User1 = {
    readonly _id: number,
    name: string,
    email: string,
    isActive: boolean,
    cardDetails?: number
}

let myUser1: User1 = {
    _id: 21,
    name: "Abdullah",
    email: "khan@gmail.com",
    isActive: true
}
// The question mark mean this property is optional, mean if some one provide it in (myUser1) or not, we will not get error.
// And all of the rest of the properties are compulsory, if some one don't provide it, we will get an error.

// --------------- Combining types ---------------
// Here we have less data in each type, but in real world working in big company on big project we will have large number of data in each type, so we can grouped them all in single type like we did here, and then pass that type  to any variabble, const, object and function.
type creditCardNumber = {
    cardNumber: number
}

type creditCardDate = {
    cardDate: string
}

// Here we mix and match the above two types
type cardDetails = creditCardNumber & creditCardDate & {
    cvv: number
}

let cardInformation: cardDetails = {
    cardNumber: 1234568,
    cardDate: "15 july 2002",
    cvv: 10
}
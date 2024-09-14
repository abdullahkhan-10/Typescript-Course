//  --------------------------------- Typescript Interfaces -----------------------------------------
// Interfaces are similar to type aliases, except they only apply to object types.
// In interfaces we can called functions as well.
interface User {
    readonly dbId: number,
    email: string,
    googleId?: string,
    // we call the function here, and we will define it when we create a variable or object, and this method should return string, because we mention type string here.
    // startTrail: ()=> string,
    startTrail(): string,              // more readable way

    // this  will return number, also send arguments, which will be string and number
    getCoupon(couponName: string, value: number): number
}

// Re-opening Interface
// let suppose we missed some property above, and don't want to make change in above interface, then we can re-open it as well, and add our required property.
interface User{
    githubeAccount: string,
}


// create variable (abdullah) and set the interface (User) to it.
let abdullah: User = {
    dbId: 11,
    email: "khan$gmail.com",
    githubeAccount: "abdullahkhan-10",

    // We will define functions here.
    startTrail: ()=>{
        return "Trial started"
    },
    getCoupon: (name: "abdullah10", off: 30) =>{
        return 100
    }
}
// this property can be change and update.
abdullah.email = "abdullah@gmail.com"

// The property with readonly keyword can not be change at any cost.
// abdullah.dbId = 100

console.log(abdullah.email);
console.log(abdullah.startTrail());


//  ------------------- Extending Interfaces -----------------
// Interfaces can extend each other's definition.
// Extending an interface means you are creating a new interface with the same properties as the original, plus something new.
interface Car {
    name: string,
    year: number
}

// so we  will have access of abaove two properties of (Car) in (coloredCar).
interface coloredCar extends Car{
    color: string,
}

let myColoredCar: coloredCar = {
    name: "Toyota",
    year: 2024,
    color: "White",
}

console.log(myColoredCar.name);
console.log(myColoredCar.color);

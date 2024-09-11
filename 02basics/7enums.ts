//  ----------------------------------------- TypeScript Enums -------------------------------------
// An enum is a special "class" that represents a group of constants (unchangeable variables).
// Enums come in two flavors string and numeric. Lets start with numeric.

// ---------------- 1. Numeric Enums ------------------
// Instead of writing all constant like this, we can grouped them in special class called (enum)
// const North = 0
// const East = 1
// const South = 2
// const West = 3 

// By default, enums will initialize the first value to 0 and add 1 to each additional value:
// The const will help to not generate large code when converting typscript file into javascript file.
const enum cardinalDirections{
    North,
    East,
    South,
    West,
}

let currentDirection = cardinalDirections.North
let anotherDirection = cardinalDirections.East
// It will log 0 
console.log(currentDirection);

// it will log 1
console.log(anotherDirection);


// ------ Initialized --------
// You can set the value of the first numeric enum and have it auto increment from that:
// For this enum large code will generated when converting the file into javascript file, because we have not use the keyword const at the start here.
enum cardinalDirections1{
    North = 1,
    East,
    South,
    West,
}
// It will log 1
console.log(cardinalDirections1.North);

// It will log 4
console.log(cardinalDirections1.West);

// ------- Fully Initialized ---------
// You can assign unique number values for each enum value. Then the values will not incremented automatically:
const enum statusCode{
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}

// It will log 404
console.log(statusCode.NotFound);

// It will log 202
console.log(statusCode.Accepted);

// ---------------- 2. String Enums ------------------
// Enums can also contain strings. This is more common than numeric enums, because of their readability and intent.
const enum cardinalDirections2{
    North = "North",
    East = "East",
    South = "South",
    West = "West"
}

// It will log North
console.log(cardinalDirections2.North);

// it will log South
console.log(cardinalDirections2.South);


// Note. Technically, you can mix and match string and numeric enum values, but it is recommended not to do so.
const enum cardinalDirections3{
    North = "North",
    East = 100,
    South = "South",
    West = 50
}
console.log(cardinalDirections3.South);


export {}
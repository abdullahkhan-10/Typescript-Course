// --------------------------------------- Union Types -----------------------------------------
// Union types are used when a value can be more than a single type.
// Such as when a property would be string or number.

// ---------------- OR ( | ) ---------------
// The pipe sign mean we can  set the type number and string to variable (score)
let score: number | string = 22

// So to variable (score) we can assign number value as well as string value.
score = 10
score = "10"

// ----------- union with Type Aliases ----------------
type User ={
    name: string,
    id: number
}

type Admin ={
    userName: string,
    email: string
    id: number
}

// abdullah can get the type (User) as well as type (Admin)
let abdullah: User | Admin = {name: "Abdullah", id: 44}

abdullah = {userName: "abdullah", email: "khan@gmai.com", id: 10}

// ----------- union with function ----------------
// To get id from database, it is sometime a type number and sometime a type string 
function getId(dbId: number | string){
    console.log(`Id is: ${dbId}` );
    // dbId.toUpperCase()         // It will throw an error, so we will solve this below
}
getId(15)
getId("15")

// If we want to further manipulate with the id we will get error in above code, So we need to do some logic to eliminate the error.
function getId1(dbId: number | string){
    if (typeof dbId === "string"){
        dbId.toLocaleUpperCase()      // this time no error
    }else{
        dbId + 2
    }
}
getId(10)
getId("khan")

// ----------- union with Array ----------------
const data: number[] = [1,2,3,]
const data1: string[] = ["1","2","3",]

// array of numbers and string
// To have an array of mix types we need to surround the types with parenthesis.
const data2: (number | string | boolean)[] = [1, 2, 3, "khan", "10", true]


export {}
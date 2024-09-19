// ----------------------------------------- Narrowing -----------------------------------------

function detectType(val: number | string){
    if (typeof val === "string") {
        return val.toLocaleLowerCase
    }
    return val + 10
}
// if we pass string arument to function then (val) will be act as type string, and will execute the code inside if statement
detectType("Abdullah")

//  if we pass (number) as argument then (val) will act as  type number, and will execute code outside if statement.
// detectType(10)

// The (null) keyword
// ----------------------------------------- Narrowing -----------------------------------------

function detectType(val: number | string){
    if (typeof val === "string") {
        return val.toLowerCase()
    }
    return val + 10
}
// if we pass string arument to function then (val) will be act as type string, and will execute the code inside if statement
detectType("Abdullah")

//  if we pass (number) as argument then (val) will act as  type number, and will execute code outside if statement.
// detectType(10)

// ------------ null keyword ----------------
// The (null) keyword is used for caution, and we will do quite alot of time in regular code.
// the null works in case if some do not pass any string value.
function provideId(id: string | null){
    if(!id){
        console.log("Please provide id");
        return
    }
    id.toUpperCase()
}
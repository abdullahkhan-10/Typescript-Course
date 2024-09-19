// ----------------------------------------- Narrowing -----------------------------------------
// To specify the type

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
// The (null) keyword is used for caution, and we will use quite alot of time in regular code.
// the null keyword works in case if some one do not pass any string value.

function provideId(id: string | null){
    // if someone do not pass an id execute code insie if statement.
    if(!id){
        console.log("Please provide id");
        return
    }

    // if some one pass id the do this.
    id.toUpperCase()
}


// ------------ The in operaor ----------------
// It determining if an (interface) has a property with a name: the in operator. TypeScript takes this into account as a way to narrow down potential types.

interface User{
    name: string,
    email: string
    isLoggedIn: boolean
}

interface Admin{
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdminAccount(account: User | Admin){
    // The in operator check if the property is available in any interface, we will have the access of that interface in parameter (account). This how we can narrow down the type.
    if ("isAdmin" in account) {
        return account.isAdmin
    }

    // In this case we have access to interface (User).
    if ("isLoggedIn" in account) {
        return account.isLoggedIn
    }
}

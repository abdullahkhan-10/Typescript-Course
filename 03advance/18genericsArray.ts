// ----------------------------------------- Generics Array ----------------------------------------

// In generics we can also set type array as well.
// This function take an argument which is type array, and it will return one of the value of array at index 3.
function searchProducts<T>(products: T[]): T{
    return products[3]
}

searchProducts(["khan", "jan", "ali", "Abdullah"])


// -------------- Arrow Function ------------------
// To define the exact same above function as arrow function.
// The syntax ( <T,> ) is to differiante the (generics) from (jsx) syntax or (html) tags 
function searchProducts1<T,>(products: T[]): T{
    return products[2]
}
searchProducts1(["khan", "jan", "ali", "Abdullah"])

export {}
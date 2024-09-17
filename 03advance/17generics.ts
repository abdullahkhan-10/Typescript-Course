// -------------------------------------- TypeScript Basic Generics ------------------------------------------
// Generics allow creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use.
// Generics makes it easier to write reusable code.

// Without generics we have to explicitly tell what type of argumet the function will get, and what type value the function will return


// 1. In this case function is not sure what argument to get, and what value to return, we will need to do if else to get required argument and return value. But we can do better with generics
function identityOne(val: number | boolean): number | boolean{
    return val
}

// 2. we can use the keyword (any) to solve this, but this is not a good practice. because with (any) if we pass an arguments number and the function return string, it will not gave us error, wich it should gave us an error.
function identityTwo(val: any): any{
    return val
}

// 3. so we will use generics which is like keyword (any) but a better way to solve the above two problems.
// the generic is like (any) mean that it can take what ever argument you pass or what ever you return either number or string it will lock that value.
// let suppose we pass the argument type (number) then the return type of function will automatically become a number. and this is the beauty of generics. 
// <Type> this syntax is used for generics
function identityThree<Type>(val: Type):Type{
    return val
}
// In this case the argument is number, so the return type will automatically be type number.
identityThree(10)
// In this case the argument is string, so the return type will automatically be type string.
identityThree("Abdullah")


// ----------------------- Convenient way ---------------------
// 4. Most people define it/generics with shortcut, both definition are fine.
function identityFour<T>(val: T): T{
    return val
}
identityFour(true)

// Also another advantage of generic is that we can define our own type and can pass on as an argument to function.
interface Ball{
    brand: string
    quantity: number
}

// We will use this syntax to pass our new created type as an argument to function.
identityFour<Ball>({
    brand: "Adidas",
    quantity: 100
})
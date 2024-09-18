// ------------------------------- Ggenerics Classes ------------------------------------
// Generics can be used to create generalized classes,

// It is a generics class, which we will use to put data into (myCart) array.
class addProducts<T>{
    public myCart: T[] = []

    // when the object is created for this class, and argument that is passed to class, will be get in parameter (cart) which will be an array of string,
    // And then we assign this (cart) array of string to our variable (myCart) that we have defined in the class.
    constructor(cart: T[]){
        this.myCart = cart
    }

    // With this method we add new elements to array (myCart).
    // we access the that element (sparrow) as parameter.
    addToCart(product: T){
        // From here we add the new element to our original array (myCart).
        this.myCart.push(product)
    }
}
const cartProducts = new addProducts(["Pigeon", "Eagle", "PeaCock"])

// we will add new element to array (myCart) through method (addToCart).
// we pass element (sparrow) to addToCart method as argument.
cartProducts.addToCart("Sparrow");

// Error, Argument of type 'number' is not assignable to parameter of type 'string'
// cartProducts.addToCart(10);

console.log(cartProducts);


// ------------------------------- Generics Extends ------------------------------------
// Constraints can be added to generics to limit what's allowed. The constraints make it possible to rely on a more specific type when using the generic type.

// We can add multiple input as well to generics.
// when we extend (U) to number, then we expect an argument number to (val2), if we pass string to val2 we will get error.

// If we add another input to generics, which is a type of object, then we will need to add another argument to function, which will be object.
interface Person{
    name: string,
    email: string,
}

// The function return an object
function getValue<T,U extends number, Z extends Person>(val1: T, val2: U, val3: Z): {}{          
    return{
        val1,
        val2,
        val3,
    }
}

getValue(10, 15, {name: "khan", email: "khan@khan.com"})



export {}
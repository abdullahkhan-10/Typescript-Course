// ---------------------------------------- instanceof narrowing ----------------------------------------------
// JavaScript has an operator for checking whether or not a value is an “instance” of another value. it is mostly use with values that can be constructed with new keyword.
// In typescript we check if x is available in Date or not, 

function logValue(x: Date | string) {
    if (x instanceof Date) {
        // log date
      console.log(x.toUTCString());
                
    } else {
        // log string
      console.log(x.toUpperCase());
    }
}

// -------------------------------- Type Predicate -----------------------------------
// Sometimes we want more direct control over how types change throughout our code.
// To define a user-defined type, we simply need to define a function whose return type is a type predicate:

type Fish = {
    swim: ()=> void
}

type Bird = {
    fly: () => void
}

// the (pet is Fish) syntax is type predicate.
function isFish(pet: Fish | Bird): pet is Fish{
    return (pet as Fish).swim !== undefined
}

// We still don't know whether the pet is type Fish or type Bird, To exactly know we need to explicitly return (pet is Fish) from the function (isFish)
function getFood(pet: Fish | Bird){
    if (isFish(pet)) {            
        pet                   // now the pet will have type Fish
        return "fish food"
    }else{
        pet 
        return "bird food"
    }
}
// ------------------------------------------ Typescript Classes ----------------------------------------
// TypeScript adds types and visibility modifiers to JavaScript classes.

class User{
    myName: string
    myEmail: string

    // If we want to add another variable, and we are not defining and accessing it's value in constructor, then we can directly assign value to it.
    myCity: string = "peshawar"
    constructor(name: string, email: string){
        this.myName = name
        this.myEmail = email
    }
}

const abdullah = new User("abdullah", "khan@gmail.com")

// abdullah.myCity = 2             //Error
abdullah.myCity = "Jamrud"         //To update the city.

// ----------------------------------- Visibility Modifiers -------------------------------
// There are three main visibility modifiers in TypeScript.
// public - It is (default), And allows access to the class member from anywhere
// private - only allows access to the class member from within the class
// protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below

class User1{
    public myName: string                  // define the property
    private myEmail: string
    readonly myCity: string = "peshawar"
    constructor(name: string, email: string){
        this.myName = name                         // assign value
        this.myEmail = email
    }
}
const abdullah1 = new User1("abdullah", "khan@gmail.com")

// we can access this everywhere because it is public property, all the properties of classes are (public by default)
abdullah1.myName

// Error, Because Property 'myEmail' is private and only accessible within class 'User1'
// abdullah1.myEmail

// Error, Because Cannot assign to 'myCity' because it is a read-only property
// abdullah1.myCity = "jamrud"

// -------------------------- Parameter Properties --------------------------
// TypeScript provides a convenient way to define class members in the constructor, by adding a visibility modifiers to the parameter.
// Experiance programmer write classes in typescript short to avoid (this dot).
class User2{

    readonly myCity: string = "peshawar"
    constructor(
        public name: string,            // This syntax will define and assign value to (name), thanks to modifiers.
        private email: string
    ){
    }
}
const abdullah2 = new User2("abdullah", "khan@gmail.com")



export {}
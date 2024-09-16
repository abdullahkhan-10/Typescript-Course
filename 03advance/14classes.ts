// ------------------------------- getter and setter ------------------------------------

class User3{
    private _courseCount = 1
    protected myCity: string = "peshawar"
    public age: number = 22

    constructor(
        private name: string,            
        public email: string
    ){
    }

    // ---------- getter ------------
    // getter method is used to get value, let suppose to get email
    // getter allways return a value.
    get getEmail(): string{
        return `Your : ${this.email}`
    }

    // getter  is also used to expose and make accessable the private property to outside from the class
    get courseCount(): number{
        return this._courseCount
    }

    // ---------- Setter ------------
    // It is used to set the value
    // The setter do not return anything, that's we are not explicitly mentioning the type.
    set myCount(courseNumber: number){
        if (courseNumber <= 1) {
            throw new Error("Course count should be more than 1")
        }
        // update the variable (_courseCount) value with the number we have access in parameter(courseNumber) when called/envoked the method.
        this._courseCount = courseNumber
    }
}
const abdullah3 = new User3("abdullah", "khan@gmail.com")

// 'myCity' is protected and only accessible within class 'User3' and its subclasses.
// abdullah3.myCity

abdullah3.getEmail
abdullah3.courseCount

abdullah3.myCount

// ------------------------------- Inheretence & protected ------------------------------------
// When we use the keyword (protected) with any property, then we can access that property within the same class as well within another class which inheret the parent class. and still we can not access outside both classes like (private).
// Now in the (SubUser) class we will access to all the properties and methods of class(User3) except the property with (private) keyword
class SubUser extends User3{
    isAvailable: boolean = true
    changeCityName(){
        // Error, because '_courseCount' is private and only accessible within class 'User3'
        // this._courseCount         

        // We can access and update the property with keyword (protected)
        this.myCity = "Jamrud"
    }
}

const newPerson = new SubUser("khan", "khan@gmail.com")

// own property and method of class (SubUser).
newPerson.changeCityName
newPerson.isAvailable

// property and method from class (User3)
newPerson.age
newPerson.getEmail

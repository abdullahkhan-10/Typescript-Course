// ------------------------------------------ Typescript Classes ------------------------------------
// TypeScript adds types and visibility modifiers to JavaScript classes.
var User = /** @class */ (function () {
    function User(name, email) {
        // If we want to add aanother variable, and we are not defining and accessing it's value in constructor, then we can directly assign valu to it.
        this.myCity = "peshawar";
        this.myName = name;
        this.myEmail = email;
    }
    return User;
}());
var abdullah = new User("abdullah", "khan@gmail.com");
// abdullah.myCity = 2             //Error
abdullah.myCity = "Jamrud"; //To update the city.

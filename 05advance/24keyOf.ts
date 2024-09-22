// --------------------------------------------- Typescript KeyOf ---------------------------------------
// keyof is a keyword in TypeScript which is used to extract the key type from an object type.

// ------------- keyOf with explicit key -------------
// When used on an object type with explicit keys, keyof creates a union type with those keys.

// 1
const myPerson = {
    name: "Abdullah",
    age: 22,
    // 3. let  suppose i want to add another property, I have to add this propert explicitly in type (Person) and in function parameter (property) as well
    email: "khan@khan.com",
    hobby: "Building startup"
}

// 2
// we will define type for the object
// type Person = {
//     name: string,
//     age: number
//     email: string
// }

// 4. to add properties dynamically to object, we need to assign the (typeOf) object (myPerson) to type (Person)
type Person = typeof myPerson

// 5. we also need to dynamically add the properties as well to parameter (property), we will use the keyword (keyOf) here.
type Key = keyof typeof myPerson

function getProperties(obj: Person, property: Key){
    return obj[property]
}

// we simply pass the above object as parameter to function.
getProperties(myPerson, "name")
getProperties(myPerson, "age")

// Error, because we have not define this property in object.
// getProperties(myePrson, "city")


// ------------------------------ dynamic function -------------------------------
// We also want the function to dynamically handle the type as well take other objects as well, don't stick to one object.

const myPerson1 = {
    name: "Abdullah",
    age: 22,
    email: "khan@khan.com",
}

// Another object
const myDetails = {
   userName: "Abdullah",
   city: "Peshawar",
   education: "Bachelor"
}

// So we will make it generics.
function getProperties1<T, K extends keyof T>(obj: T, property: K){
    return obj[property]
}

// we simply pass the above object as parameter to function.
getProperties1(myDetails, "userName")
getProperties1(myDetails, "city")

// Error, because property (age) is not define in object (myDetails)
// getProperties1(myDetails, "age")

// Note. Now it will handle the object as well as its type, and the function is ready for any object to return its type and handle them dynamically.
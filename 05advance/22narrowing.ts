// ----------------------------------------- Discriminated Union ------------------------------------
// We will use a field called (kind) to tell which shape we are dealing with.

interface Circle{
    kind: "circle",
    radius: number
}

interface Square{
    kind: "square",
    side: number
}

interface Rectangle{
    kind: "rectangle",
    length: number,
    width: number
}

// Notice we are using a union of  interface: (Circle and Square) to tell us whether we should treat the shape as a circle or square respectively
type Shape = Circle | Square | Rectangle

function handleShape(shape: Shape){
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2
    }
    // return shape.side * shape.side
}

// The never type is assignable to every type; however, no type is assignable to never (except never itself). This means you can use narrowing and rely on never turning up to do exhaustive checking in a switch statement.
// For example, adding a default to our (getArea) function which tries to assign the shape to never will not raise an error when every possible case has been handled.

function getArea(shape: Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius ** 2
        case "square":
            return shape.side * shape.side
        case "rectangle":
            return shape.length * shape.width
        
        default:
        const _defaultShape: never = shape
        return _defaultShape
    }
}
// Note. if we add any thing(interface Rectangle) to type (Shape) and we have not handle in switch case than (default) exhaustive check will throw us an error, which is good because it make us aware that we have not handle that interface in our sitch cases yet.
// But if we handle that interface (Rectangle) in our swith case then defualt will not throw an error.
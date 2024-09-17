// ------------------------------------------ Abstract Classes -------------------------------------
// Classes can be written in a way that allows them to be used as a base class for other classes without having to implement all the members. This is done by using the abstract keyword. Members that are left unimplemented also use the abstract keyword.

abstract class TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getEmail(): void
    getRealInfo(): number{
        return 20
    }
}
// Error, because We Cannot create an instance of an abstract class (TakePhoto).
// const khan = new TakePhoto("test", "test")

// Another class (Facebook) can use the class (TakePhoto) as base class. and inheret all its properties and method
// The class (Facebook) is derived class.
class Facebook extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public photoNumber: number
    ){
       // Constructors for derived classes must contain a 'super' call.
       // we just need to pass only those properties to (super) method that are define in base class (TakePhoto)
       super(cameraMode, filter)
    }

    getEmail(): void {
        console.log("Email address");
        
    }
}

// But we can create instance of the inhereted class (Facebook), And this is the main point of (abstract class), that we can not create its instance directly, we first need to inheret it to another class, and then we can create instance of the inhereted class (Facebook), 

const Abdullah = new Facebook("test", "test", 10)
Abdullah.getEmail()
Abdullah.getRealInfo()
// -------------------------------------- Implements -----------------------------------
// Interfaces can be used to define the type, and a class must follow the type through the implements keyword.
interface takePhoto{
    cameraMode: string
    filter: string
    photoNumber: number
}

// Now the class (Abdullah) must follow the type of all the properties that define in interface(takePhoto).
class Abdullah implements takePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public photoNumber: number,
        public short: string           
        // we can have more  properties than (interface), but can not have less prperties than interface, because we will come across Error.
    ){}
}

interface story{
    createStory(): string
}

// We can implements the same interface (takePhoto) to another class (Afridi) as well.
// Also a class can implement multiple interfaces (takePhoto, story) by listing each one after,
class Afridi implements takePhoto, story{
    constructor(
        public cameraMode: string,
        public filter: string,
        public photoNumber: number
    ){}

    createStory(): string {
        return "Story was created"
    }
}
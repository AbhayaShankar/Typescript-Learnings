abstract class TakePhoto2{
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia() : void

    getReelTime(): number {
        // some complex logic and calc
        const num = Math.round(Math.random() * 10000)
        return num
    }
}

// We cannot create/instantiate an object of an abstract class. We can only do that by the children of  abstract class which is not abstract.
// const abshan = new TakePhoto("test", "test")

class Insta extends TakePhoto2{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burstMode: number
    ){
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log("Sepia");
    }
    
}
    
// This is valid because Insta is a child of TakePhoto which is abstract.
const abshan = new Insta("test", "test", 5)
abshan.getReelTime()
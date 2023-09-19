"use strict";
class TakePhoto2 {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        // some complex logic and calc
        const num = Math.round(Math.random() * 10000);
        return num;
    }
}
// We cannot create/instantiate an object of an abstract class. We can only do that by the children of  abstract class which is not abstract.
// const abshan = new TakePhoto("test", "test")
class Insta extends TakePhoto2 {
    constructor(cameraMode, filter, burstMode) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burstMode = burstMode;
    }
    getSepia() {
        console.log("Sepia");
    }
}
// This is valid because Insta is a child of TakePhoto which is abstract.
const abshan = new Insta("test", "test", 5);
abshan.getReelTime();

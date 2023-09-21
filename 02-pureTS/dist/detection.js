"use strict";
function detechType(val) {
    // checking for string type
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    // number type
    return val.toPrecision(3);
}
function provideID(id) {
    if (!id) {
        alert("Please Provide ID...");
        return;
    }
    return id.toLowerCase();
}
// TS Docs example:
function printAll(strs) {
    // here we dont check if the string value is "" - empty string.
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
// The in operator narrowing
function IsAdminAccount(account) {
    if ("IsAdmin" in account) {
        return account.IsAdmin;
    }
}
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "Fish Food";
    }
    pet;
    return "Bird Food";
}
function getAreaOfShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    else {
        // return shape.side ** 2;
    }
}
// Suppose in future we defined another shape - Triangle, Now this _exhaustiveCheckForShape will make sure that particular case is handled or it will throw back errors. 
function getShape(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side ** 2;
        case "rectangle":
            return shape.length * shape.breadth;
        default:
            const _exhaustiveCheckForShape = shape;
            return _exhaustiveCheckForShape;
    }
}

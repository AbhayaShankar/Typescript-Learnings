"use strict";
// A common Object.
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Abhaya",
    email: "shankar@gmail.com",
    isActive: true,
};
var createUser = function (_a) {
    var string = _a.name, boolean = _a.isPaid;
};
createUser({ name: "Abhaya", isPaid: true });
// What if a fucntion retruns an object - lets take a look on that:
// Now this fucntion ensures a return type to be a {} object and we must return a {...} else it will complain. This is so much better useCase of TS. It makes developer sure that its expecting a return type object and you must provide that... 
var newCourse = function () {
    return { courseName: "Typescript with hitesh", price: 1200 };
};
// Now instead of passing the whole object, we can pass-on the type of object which we require to reduce the complexity of code and achieve reusability as well. Whenever we require the object similar to this object, we can simply call this NewUser. Hope you got the gist of it.
var getUserDetails = function (user) {
    return { name: "", email: "", isPaid: true };
};
getUserDetails({ name: "", email: "", isPaid: true });

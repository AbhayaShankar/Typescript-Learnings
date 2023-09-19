"use strict";
class User {
    constructor(email, name) {
        this.city = "";
        this.email = email,
            this.name = name;
    }
}
// Another way of declaring class without using "this" key and also using less code
class User2 {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Bengaluru";
    }
    // We can also create private methods
    deleteToken() {
        console.log("Token Deleted");
    }
    // Getters and setters 
    get getCompanyEmail() {
        const date = new Date().toLocaleTimeString();
        console.log(date);
        return `${this.email}${date}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course Count should be greater than 1");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User2 {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 2;
    }
}
const abhaya = new User2("abhaya@gmail.com", "Abhaya");
// abhaya.city = "Dhanbad"
// abhaya.deleteToken()

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
function IsAdminAccount(account) {
    if ("IsAdmin" in account) {
        return account.IsAdmin;
    }
}

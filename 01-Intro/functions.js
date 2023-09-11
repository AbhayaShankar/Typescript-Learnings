"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwoNum(num1, num2) {
    return num1 + num2;
}
addTwoNum(78, 15);
// This is not allowed
// addTwoNum(78, "abhaya")
// Now to understand the main issue with any is simething like this
function addTwoNum2(num1, num2) {
    var result = num1 + num2;
    console.log(result);
    return result;
}
addTwoNum2("78", 15);
// addTwiNum has specified explicitly that return value should be number.
// But if any one value is any, the result becomes any and here we would get value "7815" which is not desirable.
function getUpper(val) {
    console.log(val.toUpperCase());
    return val.toUpperCase();
}
getUpper("abhaya");
// Examples like these draw out the use cases of TS.
function SignUpUser(name, email, token, isPaid) {
}
SignUpUser("Abhaya", "shankarabhaya9@gmail.com", 123, true);
// How to pass on default value to the fucntion :
var loginUser = function (name, email, token, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("Abhaya", "a@gmail.com", 13);

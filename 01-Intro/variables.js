"use strict";
// Primitive Types : String, Number, Boolean
Object.defineProperty(exports, "__esModule", { value: true });
// How to define a type in Typesvript -` let variableName : type = Value `
// Remember types in TS are all in lowercase.
// 1. Strings: 
var greetings = "Hello World";
console.log(greetings);
// Throws error when declared a number for string tupe defined var.
// greetings = 12
// 2. Number - JavaScript does not have a special runtime value for integers, so there’s no equivalent to int or float - everything is simply number
// So number - type for all number tupes, may that be decimal, integer, whole, float values etc.
var num = 20;
var floatNum = 65764.65646;
floatNum.toFixed(2);
num.toFixed();
// 3. Boolean
var isLoggedin = false;
// Now you shouldn't be using these types when it is too obvious, dont make the use of it too redundant.
// ex: let num = 20; This too could have been just fine. Here TS is snart enough to recognise that this is a number tupe. So yes, its still a ts code.
// ANY - TypeScript also has a special type, any, that you can use whenever you don’t want a particular value to cause typechecking errors.
// let hero : string;
var hero;
function getHero() {
    return true;
}
hero = getHero();

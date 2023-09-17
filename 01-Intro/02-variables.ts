// Primitive Types : String, Number, Boolean

// How to define a type in Typesvript -` let variableName : type = Value `
// Remember types in TS are all in lowercase.

// 1. Strings: 

let greetings:string = "Hello World"

console.log(greetings);

// Throws error when declared a number for string tupe defined var.
// greetings = 12

// 2. Number - JavaScript does not have a special runtime value for integers, so there’s no equivalent to int or float - everything is simply number

// So number - type for all number tupes, may that be decimal, integer, whole, float values etc.

let num: number = 20;

let floatNum:number = 65764.65646

floatNum.toFixed(2)

num.toFixed();

// 3. Boolean

let isLoggedin:boolean = false

// Now you shouldn't be using these types when it is too obvious, dont make the use of it too redundant.


// ex: let num = 20; This too could have been just fine. Here TS is snart enough to recognise that this is a number tupe. So yes, its still a ts code.


// ANY - TypeScript also has a special type, any, that you can use whenever you don’t want a particular value to cause typechecking errors.

// let hero : string;
let hero : any;

function getHero(){
    return true
}

hero = getHero()

// So in these cases, I would not want that hero should be anyhting other than a String. So in these cases I shhould use hero: string. Such that TS knows that I am looking for String values and it will show me error whenever I am writing something wrong.

// From Docs - You usually want to avoid this, though, because any isn’t type-checked. Use the compiler flag noImplicitAny to flag any implicit any as an error.

export {}

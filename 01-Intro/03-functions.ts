function addTwoNum(num1: number, num2: number){
    return num1 + num2
}

addTwoNum(78, 15)

// This is not allowed
// addTwoNum(78, "abhaya")

// Now to understand the main issue with any is simething like this

function addTwoNum2(num1: any, num2: number){
    let result = num1 + num2
    console.log(result)
    return result;
}

addTwoNum2("78", 15);

// addTwiNum has specified explicitly that return value should be number.
// But if any one value is any, the result becomes any and here we would get value "7815" which is not desirable.


function getUpper(val: string){
    console.log(val.toUpperCase());
    return val.toUpperCase()
    
}

getUpper("abhaya")


// Examples like these draw out the use cases of TS.
function SignUpUser(name: string, email: string, token: number, isPaid: boolean){

}

SignUpUser("Abhaya", "shankarabhaya9@gmail.com", 123, true);

// How to pass on default value to the fucntion :
let loginUser = (name: string, email: string, token: number, isPaid: boolean = false) => {}

loginUser("Abhaya", "a@gmail.com", 13)

// Notice how we initialised the var and its corresponsing type and after that we passed on the false value to the isPaid variable. That way we implicitly told TS that if inccase we dont provide the value, you can take it as by default false.

// Lets take an example of first function and see what could go worng in that.

function addTwoNum3(num1: number, num2: number){
    // return num1 + num2;
    // I am allowed to return anything in this...
    return "Hello World";
}

addTwoNum3(5, 6);

// And this is entirely fine according to TS. Now this is not good, we would want only interger or numbers to return from this file, and this is not following our set of rules. Here we can add the return type value to ensure that.

function addTwoNum4(num1: number, num2: number) : number{
    return num1 + num2
    // return "Hello World"; This is not valid now beacuse the fucntion looks for a number type in the return type.
}

addTwoNum4(65, 28);

// Use case where we dont know what do we add in return type. 

function getVal(val : number){
    if (val > 27) {
        return true;
    }
    return "200 OK"
}

const  heros = ["Thor", "Ironman", "CapAmerica", "Spiderman"]

heros.map((hero) : string => {
    return `My Fav Hero is ${hero}`;
})

// Void - This we define when we are sure that the fucntion never returns a value but only testing purpose we have been using that.

const ConsoleErr = (errMsg : string): void => {
    console.log(errMsg);
    
}

// Never - The never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program.

function fail(msg: string): never {
    throw new Error(msg);
  }

export{}
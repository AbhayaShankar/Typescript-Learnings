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

export{}
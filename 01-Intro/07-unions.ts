let score: number | string = 33;

score = "Thirty"

score = 99

type Customer = {
    id: number
    name: string
    email: string
    isActive: boolean
}

type Admin = {
    id: number
    adminName: string
    adminEmail : string
    isActive: boolean
}

let Abhaya: Customer | Admin = {
    id: 123,
    name: "Abhaya",
    email :"shankar@gmail.com",
    isActive: true
}

Abhaya = {
    id: 123,
    adminName: "Abhaya Shankar",
    adminEmail: "shankarabhaya9@gmail.com",
    isActive: true
}

function getDbID(id: number | string){
    // making some API calls and logics
    console.log(`The DB ID is ${id}`);
    
}

getDbID(3)
getDbID("3")

// Typescript is smart enough to rule out the consitions and check whether the passed parameter is string or number

// This is called UNION NARROWING
function getDbID2(id: number | string){
    if (typeof id === "string") {
        id.toLowerCase()
    }else{
        id.toPrecision(2)
        
    }
}


// Arrays

const data : number[] = [1, 2, 3, 5]

const data2 : string[] = ["abhaya", "karuna", "sneha", "botho"]

const data3 : (string | number)[] = [1, "pallavi", "harshit"]



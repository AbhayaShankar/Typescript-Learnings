// A common Object.

const User = {
    name: "Abhaya",
    email: "shankar@gmail.com",
    isActive: true,
}

const createUser = ({name: string, isPaid: boolean}) => {

}

createUser({name: "Abhaya", isPaid: true})

// What if a fucntion retruns an object - lets take a look on that:

// Now this fucntion ensures a return type to be a {} object and we must return a {...} else it will complain. This is so much better useCase of TS. It makes developer sure that its expecting a return type object and you must provide that... 

const newCourse = (): {courseName: string, price: number} => {
    return {courseName: "Typescript with hitesh", price: 1200}
}

// Type Aliases :

type NewUser = {
    name: string;
    email: string;
    isPaid: boolean
}

// Now instead of passing the whole object, we can pass-on the type of object which we require to reduce the complexity of code and achieve reusability as well. Whenever we require the object similar to this object, we can simply call this NewUser. Hope you got the gist of it.
const getUserDetails = (user: NewUser): NewUser => {
    return {name: "", email: "", isPaid: true}
}

// How to use pre-defined Type by Type Aliases. 
const createUserCred = (user: NewUser) : NewUser => {
    return {
        name: "Abhaya",
        email: "shankar@gmail.com",
        isPaid: false
    }
}

getUserDetails({name: "", email: "",  isPaid: true})

// Another use case

type Coord = {
    x: number;
    y: number;
}

function PrintCoord(pt: Coord){
    console.log(`The x coord is: ${pt.x}`)
    console.log(`The y coord is: ${pt.y}`)
}

PrintCoord({x: 180, y:78})

export {}
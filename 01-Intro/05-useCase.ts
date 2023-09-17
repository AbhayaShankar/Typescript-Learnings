type User = {
    // Suppose you have id from mongodb which you dont want anyone to mess with - in that case you can use this keyword "readonly"
    readonly _id : string []
    name: string
    email: string
    isActive: boolean
    // Optional "?"
    credCard ?: number
}

let firstUser: User = {
    _id: ["123", "465"],
    name: "Abhaya",
    email: "shankar@gmail.com",
    isActive: true
}

firstUser.name = "Abhaya Shankar"

// This is not allowed - we cannot chnage due to the readonly property applied to this variable.
// firstUser._id = "56661"

// Question : If id would be array, can we push values into the array or not ?
// Answer Yes we can
firstUser._id.push("1651")
console.log(firstUser)


// Using types from prev defiend types : 


type cardDetails = {
    cardnumber : number
    cardname: string
    expirydate: number
    cvv : number
}

type purchaseDetails = {
    product : string[]
    price: number
    purchasedate: string
}

//combining the above two types for the required type.
type UserPurchaseDetails = cardDetails & purchaseDetails
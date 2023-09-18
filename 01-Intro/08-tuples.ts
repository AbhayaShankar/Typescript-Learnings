// Tuple types are a type of array of known length and where the different elements may have different types. A value of type [number, string] is guaranteed to have a length of 2, with a number at element 0 and a string at element 1.

let rgb : [number, number, number] = [255, 255, 255]

type TUser = [number, string]

const newUser : TUser = [1, "abhaya"]

newUser[1] = "abhaya_shankar"

// Ideally it shouldn't happen but this is one anamoly with arrays.
newUser.push("shanky")


// https://stackoverflow.com/questions/64069552/typescript-array-push-method-cant-catch-a-tuple-type-of-the-array

// A very nice article - give it a read for undertanding why this anamoly happenjs


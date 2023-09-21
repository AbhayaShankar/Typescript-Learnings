function detechType(val: number | string){
    // checking for string type
    if (typeof val === "string") {
        return val.toLowerCase()
    }
    // number type
    return val.toPrecision(3)
}

function provideID(id: string | null) {
    if(!id){
        alert("Please Provide ID...")
        return;
    }
    return id.toLowerCase()
}

// TS Docs example:
function printAll(strs: string | string[] | null) {
    // here we dont check if the string value is "" - empty string.
    if (strs) {
      if (typeof strs === "object") {
        for (const s of strs) {
          console.log(s);
        }
      } else if (typeof strs === "string") {
        console.log(strs);
      }
    }
  }

  interface User {
    name: string,
    email: string
  }

  interface Admin{
    name: string,
    email: string,
    isAdmin: boolean
  }

  // The in operator narrowing
  function IsAdminAccount(account: User | Admin){
    if("IsAdmin" in account){
        return account.IsAdmin
    }
  }

  function logValue(x: Date | string) {
    if (x instanceof Date) {
      console.log(x.toUTCString());
    } else {
      console.log(x.toUpperCase());
    }
  }

  // using Type predicates 

  type Fish = {swim() : void}
  type Bird = {fly() : void}

  function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
  }

  function getFood(pet: Fish | Bird){
    if (isFish(pet)) {
      pet
      return "Fish Food"
    }
    pet
    return "Bird Food"
  }

// Discriminative Unions

interface Circle {
  kind: "circle",
  radius: number
}

interface Square {
  kind: "square",
  side: number
}

interface Rectangle {
  kind: "rectangle",
  length: number,
  breadth: number
}

type Shape = Circle | Square | Rectangle

function getAreaOfShape(shape: Shape){
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
  else{
    // return shape.side ** 2;
  }
}

// Suppose in future we defined another shape - Triangle, Now this _exhaustiveCheckForShape will make sure that particular case is handled or it will throw back errors. 

function getShape(shape: Shape){
  switch(shape.kind){
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side ** 2;
    case "rectangle":
      return shape.length * shape.breadth; 
    default:
      const _exhaustiveCheckForShape : never = shape
      return _exhaustiveCheckForShape 
  }
}
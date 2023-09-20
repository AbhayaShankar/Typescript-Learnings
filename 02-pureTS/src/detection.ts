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

  function IsAdminAccount(account: User | Admin){
    if("IsAdmin" in account){
        return account.IsAdmin
    }
  }


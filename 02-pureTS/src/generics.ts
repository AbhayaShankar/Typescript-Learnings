const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number) : boolean | number{
    return val
}

function identitytwo(val: any) : any{
    return val
}

// Now this is different from any becuase in above fn we can pass val as a number but in return we can take or convert it to a string or a boolean. this is not desirable. Instead we can use this type keyword, where once an argument is passed, it remembers or locks in the type of the arg and make sure we return the same type.

function identity<type>(val: type) : type{
    return val
}

identity(6)
identity("6")
identity("abhaya")
identity(true)

// Another way of wriitng the above function
function identitythree<t>(val: t) : t {
    return val
}

interface Bottle {
    brand: string,
    type: number
}

identitythree<Bottle>({brand: "MuscleBlaze", type: 2})

function getProducts<T>(prod: T[]): T{
    // some database manipulations
    const index = 2;
    return prod[index]
}

// We use <T,> for generics to indicate thta it is not a html tag but a generic while using in recat or any other framework.
const getMoreProducts = <T,>(prod: T[]) : T[] => {
    // some calculations
    const firstIndex = 1;
    const lastIndex = 8;
    return prod.slice(firstIndex, lastIndex)
}

// Using Type Parameters in Generic Constraints
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key];
  }
   
  let x = { a: 1, b: 2, c: 3, d: 4 };
   
  getProperty(x, "a");
//   getProperty(x, "m");

interface Quiz {
    name: string,
    type: string
}

interface Course{
    name: string,
    subject: string,
    author: string,
    price: number
}

class Sellable<T>{
    public cart: T[] = [];

    addToCart(product: T){
        this.cart.push(product)
    }
}


interface IUser {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    // startTrial: () => string
    startTrial() : string,
    getCoupon(couponName: string, value: number) : number
}

// One major feature in Interfaces which we donot have in type aliases are that we can re-open the Interfaces to add new properties.

interface IUser {
    githubToken: string
}

// Interfaces are extendable.

interface Admin extends IUser {
    role : "admin" | "TA" | "student"
}

const abhaya : IUser = {
    dbId: 121 ,
    githubToken: "AbhayaSToken123",
    email: "shankar@gmail.com",
    userId: 1,
    startTrial : () => {
        return "start trial for user"
    },
    getCoupon: (coupon : "Abhaya10", discount: 10) => {
        return 10
    }
}

const Admin : Admin = {
    dbId: 1331 ,
    role: "admin",
    githubToken: "Shanky456",
    email: "abhaya@gmail.com",
    userId: 2,
    startTrial : () => {
        return "start trial for user"
    },
    getCoupon: (coupon : "Abhaya10", discount: 10) => {
        return 10
    }
}
class User {
    email: string
    name: string
    city: string = ""
    constructor(email: string, name: string){
        this.email = email,
        this.name = name
    }
}

// Another way of declaring class without using "this" key and also using less code
class User2 {
    protected _courseCount = 1
    readonly city: string = "Bengaluru"
    constructor(
        public email: string,
        public name: string,
        // private userId: number  
        ){
    }

    // We can also create private methods
    private deleteToken() {
        console.log("Token Deleted");
    }

    // Getters and setters 

    get getCompanyEmail() : string{
        const date = new Date().toLocaleTimeString()
        console.log(date);
        return `${this.email}${date}`
        
    }

    get courseCount() : number{
        return this._courseCount;
    }

    set courseCount(courseNum){
        if (courseNum <= 1) {
            throw new Error("Course Count should be greater than 1")
        }
        this._courseCount = courseNum
    }
}

class SubUser extends User2{
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount = 2
    }
}

const abhaya = new User2("abhaya@gmail.com", "Abhaya")
// abhaya.city = "Dhanbad"
// abhaya.deleteToken()
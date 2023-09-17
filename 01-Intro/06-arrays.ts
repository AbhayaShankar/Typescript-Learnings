const heros: string[] = []

heros.push("spiderman")
heros.push("hulk")
heros.push("batman")
heros.push("ironman")
heros.push("thor")

console.log(heros);

heros.pop()

console.log(heros);


type Users = {
    name: string
    isActive : boolean
}

const allUsers: Users[] = []

allUsers.push({
    name: "Abhaya",
    isActive: true
})

allUsers.push({
    name: "Pallavi",
    isActive: false
})

allUsers.push({
    name: "Botho",
    isActive: true
})

console.log(allUsers);


var firstUser = {
    _id: ["123", "465"],
    name: "Abhaya",
    email: "shankar@gmail.com",
    isActive: true
};
firstUser.name = "Abhaya Shankar";
// This is not allowed - we cannot chnage due to the readonly property applied to this variable.
// firstUser._id = "56661"
// Question : If id would be array, can we push values into the array or not ?
// Answer Yes we can
firstUser._id.push("1651");
console.log(firstUser);

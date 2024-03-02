const tinderUser = new Object()  //sinleton object
// const tinderUser = {}  // non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Rammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userName: {
            firstName: "Ashish",
            secondName: "Kumar",
            lastName: "Sahu"
        }
    }
}
// console.log(regularUser);
console.log(regularUser.fullName.userName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = Object.assign({}, obj1, obj2)  // {} it is a target object, new object is saved in {}
console.log(obj3);
const obj4 = {...obj1, ...obj2}
console.log(obj4);

// object in Array

const user = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "a@gmail.com"
    }
]
console.log(user[1]);
console.log(user[1].email);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
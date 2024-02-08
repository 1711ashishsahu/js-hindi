// Primitive Datatype
// 7 types: String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

// Reference Datatype (Non Primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "ashish",
    age: 22
}
const myFunction = function(){
    console.log("Hello World");
}
console.log(typeof outsideTemp);


//+++++++++++++++++++++++++++++++++++++++++++++
// Stack (Primitive), Heap (Non Primitive)

// Stack Example
let myYoutubename = "ashishsahudotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(anothername);
console.log(myYoutubename);

// Heap Example
let userOne = {
    email: "ashish123.com",
    upi: "user@ybl"
}
let userTwo = userOne
userTwo.email = "sahu456.com"

console.log(userOne.email);
console.log(userTwo.email);
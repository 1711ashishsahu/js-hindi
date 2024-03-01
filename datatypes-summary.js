// Primitive Datatype or stack memory
// 7 types: String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

// Reference Datatype (Non Primitive) or heap memory
// Array, Objects, Functions

//Array
const heros = ["shaktiman", "naagraj", "doga"];

//objects
let myObj = {
    name: "ashish",
    age: 22
}
console.log(myObj);

//function
const myFunction = function(){
    console.log("Hello World");
}
myFunction();

console.log(typeof outsideTemp);  // null is an object

// **********************************************
console.log("**********************************");
// Stack memory (Primitive), Heap memory (Non Primitive)

// Stack Example
let myYoutubename = "ashishsahudotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

// Heap Example
let userOne = {
    email: "ashish123.com",
    upi: "user@ybl"
}
console.log(userOne);
let userTwo = userOne
console.log(userTwo);
userTwo.email = "sahu456.com"

console.log(userTwo);
console.log(userOne);
console.log(userOne.email);
console.log(userTwo.email);
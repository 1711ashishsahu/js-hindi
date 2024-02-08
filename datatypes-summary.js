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
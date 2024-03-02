// singleton - Object.create()

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Ramesh",
    "full name": "Ashish Kumar Sahu",
    [mySym]: "mykey1",
    age: 23,
    location: "Angul",
    email: "ashish@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]);
console.log(JsUser);

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email = "hitesh@microsoft.com"
console.log(JsUser);

// ************************************

JsUser.greeting1 = function(){
    console.log("Hello Js user");
}
// console.log(JsUser.greeting1());
console.log(JsUser.greeting1); // o/p:- [Function (anonymous)]
console.log(JsUser.greeting1());
JsUser.greeting1()
// console.log(JsUser);

JsUser.greeting2 = function(){
    console.log(`Hello JS user, age is ${this.age}`);
}
// note:- (this) is used for taking reference from same object
JsUser.greeting1()
JsUser.greeting2()
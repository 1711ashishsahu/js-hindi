// use of this
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai = ()=>{
    let username = "hitesh"
    // console.log(this.username);
    console.log(this);
}
// chai()

// *************************
// use of arrow function

const addthree = (num1, num2)=>{
    return num1+num2
}
console.log(addthree(2, 3));

// implesit return
// const addfour = (num1, num2)=> num1+num2
const addfour = (num1, num2)=> (num1+num2)
console.log(addfour(1,9));

// return object

const addfive = (num1, num2)=>({username: "Ashish"})
console.log(addfive());


function sayMyName(){
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("S");
    console.log("H");
}
// sayMyName()

function addTwoNumbers(number1, number2){  // inside the bracket thing is parameter
    console.log(number1+number2);
}

addTwoNumbers(5, 5)  // here the thing inside the bracket is argument
addTwoNumbers(5, "5")
addTwoNumbers(3, "a")
addTwoNumbers(3, null)

function addTwoNums(num1, num2){
    let result = num1 + num2
    return result
    // return num1 + num2
}
const soln = addTwoNums(2, 8)

console.log("Result: ", soln);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("ramesh"));
console.log(loginUserMessage());

//*************************** 
// function with objects
console.log("************************");

function calculateCartPrice(val1, val2, ...numb1){
    return numb1
}
console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "rakesh",
    price: 299
}
function handleObject(anyobj){
    console.log(`Username is ${anyobj.username} and price is ${anyobj.price}`);
}
handleObject(user)
handleObject({
    username: "GamePlr",
    price: 499
})

const myNewArray = [200, 100, 900, 500]

function returnSecondValue(getArray){
    return getArray[2]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([1, 2, 3, 4]));
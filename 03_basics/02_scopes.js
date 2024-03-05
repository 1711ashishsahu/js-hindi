//Global scope and local/block scope
let a = 300

if(true){
    let a = 10
    const b = 20
    // console.log("Inner: ",a);
}
// console.log(a);
// console.log(b);

function one(){
    const username = "chandresh"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
one()

if (true){
    const username = "hitesh"
    if(username==="hitesh"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);  // doesn't work
}
// console.log(username);   // dosen't work

//*********************** interesting *****************

console.log(addone(5));
function addone(num){
    return num + 1
}

// console.log(addtwo(8));  this doesn't work
const addtwo = function(num){
    return num + 2
}

console.log(addtwo(8));
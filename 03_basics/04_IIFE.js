// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named IIFE
    console.log('DB CONNECTED');
})();

// chai()

// ()() ==> first bracket work as defination of function and the second bracket work as execution call


// Note:- (;) this is required to use at the end
/*
Defination:-
An IIFE (Immediately Invoked Function Expression) in JavaScript is a function that is defined and executed immediately after its creation. It is a common pattern used to encapsulate code, create private scopes, avoid variable hoisting issues, and isolate code execution. 
*/

( (name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
} )("hitesh")
// array

const myArr = [0, 1, 2, 3, 4, 5]
console.log(myArr[1]);

const myHeros = ["Rakesh", "Ramesh", "Rajesh"]
console.log(myHeros[2]);

const myArr2 = new Array(1,2,3,4,5)
console.log(myArr2[3]);

// Array methods

console.log(myArr2.push(9)); // shows index position of the added element
myArr2.push(11,10) // adds value in the last
myArr2.pop()  // removes last value
myArr2.unshift(144)  // adds value in the starting of the array
myArr2.shift()  // removes first value
console.log(myArr2.includes(10));
console.log(myArr2.includes(11)); //gives true or false
console.log(myArr2.indexOf(5));

console.log(myArr2);

const newArr = myArr2.join() //join converts the array into string

console.log(myArr2);
console.log(typeof newArr);  
console.log(newArr);

console.log("***************************");
// slice, splice

console.log("A", myArr2);

const myNArr1 = myArr2.slice(1, 3) // in this the first number is the index position of first number and the second number is the excluded given index number

console.log("sliced arr", myNArr1);
console.log("B", myArr2);

const myNArr2 = myArr2.splice(1, 3) // in this the first number is the index position of first number and the second number is the included given index number

console.log("spliced arr",myNArr2);
console.log("C", myArr2);

//note:- slice array don't changes the original array but splice array modify the original array
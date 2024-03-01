// ************Numbers*************
console.log("******Numbers******");

const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(typeof(balance.toString()));

console.log(balance.toFixed(2));

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-US'));
console.log(typeof (hundreds.toLocaleString()));

// *****************Maths**************
console.log("******Maths******");

console.log(Math);
console.log(Math.abs(-4));   // it turns the -ve value to +ve
console.log(typeof (Math.abs(-4)));  // #o/p - number
console.log(Math.round(123.456));
console.log(Math.round(123.4));
console.log(Math.round(123.6));
console.log(`Takes higher value ${Math.ceil(40.2)}`);
console.log(`Takes lower value ${Math.floor(40.8)}`);
console.log(Math.sqrt(9));
console.log(Math.min(4, 9, 1, 7));
console.log(Math.max(4, 9, 1, 7));

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

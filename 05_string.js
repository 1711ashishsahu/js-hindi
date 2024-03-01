const name = "Ashish"
const repoCount = 50

// console.log(name + repoCount + "value");

// string interpolation
console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);

const gameName = new String("Ashish-Aks");

console.log(typeof gameName);
console.log(typeof name);

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('h'));
console.log(gameName.substring(0,4));

const newString = gameName.substring(0,4)
console.log(newString);

console.log(gameName.slice(-7, 10));
const anotherString = gameName.slice(-7, 10)
console.log(anotherString);

const newStringOne = "     Ashish    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://ashish.com/ashish%20sahu"
console.log(url.replace('%20', ' '));
console.log(url.replace('%20', '='));

console.log(url.includes('Sundar'));
console.log(url.includes('ash'));

console.log(gameName.split('h'));
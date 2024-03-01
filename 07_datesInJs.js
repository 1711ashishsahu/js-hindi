let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());

console.log(typeof myDate);

let myCreatedDate = new Date(2023, 1, 23)
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleDateString());

let myCreatedDate1 = new Date("2023-01-14")
console.log(myCreatedDate1.toLocaleString());
let myCreatedDate2 = new Date("01-14-2023")
console.log(myCreatedDate2.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate2.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

console.log(newDate.toLocaleString('default', {
    weekday: "short"
    // weekday: "narrow"
    // weekday: "short"
}));
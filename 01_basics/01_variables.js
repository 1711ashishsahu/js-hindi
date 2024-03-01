const accountId = 144553
let accountEmail = "ashish@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
// accountId = 2   // not allowed
accountEmail = "ash@ish.com"
accountPassword = "09876"
accountCity = "Goa"
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
/*
Prefer not to use var because
of issue in block scope and functional scope
*/
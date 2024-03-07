//reduce function

// Example 1
const myNums = [1, 2, 3, 4, 5]

const myTotal = myNums.reduce(function (acc, currval){
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc+currval
}, 0)

console.log(myTotal);

// Example 2
const coding = ["js", "ruby", "java", "python", "cpp"]

const mycollection = coding.reduce(function (acc, currval){
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc+currval
}, )

console.log(mycollection);

// Example 3
const tenthNums = [10, 20, 30, 40]

const total = tenthNums.reduce((prevVal, curVal)=> prevVal +curVal, 0)
console.log(total);

// Example 4
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 4999
    },
    {
        itemName: "C course",
        price: 6999
    },
    {
        itemName: "Cpp course",
        price: 9999
    }
]
const totalPrice = shoppingCart.reduce((pvl, crvl)=>{
    return pvl + crvl.price
}, 0)

console.log(totalPrice);
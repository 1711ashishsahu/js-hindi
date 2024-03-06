// for 

for (let i = 1; i <= 10; i++) {
    const element = i;
    if(element == 5){
        // console.log("5 is best number");
    }
    // console.log(element);
    
}

// for loop inside for loop
for(let i = 0; i <= 10; i++){
    // console.log(`Outer loop value: ${i}`);
    for(let j = 0; j <= 10; j++){
        // console.log(`Inner loop value: ${j} and Outer loop: ${i}`);
    }
}


// multiplication table from 1 to 10
// for(let i = 1; i <= 10; i++){
//     console.log(`Table of: ${i}`);
//     for(let j = 1; j <= 10; j++){
//         console.log(`${i} X ${j} = ${i*j}`);
//     }
// }


let myArray = ["flash", "batman", "superman", "ironman", "spiderman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// break and continue


// break
// for(let x = 1; x <= 20; x++){
//     if(x == 5){
//         console.log(`Detected 5`);
//         break
//     }
//     console.log(`value of x is ${x}`);
// }


// continue
for(let x = 1; x <= 20; x++){
    if(x == 5){
        console.log(`Detected 5`);
        continue
    }
    console.log(`value of x is ${x}`);
}
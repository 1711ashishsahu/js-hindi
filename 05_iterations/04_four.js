// for in loop


// used for Object
const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}


for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}


const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key]);
}

//map
// const map = new Map()
// map.set("IN", "India")
// map.set("IN", "India")
// map.set("USA", "United State of America")
// map.set("FR", "France")

// for (const key in map) {
//     console.log(key);
// }
//note:- map doesn't work in for in

const marvel_heros = ["thor", "ironman", "spiderman"]

const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)  // Push
// console.log(marvel_heros);
// console.log(marvel_heros.length); // o/p:- 4
// console.log(marvel_heros[3][1]); // o/p:- flash

const all_heros = marvel_heros.concat(dc_heros)  //concat
console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros]  //spread
console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_another_array = another_array.flat(Infinity)
const real_another_array = another_array.flat(2)
console.log(real_another_array);

console.log(Array.isArray("Hitesh"));
console.log(Array.isArray(["Hitesh"]));
console.log(Array.from("Hitesh"));
console.log(Array.from({name: "Hitesh"})); // intresting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(score1, score2, score3);
console.log(Array.of(score1, score2, score3));
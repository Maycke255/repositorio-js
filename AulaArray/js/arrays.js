let exemplo = [10, 20, 30, 40, 50, 60, 70, 80];
console.log(exemplo);

let arrayConcat = [100, 200]
let arrayConcatString = [`Ludmila`, `corote`]

let push = exemplo.push(90);
console.log(push);

let unshift = exemplo.unshift(5);
console.log(unshift);

let pop = exemplo.pop();
console.log(pop);

let shift = exemplo.shift();
console.log(shift);

let includes = exemplo.includes(30);
console.log(includes);

let indexof = exemplo.indexOf(40);
console.log(indexof);

let slice = exemplo.slice(2, 5);
let slice2 = exemplo.slice(-4);
console.log(slice);
console.log(slice2);

let concat = exemplo.concat(arrayConcat, arrayConcatString)
console.log(concat)

let removeArray = concat.splice(10, 2, `Esse`, `e o splice`)
console.log(removeArray)
console.log(concat)

console.log(exemplo);

for (i = 0 ; i < concat.length ; i++) {
    const total = concat[i]
    console.log(`${total} Posição atual: ${i}`)
}
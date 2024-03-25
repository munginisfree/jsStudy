let A = prompt("한 변1");
let B = prompt("한 변2");

let column = ``;

for(let i = 0; i < A; i++){
  for(let j = 0; j < B; j++){
    column += `*`;
  }
  column +=`\n`
}
alert(column);

// let A = 3;
// let B = 3;
// let column = ``;

// for(let i = 0; i < A; i++){
//   for(let j = 0; j < B; j++){
//     column += `*`;
//   }
//   column +=`\n`
// }
// console.log(column);

var scores = [83, 99, 100, 57];

let mean = 0;
let sum = 0;

for(let i=0; i < scores.length; i++){
    sum += scores[i];
}
mean = sum/scores.length;
console.log(`sum: ${sum}, mean: ${mean}`);
var scores = [83, 99, 100, 57];
var pets = ['먐미', '갱얼쥐', '징징이', '밍키'];

scores.push(110);
let last = scores.pop();

console.log(scores);
console.log(last);

// shift(): 배열의 맨 첫데이터 삭제
// unshift(): 배열의 맨 첫번째에 추가
console.log(pets);
pets.shift();
console.log(pets);

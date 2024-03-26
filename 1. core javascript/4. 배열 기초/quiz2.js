let sum = 0;
let arr = [];

while (arr.length < 6) {
  let input = prompt(`숫자를 입력하세요 \n그만두려면 '그만'이라고 입력하세요!`);
  if (input === `그만`) {
    break;
  }
  arr.push(input);
}

alert(arr);
for (let i = 0; i < arr.length; i++) {
  sum += Number(arr[i]);
}

alert(`${arr} \n숫자의 총합은 ${sum}`);

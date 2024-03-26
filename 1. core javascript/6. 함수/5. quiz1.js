/* 
Q. n의 약수의 개수를 구하기
1. 정수 n을 전달받아 n의 약수들을 출력하고 
약수의 개수를 리턴하는 함수 calcDivisor를 정의하세요.
2. 약수의 출력은 함수 내부에서 이뤄져야 합니다.
3. 힌트) 전달받은 n을 1부터 n까지 지속적으로 나누어
 나누어 떨어졌을 시 약수의 개수 카운트를 1증가시키고 출력.
*/

// 호출부
function calcDivisor(num) {
  var count = 0;
  var lst = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      count++;
      lst.push(i);
    }
  }
  console.log(lst);
  return count;
}
var divCount = calcDivisor(20);
console.log(`약수의 개수: ${divCount}개`);

function calcDivisor2(num) {
  var lst = [];
  var pair = num;

  for (let i = 1; i < pair; i++) {
    if (num % i === 0) {
      pair = num / i;
      lst.push(i);
      lst.push(pair);
    }
  }

//   bubble sort
  for (let i = 0; i < lst.length; i++) {
    for (let j = 0; j < lst.length - 1 - i; j++) {
      if (lst[j] > lst[j + 1]) {
        var temp = lst[j];
        lst[j] = lst[j + 1];
        lst[j + 1] = temp;
      }
    }
  }
  console.log(lst);

  return lst.length;
}

var divCount2 = calcDivisor2(20);
console.log(`약수의 개수: ${divCount2}개`);

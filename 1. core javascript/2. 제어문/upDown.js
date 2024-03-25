let count = 10;
let randomNum = Math.floor(Math.random()*100)+1;
// console.log(randomNum);

while(true){
  let num = prompt(`숫자를 입력하세요 [1~100] ${randomNum}`);
  count--;
  if(num === randomNum){
    alert("정답입니다");
    break;
  }
  else if(num > randomNum){
    alert(`DOWN ${count}번의 기회가 남았습니다`);
  }
  else{
    alert(`UP ${count}번의 기회가 남았습니다`);
  }

  if(count ===0){
    alert(`기회가 모두 소진되었습니다.`)
    break;
  }
}


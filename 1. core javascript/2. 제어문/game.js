let count = 1;

let Acount = 0;
let sign = `+`;
let min = 1;
let max = 20;

while (true) {
  let level = prompt("난이도를 입력하세요. 상(1), 중(2), 하(3)");

  if (level === 1) {
    sign = `+-x`;
    break;
  } else if (level === 2) {
    sign = `+-`;
    max = 50;
    break;
  }else if(level === `3`){
    break;
  }
   else {
    alert("1,2,3 중 하나 제대로 입력하삼");
  }

  while (true) {
    let num1 = Math.floor(Math.random() * max) + 1;
    let num2 = Math.floor(Math.random() * max) + 1;
    let randomSign = ``
    let index = sign.length - 1;
    
    while (true) {
      let i = Math.floor(Math.random() * index) + 1;
      if(sign[i]!==``){
        randomSign = sign[i];
        break;
      }else{
        alert(`error`);
      }
    }
    
    let answer = eval(num1+randomSign+num2);
    let user = +prompt(`Q${count}. ${num1} ${randomSign} ${num2} = ??`);
    if (user === 0 && answer!==0) {
      alert(`정답을 ${Acount}번 맞췄습니다.`)
      alert("게임을 종료합니다!");
      break;
    }
    if (answer === user) {
      alert("정답입니다!");
      Acount++;
    } else if (user !== 0) {
      alert("틀렸어요~");
    }
    count++;
  }
}

// 부호 결정

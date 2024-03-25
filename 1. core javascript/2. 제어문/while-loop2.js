let int = +prompt("양의 정수를 입력!");

let result=``;
let operator = `+`;
while(result.length !== int){
  result+=operator;
  if(operator === '+'){
    operator='-';
  }else{
    operator=`+`;
  }
}
alert(result);
let A = +prompt("정수 1");
let B = +prompt("정수 2");
let C = +prompt("정수 3");

if(A===B && B===C){
  alert("모두 같습니다.");
}else{
  if(A===B || A===C || B === C){
    alert("두 값이 같습니다.");
  }
  else{
    alert("모두 다른 값입니다.");
  }
}
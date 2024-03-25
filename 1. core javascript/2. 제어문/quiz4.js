let A = +prompt("정수 1");
let B = +prompt("정수 2");
let C = +prompt("정수 3");

if(A===B && B ===C){
  alert("값이 모두 같습니다");
}else{ 
  if(A<B && B<C)
    alert(`가장 작은 값은 ${A}`);
  
  if(B< A && B > C){ //B가 A보다 크고 C가 B보다 큼
    alert(`가장 작은 값은 ${C}`);
  }
  else{
    alert(`가장 작은 값은 ${B}`);
  }
  
}
// sum

let start = +prompt("시작값");
let end = +prompt("종료값");

let sum = start;
while(start !== end){
  start++;
  sum+=start;
}
alert(sum);
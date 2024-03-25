let input = prompt("정수값");
let result = ``;
let count = 0;
for(i=1; i <= input; i++){
  if(input%i === 0){
    result += i+`\n`;
    count++;
  }
}
alert(`${result}\n약수는 ${count}`)
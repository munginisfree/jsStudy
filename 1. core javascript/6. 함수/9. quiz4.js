/*
  Q. n개의 정수를 전달하면 해당 정수들의 총합과 평균을 
     반환하는 함수 calcNumbersTotalAndAverage를 작성하세요.
*/
function calcNumbersTotalAndAverage(...numbers){
    var result = {
        total : calTotal(numbers),
        avg : calTotal(numbers)/numbers.length,
    }
    return result;    
}
function calTotal(n){
    var sum = 0;
    for(var i of n){
        sum += i;
    }
    return sum;
}

var result = calcNumbersTotalAndAverage(90, 80, 100, 90); //360과 90이 리턴되어야 함!
console.log(`총합: ${result.total}, 평균: ${result.avg}`);


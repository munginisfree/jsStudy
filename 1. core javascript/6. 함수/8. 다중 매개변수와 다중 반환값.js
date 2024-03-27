function add(n1, n2){
    return n1+n2;
}

var r1 = add(5,9);

console.log(r1);



// 만약 n개의 정수 합을 구해주는 함수를 만들어야 한다면
// 파라미터에 집합자료형(배열,객체)을 전달한다.
function addAll(numbers){
    let total = 0;
    for(let n of numbers){
        total += n;
    }
    return total;
}

// ES6 - spread
function addAllES6(...numbers){
    console.log(numbers);
    let total = 0;
    for(let n of numbers){
        total += n;
    }
    return total;
}

var r1 = addAll([1,2,3,4,5,6,7,8,9]);

console.log(r1);

var r2 = addAllES6(10,20,30);


// 다중 반환값
// 함수의 반환값은 언제나 하나다.
function arithmeticOperate(n1, n2) {
    var subResult = n1 - n2;
    var divResult = n1 / n2;
    return {
        sub: n1 - n2, 
        mul: n1 * n2, 
        div: divResult,
        add: add(n1,n2),
        other: subResult**divResult, 
    };
  }
  
  var r3 = arithmeticOperate(20, 10);
  console.log(`덧셈결과: ${r3.add}`);
  console.log(`뺄셈결과: ${r3.sub}`);
  console.log(`곱셈결과: ${r3.mul}`);
  console.log(`나눗셈결과: ${r3.div}`);
  console.log(`나눗셈결과: ${r3.other}`);
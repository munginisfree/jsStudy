// 정수 n을 전달하면 1~n까지의 모든 짝수를 출력

function showEvenNumber(n){
    const nums = [];
    for(let i=1; i <= n; i++){
        if(i%2===0){
            nums.push(i);
        }
    }
    console.log(nums);
}

// showEvenNumber(7);

function showOddNumber(n){
    const nums = [];
    for(let i=1; i <= n; i++){
        if(i%2===1){
            nums.push(i);
        }
    }
    console.log(nums);
}

function showEvenOrOddNumber(n, isOdd){
    const nums = [];
    for(let i=1; i <= n; i++){
        if(i%2=== isOdd){
            nums.push(i);
        }
    }
    console.log(nums);
}

function showTripleNumber(n, x){
    const nums = [];
    for(let i=1; i <= n; i++){
        if(i%x===0){
            nums.push(i);
        }
    }
    console.log(nums);
}


showEvenOrOddNumber(7, 0);


// 콜백을 이용한 솔루션
// 정수 n을 전달하면 1~n 까지의 정수를 조건에 맞게 출력
function showNumber(n, condition){
    const nums = [];
    for(let i=1; i <= n; i++){
        if(condition(i)){
            nums.push(i);
        }
    }
    console.log(nums);
}

showNumber(50, function(i){
    return i % 2===0;
})

console.log(`========================`);
function makeCook(recpietName, recpiet){
    console.log(`나만의 쩝쩝박사 레시피`);
    console.log(`요리 이름: ${recpietName}`);
    recpiet();
    console.log(`참 쉽지요? 여러분도 이대로 만들어보세요~`);
}

makeCook(`맛있는 틈새라면`, ()=> {
    console.log(`1. 생수를 끓인다~`);
    console.log(`2. 라면을 떡과 함께 끓인다~`);
    console.log(`3. 맛있게 먹자~`);
});

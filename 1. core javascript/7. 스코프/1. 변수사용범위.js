// local scope는 함수가 호출 될때 메모리에 생성됨
// 함수 밖에서 쓰고 싶다면 return 으로 내보내서 사용해야함.

// global scope는 그냥 메모리에 셍성됨

// 중첩함수: 함수안에 함수를 정의

function outer(m){
    var n = `outer local n`;
    var v = `outer local v`;
    
    // helper function: only for outer function
    function inner(){

    }
    inner();

}



console.log(m);
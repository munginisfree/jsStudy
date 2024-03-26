// 엔시티 멤버 중 원하는 조합을 만들어보세요

let nct = ['태일', '쟈니',  '태용',  '유타',  '쿤',  '도영',  '텐', '재현',  '윈윈',  '정우',  '마크',  '샤오쥔',  '헨드리', 
    '런쥔',  '제노',  '해찬',  '재민',  '양양',  '천러',  '지성', '쇼타로', '성찬' ];

let debut = [];

// 몇명의 멤버로 설정하고 싶은지 받음
// 이름을 입력받음
// 그룹을 수정하는 함수 만듬
// 그룹을 런칭함

function checkNct(n){
    nct.includes(n);
}
function checkDebut(m){
    debut.includes(m);
}

function howMany(max){
    let max = +prompt('그룹 멤버는 몇명이 좋을까요?');

    if(max <= 0){
        alert(`그룹 만들기를 종료합니다`);
        return false;
    }else{
        return true;
    }
}

function get(i){
    let i = prompt('데뷔시키고 싶은 이름을 입력하세요');
    debut.push(i);
}

function remove(undo){
    let undo = prompt(`데뷔멤버에서 뺄 사람을 입력하세요`);
    if(check(undo)){    
        let i = nct.indexOf(undo);
        debut.splice(i,1);
    }
}

function makeGroup(){
    
}



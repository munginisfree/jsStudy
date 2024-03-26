var tvxq = ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수'];


while(true){
    if(tvxq.length === 0){
        alert(`${tvxq}모든멤버가 삭제되었습니다.`);
        break;
    }
    else{
        let name = prompt(`현재 멤버:${tvxq}\n삭제할 이름을 입력하세요.`);
        if(!(tvxq.includes(name))){
            alert(`${name}는 잘못된 이름입니다.`);
            continue;
        }
        else{
            let i = tvxq.indexOf(name);
            tvxq.splice(i,1);
        }
    }
}
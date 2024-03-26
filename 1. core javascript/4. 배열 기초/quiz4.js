var tvxq = ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수'];
let i = 0;
let reName = ``;

while(true){
    if(tvxq.length === 0 ){
        alert(`동방신기 멤버가 없삼요~`);
        break;
    }
    else{
        let name = prompt(`${tvxq}멤버들 중 바꾸고싶은 사람을 입력하시오`);
        
        if(!tvxq.includes(`name`)){
            alert(`현존하는 멤버 이름을 정확하게 적으세요`);
            continue;
        }
        else if(reName = ``){
            let yes = confirm(`멤버를 탈퇴시키겠습니까?`)
            if(yes){
                i = tvxq.indexOf(name);
                tvxq.splice(i,0);
            }else{
                // 그대로 유지
                reName = name;
            }
        }
        else{
            i = tvxq.indexOf(name);
            tvxq.splice(name,1,reName);
            alert(`${tvxq}멤버가 대체되었습니다`);
        }
    }
}
var tvxq = ["유노윤호", "최강창민", "영웅재중", "믹키유천", "시아준수"];

while (tvxq.length !== 0) {
  let input = +prompt(`현재멤버 ${tvxq}\n메뉴를 선택하세요.\n1.새로운 이름 추가\n2.기존 이름 삭제\n3.프로그램 종료`);

  if (input === 1) {
    let add = prompt(`추가할 새로운 이름을 입력하세요`);
    alert(`${add}가 추가되었습니다.`);
    tvxq.push(add);
  }

  if (input === 2) {
    let remove = prompt(`삭제할 멤버의 이름을 입력하세요.`);
    if (tvxq.includes(remove)) {
      let i = tvxq.indexOf(remove);
      alert(`${remove}가 삭제되었습니다.`);
      tvxq.splice(i, 1);
    }else{
        alert(`해당 이름은 없습니다.`);
    }
  }

  if (input === 3) {
    alert(`프로그램을 종료합니다.`);
    break;
  }
}

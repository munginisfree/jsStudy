// - 요구사항
// 1. 사용자에게 아이디를 입력받으세요.
// 2. 입력된 아이디가 객체에 존재하는 key가 아니라면
//    "존재하지 않는 회원입니다"를 출력하세요.
// 3. 아이디가 존재한다면 비밀번호를 입력받으세요.
// 4. 비밀번호가 입력한 아이디에 대응해서 일치한다면
//    "로그인 성공"을 출력하고 반복문을 탈출하세요.
// 5. 비밀번호가 다르다면 "비밀번호가 틀렸습니다" 를 출력하세요.
// 6. 로그인이 성공할때까지 반복하세요.

var userInfo = {
  userList: [
    {
      account: "kim1234",
      password: "kkk1234",
      username: "김두한",
    },
    {
      account: "park9876",
      password: "ppp9999",
      username: "박찬호",
    },
    {
      account: "hong7766",
      password: "hhh1234",
      username: "홍길동",
    },
  ],
};

// while (true) {
//   let id = prompt(`아이디를 입력하세요`);
//   for (let a of userInfo.userList) {
//     // 아이디 확인
//     if (id !== a.account) {
//       alert(`존재하지 않는 회원입니다.`);
//       break;
//     } else {
//       // 아이디가 존재할 시
//       let index = userInfo.userList.indexOf(a);
//       let pw = prompt(`비밀번호를 입력하세요.`);
//       // 비밀번호 확인
//       if (pw === userInfo.userList[index].password) {
//         alert(`로그인 성공`);
//         break;
//       } else {
//         alert(`비밀번호가 틀렸습니다`);
//       }
//     }
//   }
// }
let find = false;
while (true) {
  while (!find) {
    let id = prompt(`아이디를 입력하세요`);
    for (let a of userInfo.userList) {
      if (id === a.account) {
        var index = userInfo.userList.indexOf(a);
        find = true;
        alert(`회원입니다.`);
        break;
      } else {
        find = false;
      }
    }
  }
  if (!find) {
    alert(`존재하지 않는 회원입니다.`);
    continue;
  }
  if (find) {
    while (true) {
      let pw = prompt(`비밀번호를 입력하세요`);
      if (pw === userInfo.userList[index].password) {
        alert(`로그인 성공`);
        break;
      } else {
        alert(`비밀번호가 틀렸습니다.`);
      }
    }
    break;
  }
}



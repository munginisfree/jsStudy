// 1. 추가기능 - + or enter -> appened to last elemnet, if nothing(even space) -> '필수 입력 사항입니다!'
//2. 체크 기능 -  같은 라인에서 아무데나 체크해도 체크 가능
//3. 삭제 기능
//4. 수정 버튼 - 1-1. 수정모드로 진입 1-2. 수정을 하고 체크 버튼 눌러야 수정 완료

// =========global varaibles ============//

// 서보와 통신할 데이터
const todos = [
    {
      id: 1,
      text: "할 일 1",
      done: false,
    },
    {
      id: 2,
      text: "할 일 2",
      done: false,
    },
    {
      id: 3,
      text: "할 일 3",
      done: false,
    },
  ];
  
  // =========function implement===========//
  
  // 새로운 할 일을 li태그로 만들어서 ul에 추가하는 함수
  function renderNewTodoElement({ id, text }) {
    //2. li 태그 생성하기
    const $newTodoLi = document.createElement("li");
  
    //2-1. 생성한 태그에 텍스트 추가하기
    //   $newTodoLi.textContent = text;
  
    // 2-2. 클래스 data-id 추가하기
    $newTodoLi.dataset.id = id;
    $newTodoLi.classList.add("todo-list-item");
  
    // 2-3. li의 자식들 추가하기
    $newTodoLi.innerHTML = `
        <label class="checkbox">
            <input type="checkbox">
            <span class="text">${text}</span>
        </label>
        <div class="modify">
            <span class="lnr lnr-undo"></span>
        </div>
        <div class="remove">
            <span class="lnr lnr-cross-circle"></span>
        </div>
        `;
  
    //3. 생성한 태그 ul에 추가하기
    const $todoListUl = document.querySelector(".todo-list");
    $todoListUl.append($newTodoLi);
    console.log($todoListUl);
  }
  
  // 새로운 할 일을 추가하는 함수
  function insertTodoData() {
    //1. 입력한 텍스트 읽어오기
    const $todoText = document.getElementById("todo-text");
    const inputText = $todoText.value;
  
    // 새 할 일의 아이디 값을 생성하는 함수
    const makeNewId = () =>
      todos.length === 0 ? 1 : todos[todos.length - 1].id + 1;
  
    // 할 일 데이터 배열에 새로운 할 일 데이터 추가하기 - 그래야 서버로 보내니까
    // todos 배열에 새로운 할 일을 객체로 포장해서 추가해야함
    // 1. 새로운 할 일 데이터를 객체로 만들기
    const newTodo = {
      id: makeNewId(),
      text: inputText,
      done: false,
    };
    // 2. 배열에 추가하기
  
    todos.push(newTodo);
    //새로운 할 일 화면에 랜더링하기
    renderNewTodoElement(newTodo);
  }
  
  // 배열에서 삭제된 할 일 객체를 지우는 함수
  function removeTodoData(dataId) {
    const index = todos.findIndex((todo) => todo.id === dataId);
    todos.splice(index, 1);
  }
  
  //   할 일 완료 상태 데이터 처리
  function toggleDone(dataId) {
    // 체크박스 체크 및 해제 시 todos 배열에 있는 특정 개체의 done property를
    // 반대 값으로 변경해야함
  
    // 1. 클릭한 체크박스가 갖고 있던 id
    //2. 배열을 순회하여 dataId와 일치하는 id를 가진 객체 찾아내기
    const todo = todos.find(todo => todo.id === dataId);
    if(todo) todo.done = !todo.done;
  }
  // =========function runner - 함수 호출, 이벤트리스너 등록 =============//
  
  //추가 버튼 클릭이벤트
  document.getElementById("add").addEventListener("click", (e) => {
    e.preventDefault();
    insertTodoData();
  });
  
  // 삭제 버튼 클릭 이벤트
  document.querySelector(".todo-list").addEventListener("click", (e) => {
    const $targetLi = e.target.closest(".todo-list-item");
    const dataId = +$targetLi.dataset.id;
    if (e.target.matches(".remove span")) {
      console.log("삭제버튼클릭~");
      // 삭제 처리 진행
      // 클릭한 버튼이 포함된 li를 탐색
      // 화면에서 제거
      // document.querySelector('.todo-list').removeChild($targetLi);
      $targetLi.remove();
  
      // 배열에서 데이터 제거
      removeTodoData(dataId);
      console.log(todos);
    } else if (e.target.matches(".checkbox input[type = checkbox]")) {
      //체크박스를 클릭하면
      // check rendering
      e.target.closest(".checkbox").classList.toggle("checked");
      // checked data update
      toggleDone(dataId);
    } else if (e.target.matches(".modify span")) {
        // 1. 수정모드에 진입
        // 1-1. span.lnr-undo를 span.lnr-checkmark-circle 로 클래스 교체
        e.target.classList.replace('lnr-undo', 'lnr-checkmark-circle');

      //1-2. span.text를 input.modify-input으로 태그 교체
        const $input = $targetLi.querySelector('.checkbox').createElement('input');
        
        const $mLi = e.target.closest('li').querySelector('.text');
        const $textValue = $mLi.textContent;
        $input.value = $textValue;
        $input.classList.add('text');
               
        

      
      // 1-2-1. 교체된 input태그 내부에는 기존 span태그를 그대로 유지 value속성으로
      // 2. 수정 완료 처리
      
    }
  });
  
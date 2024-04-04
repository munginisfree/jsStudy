import {todos} from './global_var.js'

// 배열에서 삭제된 할 일 객체를 지우는 함수
function removeTodoData(dataId) {
    const index = todos.findIndex((todo) => todo.id === dataId);
    todos.splice(index, 1);
    console.log(todos);
  }

export  {removeTodoData};
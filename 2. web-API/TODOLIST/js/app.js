document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.todo-insert');
    const todoList = document.querySelector('.todo-list');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const input = document.getElementById('todo-text');
        const todoText = input.value.trim();
        if (todoText !== '') {
            addTodoItem(todoText);
            input.value = '';
        } else {
            alert('제대로 입력해');
        }
    });

    todoList.addEventListener('click', function (event) {
        if (event.target.classList.contains('lnr-cross-circle')) {
            const listItem = event.target.closest('.todo-list-item');
            listItem.remove();
        } else if (event.target.classList.contains('lnr-undo')) {
            modifyTodoItem(event.target);
        }
    });

    function addTodoItem(todoText) {
        const listItem = document.createElement('li');
        listItem.classList.add('todo-list-item');
        listItem.innerHTML = `
            <label class="checkbox">
                <input type="checkbox">
                <span class="text">${todoText}</span>
            </label>
            <div class="modify"><span class="lnr lnr-undo"></span></div>
            <div class="remove"><span class="lnr lnr-cross-circle"></span></div>
        `;
        todoList.appendChild(listItem);
    }

    function modifyTodoItem(undoIcon) {
        const textElement = undoIcon.closest('.todo-list-item').querySelector('.text');
        const newText = prompt('Enter new text for the todo item:', textElement.innerText);
        if (newText !== null) {
            textElement.innerText = newText;
        }
    }
});

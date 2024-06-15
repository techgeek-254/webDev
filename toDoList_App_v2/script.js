document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const newTodoText = todoInput.value.trim();
        if (newTodoText !== '') {
            addTodoItem(newTodoText);
            todoInput.value = '';
            todoInput.focus();
        }
    });

    function addTodoItem(todoText) {
        const li = document.createElement('li');
        li.textContent = todoText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', function() {
            todoList.removeChild(li);
        });

        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    }
});

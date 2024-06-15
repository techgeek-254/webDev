document.title="To-Do App";

document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from Local Storage
    const loadTasks = () => {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => {
            addTaskToDOM(task);
        });
    };

    // Save tasks to Local Storage
    const saveTasks = () => {
        const tasks = [];
        document.querySelectorAll('#task-list li').forEach(task => {
            tasks.push({
                text: task.querySelector('span').textContent,
                completed: task.classList.contains('completed')
            });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    // Add task to DOM
    const addTaskToDOM = (task) => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = task.text;
        if (task.completed) {
            li.classList.add('completed');
        }
        li.appendChild(span);
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', () => {
            li.classList.toggle('completed');
            saveTasks();
        });
        li.appendChild(completeButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(li);
            saveTasks();
        });
        li.appendChild(deleteButton);

        taskList.appendChild(li);
    };

    // Handle form submission
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const task = { text: taskInput.value, completed: false };
        addTaskToDOM(task);
        saveTasks();
        taskInput.value = '';
    });

    // Initial load
    loadTasks();
});


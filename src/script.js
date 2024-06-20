document.getElementById('add-task').addEventListener('click', addTask);

function addTask() {
    const taskText = document.getElementById('new-task').value;
    if (taskText === '') return;
    
    const task = document.createElement('li');
    task.innerHTML = `
        <span>${taskText}</span>
        <div>
            <button class="complete">Complete</button>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </div>
    `;
    
    document.getElementById('pending-tasks').appendChild(task);
    document.getElementById('new-task').value = '';

    task.querySelector('.complete').addEventListener('click', () => completeTask(task));
    task.querySelector('.edit').addEventListener('click', () => editTask(task));
    task.querySelector('.delete').addEventListener('click', () => deleteTask(task));
}

function completeTask(task) {
    task.classList.add('completed');
    task.querySelector('.complete').remove();
    document.getElementById('completed-tasks').appendChild(task);
}

function editTask(task) {
    const newTaskText = prompt('Edit task:', task.querySelector('span').textContent);
    if (newTaskText) {
        task.querySelector('span').textContent = newTaskText;
    }
}

function deleteTask(task) {
    task.remove();
}

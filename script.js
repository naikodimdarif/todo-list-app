document.getElementById('add-task').addEventListener('click', function() {
    const taskText = document.getElementById('new-task').value;
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete');
    deleteBtn.onclick = function() {
        this.parentElement.remove();
    };

    li.appendChild(deleteBtn);
    document.getElementById('task-list').appendChild(li);
    document.getElementById('new-task').value = '';
});
document.getElementById('add-task').addEventListener('click', function() {
    const taskText = document.getElementById('new-task').value;
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const li = document.createElement('li');
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    taskSpan.contentEditable = true;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete');
    deleteBtn.onclick = function() {
        this.parentElement.remove();
    };

    li.appendChild(taskSpan);
    li.appendChild(deleteBtn);
    document.getElementById('task-list').appendChild(li);
    document.getElementById('new-task').value = '';
});

const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    createTaskItem(taskText);
    taskInput.value = '';
  }

});

function createTaskItem(taskText) {
  const li = document.createElement('li');

  const span = document.createElement('span');
  span.textContent = taskText;

  const allBtn = document.createElement('p');

  const editBtn = document.createElement('button');
  editBtn.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';
  editBtn.addEventListener('click', () => {
    const newTask = prompt('Edit task:', taskText);
     span.textContent = newTask;
  });

  const completeBtn = document.createElement('button');
  completeBtn.innerHTML = '<i class="fa-regular fa-square-check"></i>';
  let isCompleted = false;
  completeBtn.addEventListener('click', () => {
    if (!isCompleted) {
      span.style.textDecoration = 'line-through';
      span.style.color = 'green';
    } else {
      span.style.textDecoration = 'none';
      span.style.color = 'black';
    }
    isCompleted = !isCompleted;
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
  deleteBtn.addEventListener('click', () => {
    li.remove();
  });

  allBtn.appendChild(editBtn);
  allBtn.appendChild(completeBtn);
  allBtn.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(allBtn);
  taskList.appendChild(li);
}
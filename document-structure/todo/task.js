const tasksList = document.getElementById('tasks__list');
const taskInput = document.getElementById('task__input');
const tasksAdd = document.getElementById('tasks__add');

function addTask(taskText) {
    // 1. Создаем HTML-код новой задачи
    const taskHTML = `
        <div class="task">
            <div class="task__title">
                ${taskText}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>
    `;
    
    // 2. Вставляем HTML в конец списка
    tasksList.insertAdjacentHTML('beforeend', taskHTML);
    
    // 3. Находим только что добавленную задачу
    const newTask = tasksList.lastElementChild;
    
    // 4. Находим кнопку удаления внутри этой задачи
    const removeButton = newTask.querySelector('.task__remove');
    
    // 5. Вешаем обработчик события ТОЛЬКО на эту кнопку
    removeButton.addEventListener('click', (event) => {
        event.preventDefault();
        newTask.remove(); // Удаляем родительский элемент .task
    });
}

tasksAdd.addEventListener('click', (event) => {
    event.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText) {
        addTask(taskText);
        taskInput.value = ''; // Очищаем поле ввода
    }
});

// Добавление по Enter
taskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault(); // Предотвращаем отправку формы, если она есть
        const taskText = taskInput.value.trim();
        if (taskText) {
            addTask(taskText);
            taskInput.value = '';
        }
    }
});
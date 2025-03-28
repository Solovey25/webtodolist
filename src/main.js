import HeaderComponent from './view/header-component.js';
import AddTaskComponent from './view/add-task-component.js';
import TaskColumnComponent from './view/task-column-component.js';
import { render, RenderPosition } from './framework/render.js';

const tasksContainer = document.querySelector('.tasks');
const bodyElement = document.body;

const headerComponent = new HeaderComponent();
const addTaskComponent = new AddTaskComponent();

const backlogTasks = ['Выучить JS', 'Выучить React', 'Сделать домашку'];
const inProgressTasks = ['Выпить смузи', 'Попить воды'];
const doneTasks = ['Позвонить маме', 'Погладить кота'];
const trashTasks = ['Сходить погулять', 'Прочитать Войну и Мир'];

const backlogColumn = new TaskColumnComponent('Бэклог', backlogTasks, 'backlog');
const inProgressColumn = new TaskColumnComponent('В процессе', inProgressTasks, 'in-progress');
const doneColumn = new TaskColumnComponent('Готово', doneTasks, 'done');
const trashColumn = new TaskColumnComponent('Корзина', trashTasks, 'trash');

render(headerComponent, bodyElement, RenderPosition.AFTERBEGIN); // Хедер в начало body
render(addTaskComponent, tasksContainer, RenderPosition.BEFOREBEGIN); // Форму добавления в конец body (или можно перед <main>)

render(backlogColumn, tasksContainer);
render(inProgressColumn, tasksContainer);
render(doneColumn, tasksContainer);
render(trashColumn, tasksContainer);

const addButton = addTaskComponent.getElement().querySelector('.add-task__button');
const inputField = addTaskComponent.getElement().querySelector('input[type="text"]');

if (addButton && inputField) {
    addButton.addEventListener('click', (evt) => {
        evt.preventDefault(); // Предотвращаем стандартное поведение кнопки в форме
        const taskText = inputField.value.trim();
        if (taskText) {
            console.log('Добавить задачу:', taskText);
            inputField.value = '';
        } else {
            console.log('Введите название задачи');
        }
    });
}

// Найдем кнопку очистки в корзине ПОСЛЕ рендеринга trashColumn
const clearButton = trashColumn.getElement().querySelector('.clear-button');
if (clearButton) {
    clearButton.addEventListener('click', () => {
        console.log('Очистить корзину');
    });
}

tasksContainer.querySelectorAll('.tasks__list li').forEach(taskItem => {
    taskItem.addEventListener('click', () => {
        console.log('Кликнули на задачу:', taskItem.textContent);
    });
});
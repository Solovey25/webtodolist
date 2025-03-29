import HeaderComponent from './view/header-component.js';
import AddTaskComponent from './view/add-task-component.js';
import TaskBoardComponent from './view/task-board-component.js';
import TaskColumnComponent from './view/task-column-component.js';
import TaskItemComponent from './view/task-item-component.js';
import { render, RenderPosition } from './framework/render.js';

const bodyElement = document.body;

const headerComponent = new HeaderComponent();
const addTaskComponent = new AddTaskComponent();

render(headerComponent, bodyElement, RenderPosition.AFTERBEGIN);
render(addTaskComponent, headerComponent.getElement(), RenderPosition.AFTEREND);

const columnsData = [
    { title: 'Бэклог', tasks: ['Выучить JS', 'Выучить React', 'Сделать домашку'], className: 'backlog'},
    { title: 'В процессе', tasks: ['Выпить смузи', 'Попить воды'], className: 'in-progress'},
    { title: 'Готово', tasks: ['Позвонить маме', 'Погладить кота'], className: 'done'},
    { title: 'Корзина', tasks: ['Сходить погулять', 'Прочитать Войну и Мир'], className: 'trash'}
];

const taskBoardComponent = new TaskBoardComponent();
render(taskBoardComponent, addTaskComponent.getElement(), RenderPosition.AFTEREND);
const boardElement = taskBoardComponent.getElement(); // <main class="tasks">


const columnComponents = [];

for (let i = 0; i < columnsData.length; i++) {
    const columnInfo = columnsData[i];
    const columnComponent = new TaskColumnComponent(columnInfo.title, columnInfo.className);
    columnComponents.push(columnComponent);
    render(columnComponent, boardElement);

    const taskListContainer = columnComponent.getTaskListContainerElement();

    for (let j = 0; j < columnInfo.tasks.length; j++) {
        const taskText = columnInfo.tasks[j];

        const taskItemComponent = new TaskItemComponent(taskText);

        render(taskItemComponent, taskListContainer);

        taskItemComponent.getElement().addEventListener('click', () => {
            console.log(`Кликнули на задачу: "${taskText}" в колонке "${columnInfo.title}"`);
        });
    }

    if (columnInfo.className === 'trash') {
        const clearButton = columnComponent.getElement().querySelector('.clear-button');
        if (clearButton) {
            clearButton.addEventListener('click', () => {
                console.log('Очистить корзину');
                console.warn('Логика очистки корзины еще не реализована');
            });
        }
    }
}

const addButton = addTaskComponent.getElement().querySelector('.add-task__button');
const inputField = addTaskComponent.getElement().querySelector('input[type="text"]');

if (addButton && inputField) {
    addButton.addEventListener('click', (evt) => {
        evt.preventDefault();
        const taskText = inputField.value.trim();
        if (taskText) {
            console.log('Добавить задачу:', taskText);

            const backlogColumnComponent = columnComponents.find(col => col.className === 'backlog');
            if (backlogColumnComponent) {
                const taskListContainer = backlogColumnComponent.getTaskListContainerElement();
                const newTaskItemComponent = new TaskItemComponent(taskText);
                render(newTaskItemComponent, taskListContainer);
                newTaskItemComponent.getElement().addEventListener('click', () => {
                    console.log(`Кликнули на задачу: "${taskText}" в колонке "Бэклог"`);
                });
                const backlogData = columnsData.find(col => col.className === 'backlog');
                if(backlogData) {
                    backlogData.tasks.push(taskText);
                }
                console.log('Задача добавлена в Бэклог (визуально и в данные)');
            } else {
                console.error('Не удалось найти колонку Бэклог для добавления задачи');
            }

            inputField.value = '';
        } else {
            console.log('Введите название задачи');
        }
    });
}